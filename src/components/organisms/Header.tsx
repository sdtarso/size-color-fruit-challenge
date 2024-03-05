import { PageTitle } from "../molecules";

interface PageHeaderProps {
  title: string;
  path?: string;
}
export const PageHeader = ({ title, path }: PageHeaderProps) => (
  <div className="my-4 flex justify-between">
    <PageTitle title={title} />
    <a
      className="ml-auto text-sm font-mono"
      href={`https://github.com/sdtarso/tech-challenge/blob/main/src/app/${path || ""}`}
      target="_blank"
    >
      source code
    </a>
  </div>
);
