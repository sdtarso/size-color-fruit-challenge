import { SiteConfigProps } from "@/hoc";
import VendorHelmet from "../atoms/VendorHelmet";

/**
 * Helmet component.
 *
 * @param props The configuration props for the helmets.
 * @returns The rendered helmet component.
 */
export const Helmet = ({ vendorConfig }: SiteConfigProps) => {
  return (
    <>
      <VendorHelmet {...vendorConfig} />
    </>
  );
};
