import React from "react";
import Items from "./Items";

function Viewcart(props) {
  console.log(props, "propss");
  console.log(Items.name, "items");
  return (
    <div>
      
      <h1>hello world{props.name}</h1>
      <h1>{props.price}</h1>
      <h1>{props.image}</h1>

    </div>
  );
}

export default Viewcart;
