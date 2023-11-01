import Link from "next/link";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface BackButtonProps {
  to?: string;
}

export const BackButton = ({ to = "/" }: BackButtonProps) => (
  <Link className="mr-4 text-xl" href={to}>
    ←
  </Link>
);

interface PrimaryButtonProps {
  handleClick?: () => void;
  className?: string;
}

export const PrimaryButton = ({
  handleClick,
  children,
  className,
}: PropsWithChildren<PrimaryButtonProps>) => {
  const defaultClasses = [
    "inline-block",
    "no-underline",
    "cursor-pointer",
    "text-white",
    "bg-red-500",
    "hover:bg-red-600",
    "tracking-wide",
    "uppercase",
    "font-base",
    "rounded-sm",
    "py-2",
    "px-4",
    "font-medium",
    "transition-all"
  ];
  return (
    <button
      className={twMerge(defaultClasses, className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
