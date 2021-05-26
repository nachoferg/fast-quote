import React, { FC, useEffect, useState } from "react";
import { generatePath } from "react-router";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
} from "@material-ui/core";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import { Logger } from "@aws-amplify/core";

// import { NonEmptyDateRange } from "@material-ui/lab/DateRangePicker/RangeTypes";
// import { parseISO } from "date-fns";
import { ListQuotesQuery } from "../API";
import { listQuotes } from "../graphql/queries";
import { deleteQuote } from "../graphql/mutations";
import { IQuote, StringMap } from "./types";
import { usePageVars } from "./PageVars";
import Title from "./Title";

const logger = new Logger("QuoteList");

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const QuoteList: FC = () => {
  const classes = useStyles();
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const { setHeader, setNavKey } = usePageVars();
  const [loading, setLoading] = useState(true);

  const title = "Quote List";

  useEffect(() => {
    setHeader(title);
    setNavKey("quoteList");
  }, []);

  async function deleteEntry(quote: IQuote) {
    try {
      await API.graphql(
        graphqlOperation(deleteQuote, {
          input: {
            qid: quote.qid,
            owner: quote.owner,
          },
        })
      );

      const tmpList = [...quotes];
      const index = tmpList.findIndex(
        (item) => item.qid === quote.qid && item.owner === quote.owner
      );
      if (index > -1) {
        tmpList.splice(index, 1);
        setQuotes(tmpList);
        setLoading(false);
      }
    } catch (err) {
      logger.error("Error deleting entry", err);
    }
  }

  function seeMore() {}

  function daysDiff(duration: string) {
    const parsedDuration = JSON.parse(duration);

    const start = new Date(parsedDuration[0]).getTime();
    const end = new Date(parsedDuration[1]).getTime();
    // const start = duration[0].getTime();
    // const end = duration[1].getTime();
    logger.debug(start, end);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  useEffect(() => {
    async function fetchQuotes(query: any) {
      try {
        const quotesData = (await API.graphql(
          graphqlOperation(listQuotes, query)
        )) as GraphQLResult<ListQuotesQuery>;
        setLoading(false);
        const quotesList = quotesData?.data?.listQuotes?.items as StringMap;
        logger.debug(quotesList);
        if (quotesList) {
          setQuotes(quotesList as IQuote[]);
        }
      } catch (err) {
        logger.error("error fetching Quotes", err);
      }
    }

    fetchQuotes({});
  }, []);

  return loading ? (
    <CircularProgress color="primary" />
  ) : (
    <>
      <h1>{title}</h1>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>qid</TableCell>
            <TableCell>owner</TableCell>
            <TableCell align="right">duration</TableCell>
            <TableCell>smoker</TableCell>
            <TableCell>gender</TableCell>
            <TableCell>quote</TableCell>
            <TableCell>age</TableCell>
            <TableCell>createdAt</TableCell>
            {/*
            <TableCell>updatedAt</TableCell>
            */}
            <TableCell colSpan={2}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quotes.map((quote) => (
            <TableRow key={quote.qid}>
              <TableCell>{quote.qid}</TableCell>
              <TableCell>{quote.owner}</TableCell>
              <TableCell>{`${daysDiff(
                quote.duration as string
              )} days`}</TableCell>
              <TableCell>{quote.smoker}</TableCell>
              <TableCell>{quote.gender}</TableCell>
              <TableCell>{quote.quote}</TableCell>
              <TableCell>{quote.age}</TableCell>
              <TableCell>{quote.createdAt}</TableCell>
              {/*
              <TableCell>{quote.updatedAt}</TableCell>
              */}
              <TableCell>
                <Button
                  component={NavLink}
                  to={() =>
                    generatePath("/quote/:qid/:owner", {
                      qid: quote.qid,
                      owner: quote.owner,
                    })
                  }
                  color="primary"
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  color="primary"
                  onClick={() => {
                    deleteEntry(quote);
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Button color="primary" onClick={seeMore}>
          See more entries
        </Button>
      </div>
    </>
  );
};

export default QuoteList;
