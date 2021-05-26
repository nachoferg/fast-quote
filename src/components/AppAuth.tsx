import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  FC,
  PropsWithChildren,
} from "react";

import { CognitoUser } from "amazon-cognito-identity-js";
// import { Hub } from "aws-amplify";
import { Logger } from "@aws-amplify/core";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

export interface IAuthContextProps {
  username: string | undefined;
  signedIn: boolean;
}

const logger = new Logger("AppAuth");
const authContext = createContext({} as IAuthContextProps);

function useAuthProvider() {
  const [signedIn, setSignedIn] = useState(false);
  const [username, setUsername] = useState<string | undefined>();

  useEffect(
    () =>
      /*
    Hub.listen("auth", async ({ payload: { event, data } }) => {
      logger.debug(event, data);
      switch (event) {
        case "signIn":
          logger.debug("signIn");
          break;
        case "signIn_failure":
          logger.debug("signIn_failure");
          break;
        case "cognitoHostedUI":
          logger.debug("cognitoHostedUI");
          break;
        case "cognitoHostedUI_failure":
          logger.debug("cognitoHostedUI_failure");
          break;
        case "customOAuthState":
          logger.debug("customOAuthState");
          break;
        case "customState_failure":
          logger.debug("customState_failure");
          break;
        case "tokenRefresh":
          logger.debug("tokenRefresh");
          break;
        case "tokenRefresh_failure":
          logger.debug("tokenRefresh_failure");
          break;
        case "codeFlow":
          logger.debug("codeFlow");
          break;
        case "implicitFlow":
          logger.debug("implicitFlow");
          break;
        case "configured":
          logger.debug("configured");
          break;
        case "parsingCallbackUrl":
          logger.debug("parsingCallbackUrl");
          break;
        case "signOut":
          logger.debug("signOut");
          break;
        case "oAuthSignOut":
          logger.debug("oAuthSignOut");
          break;
        default:
          logger.debug("No matching cases in auth flow");
          break;
      }
    });
    */

      onAuthUIStateChange((nextAuthState, authData) => {
        logger.debug(nextAuthState);
        logger.debug(authData);
        if (authData) {
          const userData = authData as CognitoUser;
          setUsername(userData.getUsername());
          setSignedIn(nextAuthState === AuthState.SignedIn);
        } else {
          setUsername(undefined);
          setSignedIn(false);
        }
      }),
    []
  );

  return {
    username,
    signedIn,
  } as IAuthContextProps;
}

export const AuthProvider: FC<PropsWithChildren<any>> = ({
  children,
}: PropsWithChildren<any>) => {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const AuthConsumer = authContext.Consumer;

export const useAuth = (): IAuthContextProps =>
  useContext(authContext) as IAuthContextProps;
