const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
    console.log("GET /categories");
    req.categoriesArray = await categories.find({});
    next();
};

const findCategoryById = async (req, res, next) => {
    console.log("GET /categories/:id");
    try {
        req.category = await categories.findById(req.params.id);
        next();
    } catch (error) {
        res.status(404).send({ message: "Category not found" });
    }
};

const createCategory = async (req, res, next) => {
    console.log("POST /categories");
    try {
        console.log(req.body);
        req.category = await categories.create(req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Error creating category" }));
    }
};

module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
}