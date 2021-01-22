import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const products = [
    {
      id:1,
      name: "samsung",
      price: "10000",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQtNsCk5DT9IbERsFRoWv3KLqzO6ZayyNbCKepFYG_sYI54oiZ5X1TRS9qlODS9vAGC14uNB6xw9A&usqp=CAc",
    },
    {
      id:2,
      name: "Honor 9 lite",
      price: "20000",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHYE-K1YHCMH2_6w-s9VZ_RmgnIKijKyBqJu8-bFvhHUVQ8IgsQ9WjdL3Kh0Pd&usqp=CAc",
    },
    {
      id:3,
      name: "iphone",
      price: "30000",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQBopx3JLCsu7icQRScVYPin-Bolt2LztD9YelhM9BSDAMDzHj0pycNlta6I4ZXuDkecPlMO25urGe-o40fPGuJAhkJqBPFqZtyWT4_wX4&usqp=CAc",
    },
    {
      id:4,
      name: "HTC",
      price: "40000",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR35Gbe_Y5Z3ejsthA-kzmkeuCKHKW_gaqeom29v5BOxSmi0LUw3xyotIL5niIZ2bgv_IYNfU25rg&usqp=CAc",
    },
    {
      id:5,
      name: "MI redmi",
      price: "50000",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFJiEPqVrfAgfETMh-ZCnLCJjxZSgQJUgZW66dco8HYiqsgY6N2osNXMY_1X8M6zt1-AZjGdUutMI&usqp=CAc",
    },
    {
      id:6,
      name: "MI redmi",
      price: "50000",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT4DseEDhyULcZlY_vrsybyuu0XUx6zuNKuN80prPuLf2v9l0AuKJeHf7XIsAyeYOaQH05R1xzag_3v&usqp=CAc",
    },
    {
      id:7,
      name: "MI redmi",
      price: "50000",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFJiEPqVrfAgfETMh-ZCnLCJjxZSgQJUgZW66dco8HYiqsgY6N2osNXMY_1X8M6zt1-AZjGdUutMI&usqp=CAc",
    },
    {
      id:8,
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

  const decrementCart = (PrevState) => {
    setCart((PrevState) => PrevState - 1);

    // console.log(PrevState,'prevState');
    // setCart([el,...cart]);
    // const currentItems = [...cart];

    // currentItems[index].name.length -= 1;
    // setCart(currentItems);

    // setCart(cart.length-1);
    // const currentItems = [...cart];
    // console.log(currentItems.length, "items count");

    // currentItems[index].quantity += 1;
    // setCart(currentItems.length - 1);
  };

  const removeFromCart = (id) => {
    console.log(id,'deleteID');
    const newList = cart.filter((item) => item.id !== id);
    setCart(newList);
    console.log(cartItems,'cartitems');

    // setCart(cart.slice(cart.indexOf(e.target.name, 1)))
    // console.log(el, "el");
    // let hardCopy = [...cart];
    // hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    // console.log(hardCopy, "hardCopy");
    // // console.log(cartItem.id,'idd');
    // console.log(el.id, "elid");
    // setCart(hardCopy);
    // var array = this.state.people;
  };
  //   const removeFromCart = e => {
  //     setCart(cart.slice(cart.indexOf(e.target.name, 1)))
  // }

  // const removeFromCart = (e) => {
  //   const newArr = [...cart];
  //   newArr.splice(
  //     newArr.findIndex((item) => item.name === e.target.name),
  //     1
  //   );
  //   updateList(newArr);
  // };

//   const listItems = products.map((product) => (  <Card>
//   <Card.Img variant="top" src={product.image} />
//   <Card.Body>
//     <Card.Title>Card title</Card.Title>
//     <Card.Text>
//       {product.price} {product.name}
//     </Card.Text>
//   </Card.Body>
//   <Card.Footer>
//     <small className="text-muted">Last updated 3 mins ago</small>
//   </Card.Footer>
// </Card>
//   ))


  const listItems = products.map((product) => (
        <div className="grid-container">
          <Card className='grid-item'>
            <img src={product.image} alt={product.name} style={{width:'100px',height:'200px'}} />
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
          </Card>
        </div>
  ));



  const cartItems = cart.map((el) => (
    <div className="row">
      <div className="col-md-3">
        <img src={el.image} alt={el.name} />
        <h3 style={{ color: "blue" }}>{el.name}</h3>
        <h3>{el.price}</h3>
        <input
          type="submit"
          className="bg-dark"
          value="remove"
          onClick={() => removeFromCart(el.id)}
        />
        <input type="submit" className="bg-dark" value="Buy Now" />

        {/* <button
            class="badge bg-warning text-dark"
            onClick={() => addToCart(product)}
          >
            add to cart
          </button> */}
      </div>
    </div>
    // <div className="products">
    //   <div key={el.id}>
    //     {`${el.name}: $${el.price}`}
    //     <input
    //       type="submit"
    //       className="bg-dark"
    //       value="remove"
    //       onClick={() => removeFromCart(el)}
    //     />
    //   </div>
    // </div>
  ));

  return (
    <div className="App">
      <h1 className="bg-success">STORE</h1>
      <button className="bg-success float-right" onclick={() => cartItems()}>
        cart Items {cart.length}
      </button>
      <div>{listItems}</div>
      <div className="bg-primary">CART</div>
      <div>{cartItems}</div>
      {/* <div>Total: ${cartTotal}</div> */}
    </div>
  );
};

export default Shop;
