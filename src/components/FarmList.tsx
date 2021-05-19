import React, { FC, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { API, graphqlOperation } from "aws-amplify";
import { generatePath } from "react-router";
import { GraphQLResult } from "@aws-amplify/api";
import { Logger } from "@aws-amplify/core";
import { listFarms } from "../graphql/queries";
import { ListFarmsQuery } from "../API";
import Title from "./Title";
import { usePageVars } from "./PageVars";

const logger = new Logger("FarmList");
export interface ISaLinksParams {
  farmName: string;
  visitDate: string;
}

export interface IFarm {
  farmName: string;
  visitDate: string;
  results: string;
  createdAt?: string;
  updatedAt?: string;
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const FarmList: FC = () => {
  const classes = useStyles();
  const [farms, setFarms] = useState<IFarm[]>([]);
  const { setHeader, setNavKey } = usePageVars();

  setHeader("Farm List");
  setNavKey("farmlist");

  function test() {}

  useEffect(() => {
    async function fetchFarms(query: any) {
      try {
        const farmsData = (await API.graphql(
          graphqlOperation(listFarms, query)
        )) as GraphQLResult<ListFarmsQuery>;
        const farmsList = farmsData?.data?.listFarms?.items as IFarm[];
        if (farmsList && farmsList.length > 0) {
          setFarms(farmsList);
        }
      } catch (err) {
        logger.error("error fetching Farms", err);
      }
    }

    fetchFarms({});
  }, []);

  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>farmName</TableCell>
            <TableCell>visitDate</TableCell>
            <TableCell align="right">results</TableCell>
            <TableCell>createdAt</TableCell>
            <TableCell>updatedAt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {farms.map((farm) => (
            <TableRow key={farm.farmName}>
              <TableCell>
                <Link
                  href={generatePath("/farm/:farmName/:visitDate", {
                    farmName: farm.farmName,
                    visitDate: farm.visitDate,
                  })}
                >
                  {farm.farmName}
                </Link>
              </TableCell>
              <TableCell>{farm.visitDate}</TableCell>
              <TableCell align="right">{farm.results}</TableCell>
              <TableCell>{farm.createdAt}</TableCell>
              <TableCell>{farm.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Button color="primary" onClick={test}>
          See more orders
        </Button>
      </div>
    </>
  );
};

export default FarmList;
