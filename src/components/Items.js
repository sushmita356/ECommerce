import React, { useState, useEffect } from "react";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const products = [
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
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  // const incrementCart = (id,value) => {
  //   setCart(cart.length+1);

  //   let updatedCart = cart.map(item => item.id === id ? item.quantity += value : item)

  //   setCart(updatedCart)

  // };
  const incrementCart = (el) => {
    setCart([...cart, el]);

    // setCart(PrevState=>PrevState+1);

    // setCart([...cart, el]);

    // const currentItems = [...cart];
    // console.log(currentItems.length, "items count");
    

    // currentItems[index].quantity += 1;
    // setCart(currentItems.length + 1);
  };

  const decrementCart = (index) => {
    // setCart([el,...cart]);
    const currentItems = [...cart];

    currentItems[index].name.length -= 1;
    setCart(currentItems);


    // setCart(cart.length-1);
    // const currentItems = [...cart];
    // console.log(currentItems.length, "items count");

    // currentItems[index].quantity += 1;
    // setCart(currentItems.length - 1);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const listItems = products.map((product) => (
    <div className="App">
      <div className="products row">
        <div className="col-md-3">
          <img src={product.image} alt={product.name} />
          <h3 style={{ color: "blue" }}>{product.name}</h3>
          <h3>{product.price}</h3>
          <button
            className="bg-primary btn-sm"
            onClick={() => incrementCart(product)}
          >
            +
          </button>
          <button
            class="badge bg-warning text-dark"
            onClick={() => addToCart(product)}
          >
            add to cart
          </button>

          <button
            className="bg-primary btn-sm"
            onClick={() => decrementCart(product.id)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div className="products">
      <div key={el.id}>
        {`${el.name}: $${el.price}`}
        <input
          type="submit"
          className="bg-dark"
          value="remove"
          onClick={() => removeFromCart(el)}
        />
      </div>
    </div>
  ));

  return (
    <div className="App">
      STORE
      <button className="bg-success float-right" onclick={() => cartItems()}>
        cart Items {cart.length}
      </button>
      <div>{listItems}</div>
      <div>CART</div>
      <div>{cartItems}</div>
      <div>Total: ${cartTotal}</div>
    </div>
  );
};

export default Shop;
