import { BlockCode } from "@/components/atoms";
import { PageHeader } from "@/components/organisms";

export default function SizeFruitColor() {
  return (
    <div className="px-4">
      <PageHeader title="Lazy Load Image" path="app/page-modifiers-hoc/page.tsx" />
      <p className="mb-4">
        This is more a architetural solution, where i had to think in a way to
        add custom helmets to a site. A Helmet Need a Script tag and some config
        values, usually set on the enviroment.
      </p>
      <p className="mb-4">
        The solution consists of two React High Order Component (HOC) that work
        together, the first basically serves to create a Context Provider, using{" "}
        <a
          className="underline"
          href="https://react.dev/reference/react/useContext"
          target="_blank"
        >
          React&apos;s ContextAPI
        </a>
        , which searches for the necessary information in the application&apos;s
        environment variables and standardizes them to be used by the second
        HOC, a function that encapsulates two components together, the first is
        received as a parameter and the second is the Helmet component, which
        has the atomic Helmets of each vendor.
      </p>
      <p className="mb-4">
        In this scenario, the order of execution is important because, for the
        Helmets to be instantiated correctly, the Provider must have already
        loaded all the necessary variables, so I used the{" "}
        <a
          href="https://lodash.com/docs/#flowRight"
          className="underline"
          target="_blank"
        >
          lodash function flowRight
        </a>
        to create a new composite function, which generates a new function
        component, the final HOC created.
      </p>
      <p className="mb-6">
        The usage is quite simple, you just need to wrap the Layout with the
        HOC, like this:
      </p>
      <BlockCode>
        ...
        <br/>
        const Layout = withPageModifiers((...) {'=>'} {'{...}'})
        <br/>
        ...
        <br/>
        <br/>
        export default Layout
      </BlockCode>
    </div>
  );
}
