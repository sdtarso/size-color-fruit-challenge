import flowRight from "lodash/flowRight";
import { ComponentType } from "react";
import withHelmet from "./withHelmet";
import withSiteConfigProvider from "./withSiteConfigProvider";

const withPageModifiers = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  const WrapperComponent: ComponentType<P> = flowRight(
    withSiteConfigProvider,
    withHelmet
  )(WrappedComponent);

  return WrapperComponent;
};

export default withPageModifiers;
