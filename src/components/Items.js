import React, { useState } from "react";
import "../App.css";

function Items() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      name: "samsung",
      price: "10000",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQtNsCk5DT9IbERsFRoWv3KLqzO6ZayyNbCKepFYG_sYI54oiZ5X1TRS9qlODS9vAGC14uNB6xw9A&usqp=CAc",
    },
    {
      name: "Honor 9 lite",
      price: "20000",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHYE-K1YHCMH2_6w-s9VZ_RmgnIKijKyBqJu8-bFvhHUVQ8IgsQ9WjdL3Kh0Pd&usqp=CAc",
    },
    {
      name: "iphone",
      price: "30000",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQBopx3JLCsu7icQRScVYPin-Bolt2LztD9YelhM9BSDAMDzHj0pycNlta6I4ZXuDkecPlMO25urGe-o40fPGuJAhkJqBPFqZtyWT4_wX4&usqp=CAc",
    },
    {
      name: "HTC",
      price: "40000",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR35Gbe_Y5Z3ejsthA-kzmkeuCKHKW_gaqeom29v5BOxSmi0LUw3xyotIL5niIZ2bgv_IYNfU25rg&usqp=CAc",
    },
    {
      name: "MI redmi",
      price: "50000",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFJiEPqVrfAgfETMh-ZCnLCJjxZSgQJUgZW66dco8HYiqsgY6N2osNXMY_1X8M6zt1-AZjGdUutMI&usqp=CAc",
    },
    {
      name: "MI redmi",
      price: "50000",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT4DseEDhyULcZlY_vrsybyuu0XUx6zuNKuN80prPuLf2v9l0AuKJeHf7XIsAyeYOaQH05R1xzag_3v&usqp=CAc",
    },
    {
      name: "MI redmi",
      price: "50000",
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

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const viewItems = (cart) => {
    console.log(cart);
    // return (
    //   <li>
    //     {cart.map((cart) => (
    //       <li>{cart.name}</li>
    //     ))}
    //   </li>
    // );
  
    // const cartItems = cart.map((d) => <li key={d.name}>{d.name}</li>);
//     <p>
//     {cart.map(el => {
//         return <div key={el.name}>
//            <span>{el.price}</span>
//            <span>{el.image}</span>
//         </div>
//     })}
// </p>

    // console.log(cartItems, "cartitems");
    // <table>
    //   {cart.map((item) => (
    //     <tr>
    //       <td key={item.name}>{item.name}</td>
    //       <td key={item.price}>{item.price}</td>
    //       <td key={item.image}>{item.image}</td>

    //     </tr>
    //   ))}
    // </table>;

    // console.log(cartItems,'cartItems');
  };
  return (
    <div className="App">
      <h1>Products</h1>
      <header>
        <button className="bg-primary">cart Items ({cart.length})</button>
        <button className="bg-success" onClick={() => viewItems(cart)}>
          View Items
        </button>
      </header>

      <div className="products">
        {products.map((product) => (
          <div>
            <img src={product.image} alt={product.name} />
            <h3 style={{color:'blue'}}>
              {product.name} 
            </h3>
            <h3>
            {product.price}
            </h3>
            <button onClick={() => addToCart(product)}>add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
