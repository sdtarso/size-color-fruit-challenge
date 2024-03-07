const siteConfigs = {
  get VENDOR_CONFIG_KEY() {
    return process.env.VENDOR_CONFIG_KEY || "";
  },
  get VENDOR_CONFIG_VALUE() {
    return process.env.VENDOR_CONFIG_VALUE || "";
  },
};

export default siteConfigs;
