export interface ColorNameInterface {
  color: string;
  name: string;
}

interface ListItemProps extends ColorNameInterface {
  isActive: boolean;
  handleClick: () => void;
}

export const ListItem = ({
  color,
  name,
  isActive,
  handleClick,
}: ListItemProps) => (
  <li
    onClick={handleClick}
    key={name}
    className={[
      "flex items-center justify-center",
      "text-center text-white rounded p-1 text-sm cursor-pointer",
      `bg-${color}-500`,
      isActive ? "font-bold shadow-sfc-active" : "",
    ].join(" ")}
  >
    {name}
  </li>
);
