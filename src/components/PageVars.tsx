import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  FC,
  PropsWithChildren,
} from "react";

import { Logger } from "@aws-amplify/core";

export interface IPageVarsContextProps {
  header: string;
  setHeader: (prevState: string) => string;
  navKey: string;
  setNavKey: (prevState: string) => string;
}

const logger = new Logger("AppContext");
const pageVarsContext = createContext({} as IPageVarsContextProps);

function usePageVarsContextProvider() {
  const [header, setHeader] = useState("");
  const [navKey, setNavKey] = useState("");

  useEffect(() => {
    // Do something
    logger.debug("test");

    // Return clean up function if necessary
    return function cleanup() {
      // Unsubscribe for a subscription
      // Prevent memory leaks
      // Etcetera
    };
  }, []);
  return {
    header,
    setHeader,
    navKey,
    setNavKey,
  } as IPageVarsContextProps;
}

export const PageVarsProvider: FC<PropsWithChildren<any>> = ({
  children,
}: PropsWithChildren<any>) => {
  const value = usePageVarsContextProvider();
  return (
    <pageVarsContext.Provider value={value}>
      {children}
    </pageVarsContext.Provider>
  );
};

export const PageVarsConsumer = pageVarsContext.Consumer;

export const usePageVars = (): IPageVarsContextProps =>
  useContext(pageVarsContext) as IPageVarsContextProps;
