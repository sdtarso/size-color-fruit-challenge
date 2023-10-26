import { ReactNode } from "react";

interface OrderedListProps {
  children: ReactNode;
}
export const OrderedList = ({ children }: OrderedListProps) => (
  <ol className="list-decimal list-inside mb-4">{children}</ol>
);
