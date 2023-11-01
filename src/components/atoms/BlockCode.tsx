import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface BlockCodeProps {
  className?: string;
}

export const BlockCode = ({
  className,
  children,
}: PropsWithChildren<BlockCodeProps>) => (
  <div
    className={twMerge(
      "bg-neutral-900 rounded p-4 text-white text-sm",
      className
    )}
  >
    <pre>{children}</pre>
  </div>
);
