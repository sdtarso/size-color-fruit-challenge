import Script from "next/script";

export interface VendorHelmetProps {
  key?: string;
  value?: string;
}

function VendorHelmet({ key, value }: VendorHelmetProps) {
  if (!key || !value) {
    return null;
  }

  return (
    <Script
      type="text/javascript"
      src={`https://VENDORDOMAIN.org/script.js?KEY=${key}&value=${value}`}
    />
  );
}

export default VendorHelmet;
