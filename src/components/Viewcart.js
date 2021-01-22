import React from "react";
import Items from "./Items";

function Viewcart(props) {
  console.log(props, "propss");
  return <div>
    <h1>
      hello world{props.name}
    </h1>
  </div>;
}

export default Viewcart;
