import React, { useState } from "react";
import "../App.css";

function Items() {
  const [products] = useState([
    {
      name: "samsung",
      price: "10000",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFJiEPqVrfAgfETMh-ZCnLCJjxZSgQJUgZW66dco8HYiqsgY6N2osNXMY_1X8M6zt1-AZjGdUutMI&usqp=CAc",
    },
    {
      name: "Honor 9 lite",
      price: "20000",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFJiEPqVrfAgfETMh-ZCnLCJjxZSgQJUgZW66dco8HYiqsgY6N2osNXMY_1X8M6zt1-AZjGdUutMI&usqp=CAc",
    },
    {
      name: "iphone",
      price: "30000",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFJiEPqVrfAgfETMh-ZCnLCJjxZSgQJUgZW66dco8HYiqsgY6N2osNXMY_1X8M6zt1-AZjGdUutMI&usqp=CAc",
    },
    {
      name: "HTC",
      price: "40000",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFJiEPqVrfAgfETMh-ZCnLCJjxZSgQJUgZW66dco8HYiqsgY6N2osNXMY_1X8M6zt1-AZjGdUutMI&usqp=CAc",
    },
    {
      name: "MI redmi",
      price: "50000",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFJiEPqVrfAgfETMh-ZCnLCJjxZSgQJUgZW66dco8HYiqsgY6N2osNXMY_1X8M6zt1-AZjGdUutMI&usqp=CAc",
    },
  ]);

  return (
    <div className="App">
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name} {product.price}</h3>
            <button>add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
