import { SiteConfigProvider } from "@/Providers";
import { ComponentType } from "react";
import siteConfigs from "../utils/siteConfigs";
import { VendorHelmetProps } from "@/components/atoms/VendorHelmet";

export interface SiteConfigProps {
  vendorConfig?: VendorHelmetProps;
}

export interface WrapperProps {
  siteConfig: SiteConfigProps;
}

export type WrappedProps<P> = Omit<P, "siteConfig">;

const configuration = {
  vendorConfig: {
    key: siteConfigs.VENDOR_CONFIG_KEY,
    value: siteConfigs.VENDOR_CONFIG_VALUE,
  },
};

const withSiteConfigProvider = <T extends WrapperProps>(
  WrappedComponent: ComponentType<WrappedProps<T>>
): ComponentType<T> => {
  const WrapperComponent: ComponentType<T> = (props) => {
    return (
      <SiteConfigProvider configuration={configuration}>
        <WrappedComponent {...props} />
      </SiteConfigProvider>
    );
  };

  return WrapperComponent;
};

export default withSiteConfigProvider;
