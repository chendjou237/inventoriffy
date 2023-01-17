import userModel from "../models/user.models.js";
export const getUsers = async () => {
    try {
        const users = [];
        (await userModel.find()).map((user) => {
            const newUser = user;
            users.push(newUser);
        });
        return users;
    }
    catch (error) {
        throw error;
    }
};
export const getUser = async (id) => {
    try {
        const user = await userModel.findById(id);
        return user;
    }
    catch (error) {
        throw error;
    }
};
export const postUser = async (user) => {
    try {
        const newUser = await userModel.create(user);
        await newUser.save();
        return newUser;
    }
    catch (error) {
        throw error;
    }
};
export const updateUser = async (id, user) => {
    try {
        const query = { _id: id };
        const updateDocument = { $set: user };
        const resp = await userModel.findOneAndUpdate(query, updateDocument, { upsert: true });
        await resp.save();
        return resp;
    }
    catch (error) {
        throw error;
    }
};
export const deleteUser = async (id) => {
    try {
        const resp = await userModel.findByIdAndDelete(id);
        return resp;
    }
    catch (error) {
        throw error;
    }
};
//# sourceMappingURL=user.services.js.map