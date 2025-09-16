import foodModer from "../models/foodModle.js";
import fs from 'fs'


const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModer({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category
    });
    try {
        await food.save();
        res.json({
            success: true,
            message: "Food Added ",
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error in adding food",
        })
    }
}

const listFoods = async (req, res) => {
    try {
        const foods = await foodModer.find({});
        res.json({
            success: true,
            data: foods,
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error in fetching food list",
        })
    }
}

export { addFood , listFoods };