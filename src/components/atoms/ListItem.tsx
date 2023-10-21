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
    className={`List__item List__item--${color} ${
      isActive ? "List__item--active" : ""
    }`}
  >
    {name}
  </li>
);
