import React, { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => (
  <>
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </>
);

export default NotFound;
