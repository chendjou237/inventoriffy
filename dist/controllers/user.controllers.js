import userModel from "../models/user.models.js";
export const getUsers = async (req, res) => {
    try {
        const users = await (await userModel.find());
        res.status(200).send(users);
    }
    catch (error) {
        throw error;
    }
    res.status(200).send("get users");
};
export const postUsers = async (req, res) => {
    if (!req.body.name || !req.body.email) {
        res.status(400).send("name and email are required");
        return;
    }
    try {
        const newUser = (await userModel.create(req.body));
        await newUser.save();
        res
            .status(200)
            .send("posted user name is " + +" and email is " + req.body.email);
    }
    catch (error) {
        throw new Error(`${error}`);
    }
};
export const updateUser = (req, res) => {
    res.status(200).send("updated user");
};
export const deleteUser = (req, res) => {
    res.status(200).send("deleted user");
};
//# sourceMappingURL=user.controllers.js.map