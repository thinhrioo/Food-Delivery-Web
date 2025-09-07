import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const handleCategoryClick = (menuName) => {
    if (activeCategory === menuName) {
      // Nếu đang chọn lại -> reset về All
      setActiveCategory("All");
      setCategory("All");
    } else {
      // Nếu chọn mới
      setActiveCategory(menuName);
      setCategory(menuName);
    }
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. 
        Our mission is to satisfy your cravings and elevate your dining experience, 
        one delicious meal at a time.
      </p>

      {/* Danh sách kéo ngang */}
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => (
          <div 
            key={index} 
            className={`explore-menu-list-item ${activeCategory === item.menu_name ? "active" : ""}`}
            onClick={() => handleCategoryClick(item.menu_name)}
          >
            <img src={item.image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreMenu
