import { BackButton } from "../atoms";

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => (
  <span>
    <BackButton to="/" />
    <span className="text-xl">{title}</span>
  </span>
);
