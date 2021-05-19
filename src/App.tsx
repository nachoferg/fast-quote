import React, { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Amplify from "aws-amplify";
import Main from "./components/Main";
import { AuthProvider } from "./components/AppAuth";
import { PageVarsProvider } from "./components/PageVars";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
const App: FunctionComponent = () => (
  <AuthProvider>
    <Router>
      <PageVarsProvider>
        <Main />
      </PageVarsProvider>
    </Router>
  </AuthProvider>
);
export default App;
