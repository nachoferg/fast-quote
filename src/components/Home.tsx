import React from "react";
import { useAuth } from "./AppAuth";
import AuthenticatorCustom from "./AuthenticatorCustom";
import { usePageVars } from "./PageVars";

export default function Home() {
  const { signedIn } = useAuth();
  const { setHeader, setNavKey } = usePageVars();

  setHeader("Home");
  setNavKey("home");

  return (
    <>
      <h1>Home</h1>
      {signedIn ? <p>This is home.</p> : <AuthenticatorCustom />}
    </>
  );
}
