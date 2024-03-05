"use client";

import { useCallback, useState } from "react";
import { items } from "./data";
import { ColorNameInterface } from "@/components/atoms";
import { List, OrderedList } from "@/components/molecules";
import { PageHeader } from "@/components/organisms";

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
    <div className="px-4">
      <PageHeader
        title="Size Color Fruit Challenge"
        path="size-fruit-color/page.tsx"
      />
      <p className="mb-4">
        This project was based on{" "}
        <a
          className="underline"
          href="https://jsfiddle.net/mladylukas/9qmusLok/"
          target="_blank"
        >
          this fiddle
        </a>
        .
      </p>
      <p>
        Implement a feature to allow item selection with the following
        requirements:
      </p>
      <OrderedList>
        <li>Clicking an item selects/unselects it.</li>
        <li>Multiple items can be selected at a time.</li>
        <li>
          Make sure to avoid unnecessary re-renders of each list item in the big
          list (performance).
        </li>
        <li>Currently selected items should be visually highlighted.</li>
        <li>
          Currently selected items names should be shown at the top of the page.
        </li>
      </OrderedList>
      {selecteds.length ? (
        <List
          isFavorites
          items={selecteds}
          selecteds={selecteds}
          handleClick={handleClick}
        />
      ) : null}
      <List items={items} handleClick={handleClick} selecteds={selecteds} />
    </div>
  );
}
