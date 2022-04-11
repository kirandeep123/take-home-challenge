import React, { useEffect } from "react";
import { debounce, formatDate } from "./helpers";
import "./styles/base.css";
import "./styles/List.css";

function List({ filteredData, handleSelect }) {
  useEffect(() => {
    document.addEventListener(
      "selectionchange",
      debounce(function (event) {
        let selection = document.getSelection
          ? document.getSelection().toString()
          : document.selection.createRange().toString();
        handleSelect(selection);
        console.log(selection);
      }, 250)
    );

    return () =>
      document.removeEventListener(
        "selectionchange",
        debounce(function (event) {
          let selection = document.getSelection
            ? document.getSelection().toString()
            : document.selection.createRange().toString();
          handleSelect(selection);
          console.log(selection);
        }, 100)
      );
  });
  const filtered = filteredData
    ? Object.entries(filteredData).map(([key, value]) => (
        <section key={key}>
          <h1>{key.toUpperCase()}</h1>
          <h4>
            {value.map((sectionData) => (
              <section className="group-section" key={sectionData.item.id}>
                <div>
                  <span>Id: - {sectionData.item.id}</span>
                  <span className="ml-4">By: {sectionData.item.author}</span>
                </div>
                <div>{formatDate(sectionData.item.modified)}</div>
              </section>
            ))}
          </h4>
        </section>
      ))
    : "";

  return <div>{filtered}</div>;
}
export default List;
