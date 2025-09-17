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
// remove food
const removeFood = async (req, res) => {
    try {
        const food = await foodModer.findById(req.params.id);

        if (!food) {
            return res.status(404).json({
                success: false,
                message: "Food not found",
            });
        }

        // Xóa ảnh nếu tồn tại
        const imagePath = `./uploads/${food.image}`;
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        // Xóa document trong DB
        await foodModer.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Food deleted",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error in deleting food",
        });
    }}
export { addFood , listFoods, removeFood };