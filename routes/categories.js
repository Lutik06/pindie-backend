const categoriesRouter = require('express').Router();

const { findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    checkEmptyName,
    deleteCategory,
    checkIsCategoryExists,
} = require('../middlewares/categories');
const { sendAllCategories,
    sendCategoryById,
    sendCreatedCategory,
    sendUpdatedCategory,
    sendCategoryDeleted,
} = require('../controllers/categories');

const { checkAuth } = require("../middlewares/auth.js");

categoriesRouter.get('/categories',
    findAllCategories,
    sendAllCategories
);
categoriesRouter.get('/categories/:id',
    findCategoryById,
    sendCategoryById
);
categoriesRouter.post('/categories',
    checkEmptyName,
    findAllCategories,
    checkIsCategoryExists,
    createCategory,
    checkAuth,
    sendCreatedCategory
);

categoriesRouter.put('/categories/:id',
    checkEmptyName,
    updateCategory,
    checkAuth,
    sendUpdatedCategory
);

categoriesRouter.delete("/categories/:id",
    deleteCategory,
    checkAuth,
    sendCategoryDeleted
);

module.exports = categoriesRouter;