import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate(); 
  const {
    cartItems = {},
    setCartItems,
    food_list = [],
    getTotalCartAmount,
  } = useContext(StoreContext);

  // Danh sách món đang có trong giỏ (giữ thứ tự từ food_list)
  const cartFood = food_list.filter((item) => cartItems[item.id] > 0);

  // Subtotal: ưu tiên dùng getTotalCartAmount nếu context có, nếu không tự tính
  const subtotal =
    typeof getTotalCartAmount === "function"
      ? getTotalCartAmount()
      : cartFood.reduce(
          (sum, item) => sum + item.price * (cartItems[item.id] || 0),
          0
        );

  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  // Đặt lại số lượng (luôn >= 1)
  const handleQuantityChange = (id, rawValue) => {
    let qty = parseInt(rawValue, 10);
    if (isNaN(qty) || qty < 1) qty = 1;
    setCartItems((prev) => ({ ...prev, [id]: qty }));
  };

  // Xoá hẳn 1 item khỏi giỏ
  const handleRemoveItem = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const formatPrice = (num) => {
    const fixed = Number(num || 0).toFixed(2);
    return fixed.endsWith(".00") ? fixed.slice(0, -3) : fixed;
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      {cartFood.length === 0 ? (
        <p className="empty">️🛒️🛒️🛒Cart is empty</p>
      ) : (
        <>
          <div className="cart-content">
            {/* Left: bảng */}
            <div className="cart-left">
              <div className="table-wrap">
                <table className="cart-table" aria-label="Cart table">
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
                    {cartFood.map((item) => {
                      const qty = cartItems[item.id] || 0;
                      return (
                        <tr key={item.id}>
                          <td className="td-img">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="cart-thumb"
                            />
                          </td>
                          <td className="td-title">{item.name}</td>
                          <td className="td-price">${formatPrice(item.price)}</td>
                          <td className="td-qty">
                            <input
                              type="number"
                              min="1"
                              value={qty}
                              onChange={(e) =>
                                handleQuantityChange(item.id, e.target.value)
                              }
                              aria-label={`Quantity for ${item.name}`}
                            />
                          </td>
                          <td className="td-total">
                            ${formatPrice(item.price * qty)}
                          </td>
                          <td className="td-remove">
                            <button
                              className="remove-btn"
                              onClick={() => handleRemoveItem(item.id)}
                              aria-label={`Remove ${item.name}`}
                            >
                              ×
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Cart Totals + Promo */}
            <aside className="cart-totals">
              <h3>Cart Totals</h3>

              <div className="totals-row">
                <span>Subtotal</span>
                <span>${formatPrice(subtotal)}</span>
              </div>

              <div className="totals-row">
                <span>Delivery Fee</span>
                <span>${formatPrice(deliveryFee)}</span>
              </div>

              <div className="totals-row total">
                <strong>Total</strong>
                <strong>${formatPrice(total)}</strong>
              </div>

              <button onClick={()=> navigate("/order") } className="checkout-btn">PROCEED TO CHECKOUT</button>

              <div className="promo-box">
                <label>If you have a promo code, Enter it here</label>
                <div className="promo-input">
                  <input type="text" placeholder="promo code" />
                  <button className="promo-submit">Submit</button>
                </div>
              </div>
            </aside>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
