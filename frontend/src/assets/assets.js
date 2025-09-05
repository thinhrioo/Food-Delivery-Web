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
import saladGreek from './images/saladGreek.jpg';
import saladCaesar from './images/saladCaesar.jpg';
import rollsSpring from './images/rollsSpring.jpg';
import rollsChicken from './images/rollsChicken.jpg';
import rollsAvocado from './images/rollsAvocado.jpg';
import cakeChocolate from './images/cakeChocolate.jpg';
import cakeCheese from './images/cakeCheese.jpg';
import cakeTiramisu from './images/cakeTiramisu.jpg';
import sandwichClub from './images/sandwichClub.jpg';
import sandwichVeggie from './images/sandwichVeggie.jpg';
import sandwichChickenpanini from './images/sandwichChickenpanini.jpg';
import cakeRedvelvet from './images/cakeRedvelvet.jpg';
import cakeCarrot from './images/cakeCarrot.jpg';
import cakeStrawberrycake from './images/cakeStrawberry.jpg';
import PurevegCurryVegetable from './images/PurevegCurryVegetable.jpg';
import purevegStirfriedVegetables from './images/purevegStirfriedVegetables.jpg';
import purevegLasagna from './images/purevegLasagna.jpg';
import pastaSpaghetticarbonara from './images/pastaSpaghetticarbonara.jpg';
import pastaPenneArrabbiata from './images/pastaPenneArrabbiata.jpg';
import pastaFettuccineAlfredo from './images/pastaFettuccineAlfredo.jpg';
import noodlesPadThai from './images/noodlesPadThai.jpg';
import noodlesRamen from './images/noodlesRamen.jpg';
import noodlesStirFriedUdon from './images/noodlesStirFriedUdon.jpg';
import rating_stars from './images/rating_stars.png';
import add_icon_black from './images/add_icon_black.png';
import remove_icon_red from './images/remove_icon_red.png';
import add_icon_green from './images/add_icon_green.png';
// Export ra một object để dùng lại
export const assets = {
    logo,
    header,
    rating_stars,
    add_icon_black,
    remove_icon_red,
    add_icon_green
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

export const food_list = [
    {
        id: "1",
        name: "Greek salad",
        image: saladGreek,
        price: 12,
        description: "Fresh cucumbers, tomatoes, olives, and feta cheese with olive oil dressing",
        category: "Salad"
    },
    {
        id: "2",
        name: "Caesar salad",
        image: saladCaesar,
        price: 10,
        description: "Crisp romaine lettuce with parmesan cheese, croutons and classic Caesar dressing",
        category: "Salad"
    },
    {
        id: "3",
        name: "Caprese salad",
        image: salad,
        price: 11,
        description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
        category: "Salad"
    },
    {
        id: "4",
        name: "Spring rolls",
        image: rollsSpring,
        price: 8,
        description: "Crispy vegetable rolls served with sweet chili sauce",
        category: "Rolls"
    },
    {
        id: "5",
        name: "Chicken rolls",
        image: rollsChicken,
        price: 9,
        description: "Tender chicken wrapped in thin pastry with herbs and spices",
        category: "Rolls"
    },
    {
        id: "6",
        name: "Avocado rolls",
        image: rollsAvocado,
        price: 10,
        description: "Fresh avocado and cucumber wrapped in nori with sushi rice",
        category: "Rolls"
    },
    {
        id: "7",
        name: "Chocolate cake",
        image: cakeChocolate,
        price: 7,
        description: "Rich chocolate cake with creamy chocolate frosting",
        category: "Desserts"
    },
    {
        id: "8",
        name: "Cheesecake",
        image: cakeCheese,
        price: 8,
        description: "Creamy New York-style cheesecake with berry compote",
        category: "Desserts"
    },
    {
        id: "9",
        name: "Tiramisu",
        image: cakeTiramisu,
        price: 9,
        description: "Classic Italian dessert with layers of coffee-soaked ladyfingers",
        category: "Desserts"
    },
    {
        id: "10",
        name: "Club sandwich",
        image: sandwichClub,
        price: 11,
        description: "Triple-decker sandwich with turkey, bacon, lettuce, and tomato",
        category: "Sandwich"
    },
    {
        id: "11",
        name: "Veggie sandwich",
        image: sandwichVeggie,
        price: 9,
        description: "Fresh vegetables with hummus on multigrain bread",
        category: "Sandwich"
    },
    {
        id: "12",
        name: "Chicken panini",
        image: sandwichChickenpanini,
        price: 10,
        description: "Grilled chicken with pesto and mozzarella on ciabatta",
        category: "Sandwich"
    },
    {
        id: "13",
        name: "Red velvet cake",
        image: cakeRedvelvet,
        price: 6,
        description: "Moist red velvet cake with cream cheese frosting",
        category: "Cake"
    },
    {
        id: "14",
        name: "Carrot cake",
        image: cakeCarrot,
        price: 6,
        description: "Spiced carrot cake with walnuts and cream cheese icing",
        category: "Cake"
    },
    {
        id: "15",
        name: "Strawberry shortcake",
        image: cakeStrawberrycake,
        price: 7,
        description: "Light sponge cake with fresh strawberries and whipped cream",
        category: "Cake"
    },
    {
        id: "16",
        name: "Vegetable curry",
        image: PurevegCurryVegetable,
        price: 13,
        description: "Assorted vegetables in aromatic coconut curry sauce",
        category: "Pure Veg"
    },
    {
        id: "17",
        name: "Stir-fried vegetables",
        image: purevegStirfriedVegetables,
        price: 12,
        description: "Fresh seasonal vegetables stir-fried in light soy sauce",
        category: "Pure Veg"
    },
    {
        id: "18",
        name: "Vegetable lasagna",
        image: purevegLasagna,
        price: 14,
        description: "Layers of pasta with spinach, mushrooms and cheese sauce",
        category: "Pure Veg"
    },
    {
        id: "19",
        name: "Spaghetti carbonara",
        image: pastaSpaghetticarbonara,
        price: 15,
        description: "Classic pasta with creamy sauce, pancetta and parmesan",
        category: "Pasta"
    },
    {
        id: "20",
        name: "Penne arrabiata",
        image: pastaPenneArrabbiata,
        price: 13,
        description: "Penne pasta in spicy tomato sauce with garlic and basil",
        category: "Pasta"
    },
    {
        id: "21",
        name: "Fettuccine alfredo",
        image: pastaFettuccineAlfredo,
        price: 14,
        description: "Flat pasta ribbons in rich parmesan cream sauce",
        category: "Pasta"
    },
    {
        id: "22",
        name: "Pad Thai",
        image: noodlesPadThai,
        price: 14,
        description: "Stir-fried rice noodles with tofu, peanuts and lime",
        category: "Noodles"
    },
    {
        id: "23",
        name: "Ramen noodles",
        image: noodlesRamen,
        price: 15,
        description: "Japanese noodle soup with vegetables and soft-boiled egg",
        category: "Noodles"
    },
    {
        id: "24",
        name: "Stir-fried udon",
        image: noodlesStirFriedUdon,
        price: 13,
        description: "Thick wheat noodles stir-fried with vegetables and soy sauce",
        category: "Noodles"
    }
];