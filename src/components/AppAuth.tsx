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
  user: object;
  signedIn: boolean;
}

const logger = new Logger("AppAuth");
const authContext = createContext({} as IAuthContextProps);

function useAuthProvider() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState<object | undefined>();

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
          // let groupsLocal = [];
          // groupsLocal = userData.getSignInUserSession()?.getIdToken()?.payload[
          //  "cognito:groups"
          // ];
          const userLocal = {
            username: userData.getUsername().split("_")[1],
            // groups: groupsLocal,
            // isAdministrator: groupsLocal.includes("Administrators"),
            // isManager: groupsLocal.includes("Managers"),
          };
          setUser(userLocal);
          setSignedIn(nextAuthState === AuthState.SignedIn);
        } else {
          setUser(undefined);
          setSignedIn(false);
        }
      }),
    []
  );

  return {
    user,
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
