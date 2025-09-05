import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

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

          {!itemCount ? (
            <img
              className='add-icon'
              onClick={() => setItemCount(prev => prev + 1)}
              src={assets.add_icon_black}
              alt="add"
            />
          ) : (
            <div className='food-item-counter'>
              <img
                className="remove-icon"
                onClick={() => setItemCount(prev => Math.max(prev - 1, 0))}
                src={assets.remove_icon_red}
                alt="remove"
              />
              <p>{itemCount}</p>
              <img
                className="add-icon"
                onClick={() => setItemCount(prev => prev + 1)}
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
