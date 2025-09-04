// Import ảnh từ thư mục images
import logo from './images/logo.png';
import header from './images/header_img.jpg';
import salad from './images/salad.jpg';
import rolls from './images/rolls.jpg';
import dessert from './images/dessert.jpg';
import sandwich from './images/sandwich.jpg';
import cake from './images/cake.jpg';
import pureveg from './images/pureveg.jpg';
import pasta from './images/pasta.jpg';
import noodles from './images/noodles.jpg';
// Export ra một object để dùng lại
export const assets = {
    logo,
    header,
};

export const menu_list = [
  { menu_name: "Salad", image: salad },
  { menu_name: "Rolls", image: rolls },
  { menu_name: "Desserts", image: dessert },
  { menu_name: "Sandwich", image: sandwich },
  { menu_name: "Cake", image: cake },
  { menu_name: "Pure Veg", image: pureveg },
  { menu_name: "Pasta", image: pasta },
  { menu_name: "Noodles", image: noodles },
];