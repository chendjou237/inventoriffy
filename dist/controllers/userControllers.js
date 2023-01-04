export const getUsers = (req, res) => {
    res.status(200).send("get users");
};
export const postUsers = (req, res) => {
    res
        .status(200)
        .send("posted user name is " + req.body.name + " and email is " + req.body.email);
};
export const updateUser = (req, res) => {
    res.status(200).send("updated user");
};
export const deleteUser = (req, res) => {
    res.status(200).send("deleted user");
};
//# sourceMappingURL=userControllers.js.map