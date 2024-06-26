const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
    console.log("GET /categories");
    req.categoriesArray = await categories.find({});
    next();
};

const checkIsCategoryExists = async (req, res, next) => {
    const isInArray = req.categoriesArray.find((category) => {
        return req.body.name === category.name;
    });
    if (isInArray) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Категория с таким названием уже существует" }));
    } else {
        next();
    }
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
        res.status(400).send(JSON.stringify({ message: "Ошибка создания категории" }));
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
};

const deleteCategory = async (req, res, next) => {
    try {
        req.category = await categories.findByIdAndDelete(req.params.id);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка удаления категории" }));
    }
};

const checkIfCategoriesAvaliable = async (req, res, next) => {
    if (!req.body.categories || req.body.categories.length === 0) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Выберите хотя бы одну категорию" }));
    } else {
        next();
    }
};

module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    checkEmptyName,
    deleteCategory,
    checkIsCategoryExists,
    checkIfCategoriesAvaliable,
}