import { Helmet } from "@/components/molecules";
import { ComponentType, useContext } from "react";
import { SiteConfigContext } from "@/Providers";

/**
 * Higher-order component (HOC) that enhances a component with the common
 * page Helmet
 */
const withHelmet = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  const WrapperComponent: ComponentType<P> = (props) => {
    const { configuration } = useContext(SiteConfigContext);
    return (
      <>
        <Helmet {...configuration} />
        <WrappedComponent {...props} />
      </>
    );
  };

  return WrapperComponent;
};

export default withHelmet;
