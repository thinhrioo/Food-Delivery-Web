import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart } =
    useContext(StoreContext);

  // Lọc ra các món có trong cart
  // const cartData = food_list.filter((item) => cartItems[item._id] > 0);

  // const getTotalPrice = () => {
  //   return cartData.reduce(
  //     (total, item) => total + item.price * cartItems[item._id],
  //     0
  //   );
  // };

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {/* {cartData.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : ( */}
        <table className="cart-table">
          <thead>
            <tr>
              <th>Items</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {food_list.map((item) => (
              <tr key={item._id}>
                <td>
                  <img src={item.image} alt={item.name} className="cart-img" />
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td className="quantity">
                  <button onClick={() => removeFromCart(item._id)}>-</button>
                  <span>{cartItems[item._id]}</span>
                  <button onClick={() => addToCart(item._id)}>+</button>
                </td>
                <td>${item.price * cartItems[item._id]}</td>
                <td>
                  <FaTrash
                    className="remove-icon"
                    onClick={() =>
                      removeFromCart(item._id) // giảm quantity, nếu muốn xoá luôn => setCartItems
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      {/* )} */}

      {/* Tổng cộng */}
      {/* {cartData.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${getTotalPrice()}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )} */}
    </div>
  );
};

export default Cart;
