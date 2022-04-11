import React, { useState } from "react";
import { search } from "./API";
import List from "./List";
import "./styles/searchList.css";
import { AiOutlineSearch } from "react-icons/ai";
import { groupBy } from "./helpers";

function SearchList({ handleSelect }) {
  const [itemListByGroup, setItemListByGroup] = useState({});

  const handleChange = (e) => {
    const searchedTerm = e.target.value;
    const searchedList = search(searchedTerm);
    const alphabeticallySortedList = searchedList.sort((a, b) => {
      const orderByAlphabets =
        a.item.id.toLowerCase() > b.item.id.toLowerCase();
      return orderByAlphabets ? 1 : -1;
    });
    let groups = groupBy(alphabeticallySortedList);
    setItemListByGroup(groups);
  };
  return (
    <section className="Placeholder">
      <AiOutlineSearch
        style={{
          position: "absolute",
          top: "62px",
          paddingLeft: "5px",
          fontSize: "1.5em",
        }}
      />
      <input
        className="search-input"
        id="SearchItem"
        type="search"
        aria-label="Search Items"
        onChange={handleChange}
      />
      <List filteredData={itemListByGroup} handleSelect={handleSelect} />
    </section>
  );
}

export default SearchList;
