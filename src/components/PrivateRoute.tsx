// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
import React, { FC, PropsWithChildren } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { useAuth } from "./AppAuth";

const PrivateRoute: FC<PropsWithChildren<any> & RouteComponentProps> = ({
  children,
  ...rest
}: PropsWithChildren<any> & RouteComponentProps) => {
  const { signedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        signedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
