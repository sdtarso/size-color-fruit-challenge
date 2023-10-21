"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { items } from "./data";
import { ColorNameInterface } from "@/components/atoms";
import { List } from "@/components/molecules";
import "./index.css";

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
      <div className="my-4 flex justify-between">
        <span>
          <Link className="mr-4 text-xl" href="/">
            ←
          </Link>
          <span className="text-xl">Size Color Fruit Challenge</span>
        </span>
        <a
          className="ml-auto text-sm font-mono"
          href="https://github.com/sdtarso/tech-challenge/tree/main/src/app/size-fruit-color"
          target="_blank"
        >
          source code
        </a>
      </div>
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
      <ol className="list-decimal list-inside mb-4">
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
      </ol>
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
