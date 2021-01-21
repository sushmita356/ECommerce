import React from "react";
import Items from "./Items";

function Shop() {
  return (
    <div>
      {Items.map((val, key) => {
        return (
          <li
            className="row"
            key={key}
            onClick={() => {
              window.location.pathname = val.link;
            }}
          >
            {" "}
            <div id="icon">{val.name}</div>
            {""}
            <div id="title">{val.price}</div>
            {""}
          </li>
        );
      })}
    </div>
  );
}

export default Shop;
