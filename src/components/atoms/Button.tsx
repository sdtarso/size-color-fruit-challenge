import Link from "next/link";

interface BackButtonProps {
  to?: string;
}

export const BackButton = ({ to = "/" }: BackButtonProps) => (
  <Link className="mr-4 text-xl" href={to}>
    ←
  </Link>
);
