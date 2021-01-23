import React from "react";
import Items from "./Items";


function Viewcart(props) {
  const cart = props;
  console.log(cart,'cart const');
  console.log(props, "propss cart");
  cart.map(function(item, i){
    return <li key={i}>{item.name}</li>
  })
  
  // console.log(prop)
  // console.log(Items.name, "items");
  return (
    <div>
      <h1>hello worldsss</h1>
      
    </div>
  );
}

export default Viewcart;
