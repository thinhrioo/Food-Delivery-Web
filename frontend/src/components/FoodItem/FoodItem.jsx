import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({ id, name, price, description, image }) => {
  // State lưu số lượng sản phẩm đã chọn
  // Mặc định = 0 (chưa thêm vào giỏ)

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-img' src={image} alt={name} />
      </div>

      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img className="rating-stars" src={assets.rating_stars} alt="rating" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <div className='food-item-footer'>
          <p className='food-item-price'>${price}</p>
          {/* Nếu itemCount = 0 → chỉ hiện 1 nút thêm (+) màu đen */}
          {!cartItems[id] ? (
            <img
              className='add-icon'
              onClick={() => addToCart(id)} // tăng số lượng từ 0 → 1
              src={assets.add_icon_black}
              alt="add"
            />
          ) : (
            // Nếu itemCount > 0 → hiện bộ đếm (nút - số lượng +)
            <div className='food-item-counter'>
              {/* Nút trừ (giảm số lượng, tối thiểu = 0) */}
              <img
                className="remove-icon"
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt="remove"
              />
              {/* Hiển thị số lượng hiện tại */}
              <p>{cartItems[id]}</p>
              {/* Nút cộng (tăng số lượng) */}
              <img
                className="add-icon"
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt="add"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FoodItem
