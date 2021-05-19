import React from "react";
import { useParams } from "react-router-dom";
import { usePageVars } from "./PageVars";

export default function Farm() {
  const { farmName, visitDate } = useParams<{
    farmName: string;
    visitDate: string;
  }>();
  const { setHeader, setNavKey } = usePageVars();

  setHeader("Farm");
  setNavKey(`farm${farmName}`);

  return (
    <div>
      <h1>Farm</h1>
      <p>Visit date {visitDate}</p>
    </div>
  );
}
