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

const updateCategory = async (req, res, next) => {
    console.log("PUT /categories/:id");
    try {
        console.log(req.body);
        req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send({ message: "Ошибка обновления категории" });
    }
};

const checkEmptyName = async (req, res, next) => {
    if (!req.body.name) {
        res.status(400).send("Введите название категории")
    } else {
        next();
    }
}

module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    checkEmptyName,
}