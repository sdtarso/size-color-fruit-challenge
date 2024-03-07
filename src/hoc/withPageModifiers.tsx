import flowRight from "lodash/flowRight";
import { ComponentType } from "react";
import withHelmet from "./withHelmet";
import withSiteConfigProvider from "./withSiteConfigProvider";

/**
 * Higher-order component (HOC) that enhances a component by adding the common
 * page modifiers to it.
 */
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
