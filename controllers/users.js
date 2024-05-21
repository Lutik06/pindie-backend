const sendAllUsers = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.usersArray));
};

const sendUserById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
};

const sendCreatedUser = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.user));
};

const sendUserUpdated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.user));
};

const sendUserDeleted = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
};

const sendMe = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
};

module.exports = {
    sendAllUsers,
    sendUserById,
    sendCreatedUser,
    sendUserUpdated,
    sendUserDeleted,
    sendMe,
};
