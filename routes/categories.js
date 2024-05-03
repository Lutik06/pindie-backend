const categoriesRouter = require('express').Router();

const { findAllCategories, findCategoryById, createCategory } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryById, sendCreatedCategory } = require('../controllers/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);

categoriesRouter.post('/categories', createCategory, sendCreatedCategory)

module.exports = categoriesRouter;