import PropTypes from "prop-types";
import { useCallback, useMemo, useState } from "react";
import { items } from "./data";
import "./index.css";

// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

const ListItem = ({ color, name, isActive, handleClick }) => (
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

const List = ({ isFavorites, items, selecteds, handleClick }) => {
  const memoized = useMemo(() => {
    const isActive = (item) => {
      return isFavorites || selecteds.some(({ name }) => name === item.name);
    };
    return items.map((item) => (
      <ListItem
        key={item.name}
        {...item}
        handleClick={() => handleClick(item)}
        isActive={isActive(item)}
      />
    ));
  }, [isFavorites, items, handleClick, selecteds]);
  return (
    <>
      {isFavorites ? <h3>My Favorites</h3> : null}
      <ul className={`List ${isFavorites ? "List--favorites" : ""}`}>
        {memoized}
      </ul>
    </>
  );
};

ListItem.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  isActive: PropTypes.bool,
  handleClick: PropTypes.func,
};

List.propTypes = {
  isFavorites: PropTypes.bool,
  items: PropTypes.array,
  selecteds: PropTypes.array,
  handleClick: PropTypes.func,
};

export default function SizeFruitColor() {
  const [selecteds, setSelected] = useState([]);
  const handleClick = useCallback((item) => {
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
