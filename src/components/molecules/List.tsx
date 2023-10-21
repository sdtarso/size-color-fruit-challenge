import { useMemo } from "react";
import { ColorNameInterface, ListItem } from "../atoms";

export interface ListProps<T> {
  isFavorites?: boolean;
  items: Array<T>;
  selecteds: Array<T>;
  handleClick: (p: ColorNameInterface) => void;
}

export const List = ({
  items,
  selecteds,
  handleClick,
  isFavorites = false,
}: ListProps<ColorNameInterface>) => {
  const memoized = useMemo(() => {
    const isActive = (item: ColorNameInterface) => {
      return isFavorites || selecteds.some(({ name }) => name === item.name);
    };
    return items.map((item, key) => (
      <ListItem
        key={key}
        {...item}
        handleClick={() => handleClick(item)}
        isActive={isActive(item)}
      />
    ));
  }, [isFavorites, items, handleClick, selecteds]);
  return (
    <div>
      {isFavorites ? <h3 className="text-xl font-semibold mb-2">My Favorites</h3> : null}
      <ul
        className={[
          "grid gap-4 grid-cols-size-fruit-color auto-rows-tiles",
          "capitalize",
          isFavorites ? "border-b pb-8 mb-8" : "",
        ].join(" ")}
      >
        {memoized}
      </ul>
    </div>
  );
};
