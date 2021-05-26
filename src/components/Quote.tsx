import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import {
  Alert,
  Box,
  Grid,
  FormControl,
  TextField,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Input,
  // TextareaAutosize,
  CircularProgress,
} from "@material-ui/core/";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import { NonEmptyDateRange } from "@material-ui/lab/DateRangePicker/RangeTypes";
import { DateRangePicker, LocalizationProvider } from "@material-ui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Logger } from "@aws-amplify/core";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import { v4 as uuidv4 } from "uuid";
import { usePageVars } from "./PageVars";
import { GetQuoteQuery } from "../API";
import { createQuote, updateQuote } from "../graphql/mutations";
import { getQuote } from "../graphql/queries";
import { IQuote, IQuoteParams, StringMap } from "./types";
import { useAuth } from "./AppAuth";
import AuthenticatorCustom from "./AuthenticatorCustom";

const schema = yup.object().shape({
  // qid: yup.string().required(),
  // owner: yup.string().required(),
  duration: yup.array().of(yup.date()).length(2).required(),
  smoker: yup.string().required(),
  gender: yup.string(),
  quote: yup.number().positive().required(),
  age: yup.number().positive().integer().required(),
});

export default function Quote() {
  const { qid, owner } = useParams<IQuoteParams>();
  const { username, signedIn } = useAuth();
  const { setHeader, setNavKey } = usePageVars();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm<IQuote>({
    resolver: yupResolver(schema),
  });

  const logger = new Logger("Quote");
  const [recordExists, setRecordExists] = useState(false);
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [loading, setLoading] = useState(true);

  const title = "Quote";

  useEffect(() => {
    setHeader(title);
    setNavKey("quote");
  }, []);

  function getRandomInt(min: number, max: number) {
    const minLocal = Math.ceil(min);
    const maxLocal = Math.floor(max);
    return Math.floor(Math.random() * (maxLocal - minLocal + 1)) + minLocal;
  }

  async function fetchQuote(locaQuoteParams: IQuoteParams) {
    let QuoteLocal = {} as IQuote;
    if (locaQuoteParams.qid && locaQuoteParams.owner) {
      try {
        const QuoteData = (await API.graphql(
          graphqlOperation(getQuote, {
            qid: locaQuoteParams.qid,
            owner: locaQuoteParams.owner,
          })
        )) as GraphQLResult<GetQuoteQuery>;
        const fetchedQuote = QuoteData?.data?.getQuote as StringMap;
        if (fetchedQuote) {
          setValue(
            "duration",
            [new Date(), new Date()] as NonEmptyDateRange<Date>,
            {
              shouldValidate: true,
            }
          );
          QuoteLocal = fetchedQuote as IQuote;
          setRecordExists(true);
        }
      } catch (err) {
        logger.error("error fetching Quote", err);
      }
    }
    return QuoteLocal;
  }

  async function saveQuote(data: any) {
    try {
      const sQuote = data as any;
      setEnableSubmit(true);
      const utcDate = new Date();
      const utcDateIso = utcDate.toISOString();
      if (recordExists) {
        logger.debug("recordExists", recordExists, data);
        sQuote.updatedAt = utcDateIso;
        await API.graphql(graphqlOperation(updateQuote, { input: sQuote }));
      } else {
        logger.debug("noRecordExists", recordExists, data);
        sQuote.qid = uuidv4();
        sQuote.owner = username;
        sQuote.updatedAt = utcDateIso;
        sQuote.createdAt = utcDateIso;
        sQuote.duration = JSON.stringify(data.duration);
        await API.graphql(graphqlOperation(createQuote, { input: sQuote }));
      }
    } catch (err) {
      logger.error("error saving Quote:", err);
    }
    setEnableSubmit(false);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    async function initForm() {
      const fetchedQuote = await fetchQuote({
        qid,
        owner,
      } as IQuoteParams);
      reset(fetchedQuote);
      setLoading(false);
    }

    initForm();
  }, [qid, owner, reset]);

  const page = loading ? (
    <CircularProgress color="primary" />
  ) : (
    <>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(saveQuote)}>
        <Controller
          name="quote"
          control={control}
          defaultValue={getRandomInt(100, 1000)}
          render={({ field }) => <Input type="hidden" {...field} />}
        />
        <Grid container spacing={2}>
          {/*
          <Grid item xs={12}>
            <Controller
              name="qid"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextareaAutosize
                  aria-label="QID"
                  minRows={3}
                  placeholder="qid"
                  {...field}
                />
              )}
            />
            {!!errors.qid && (
              <Alert severity="error">{errors.qid?.message}</Alert>
            )}
          </Grid>
          */}

          <Grid item xs={12}>
            <FormLabel component="legend">Duration</FormLabel>
            <Box paddingBottom={2} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="duration"
                control={control}
                defaultValue={
                  [new Date(), new Date()] as NonEmptyDateRange<Date>
                }
                render={({ field }) => (
                  <DateRangePicker
                    {...field}
                    value={field.value as NonEmptyDateRange<Date>}
                    startText="Check-in"
                    endText="Check-out"
                    renderInput={(startProps, endProps) => (
                      <>
                        <TextField type="date" {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField type="date" {...endProps} />
                      </>
                    )}
                  />
                )}
              />
            </LocalizationProvider>
            {!!errors.duration && (
              <Alert severity="error">{errors.duration?.message}</Alert>
            )}
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Smoker?</FormLabel>
              <Controller
                control={control}
                defaultValue="No"
                name="smoker"
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
            {!!errors.smoker && (
              <Alert severity="error">{errors.smoker?.message}</Alert>
            )}
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <Controller
                control={control}
                defaultValue="true"
                name="gender"
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
            {!!errors.gender && (
              <Alert severity="error">{errors.gender?.message}</Alert>
            )}
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="age"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField label="Age" {...field} />}
            />
            {!!errors.age && (
              <Alert severity="error">{errors.age?.message}</Alert>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={enableSubmit}
            >
              Submit
            </Button>

            <Box display={!enableSubmit ? "none" : "block"}>
              <CircularProgress color="primary" />
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );

  return signedIn ? page : <AuthenticatorCustom />;
}
