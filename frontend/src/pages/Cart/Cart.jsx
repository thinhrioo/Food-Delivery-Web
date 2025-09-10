import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, food_list, setCartItems, removeFromCart } = useContext(StoreContext);

  // Lọc sản phẩm trong giỏ
  const cartFood = food_list.filter((item) => cartItems[item.id] > 0);

  // Tính tổng giỏ hàng
  const totalPrice = cartFood.reduce(
    (sum, item) => sum + item.price * cartItems[item.id],
    0
  );

  // Cập nhật số lượng trực tiếp
  const handleQuantityChange = (itemId, value) => {
    const qty = Math.max(1, parseInt(value) || 1); // tối thiểu = 1
    setCartItems((prev) => ({ ...prev, [itemId]: qty }));
  };

  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>

      {cartFood.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
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
            {cartFood.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.name} className="cart-img" />
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={cartItems[item.id]}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                </td>
                <td>${(item.price * cartItems[item.id]).toFixed(2)}</td>
                <td>
                  <button
                    className="remove-btn"
                    onClick={() => {
                      const updated = { ...cartItems };
                      delete updated[item.id]; // xoá khỏi giỏ
                      setCartItems(updated);
                    }}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cartFood.length > 0 && (
        <div className="cart-summary">
          <h3>Grand Total: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
