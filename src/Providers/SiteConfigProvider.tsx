import { ReactNode, createContext } from "react";
import { SiteConfigProps } from "@/hoc";

export const SiteConfigContext = createContext<{
  configuration?: SiteConfigProps;
}>({});

export type SiteConfigProviderProps = {
  configuration?: SiteConfigProps;
  children?: ReactNode;
};

export const SiteConfigProvider = ({
  configuration,
  children,
}: SiteConfigProviderProps) => (
  <SiteConfigContext.Provider value={{ configuration }}>
    {children}
  </SiteConfigContext.Provider>
);
