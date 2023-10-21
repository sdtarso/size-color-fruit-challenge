"use client"

import { useCallback, useState } from "react";
import { items } from "./data";
import { ColorNameInterface } from "@/components/atoms";
import { List } from "@/components/molecules";
import "./index.css";

// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

export default function SizeFruitColor() {
  const [selecteds, setSelected] = useState<ColorNameInterface[]>([]);
  const handleClick = useCallback((item: ColorNameInterface) => {
    setSelected((state) => {
      if (state.some(({ name }) => name === item.name))
        return state.filter(({ name }) => name !== item.name);
      return [...state, item];
    });
  }, []);
  return (
    <>
      {selecteds.length ? (
        <List
          isFavorites
          items={selecteds}
          selecteds={selecteds}
          handleClick={handleClick}
        />
      ) : null}
      <List items={items} handleClick={handleClick} selecteds={selecteds} />
    </>
  );
}
