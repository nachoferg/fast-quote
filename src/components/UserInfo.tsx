import React, { useEffect } from "react";
import { usePageVars } from "./PageVars";

export default function UserInfo() {
  const { setHeader, setNavKey } = usePageVars();

  useEffect(() => {
    setHeader("User Info");
    setNavKey("userinfo");
  }, []);

  return (
    <div>
      <h1>UserInfo</h1>
    </div>
  );
}
