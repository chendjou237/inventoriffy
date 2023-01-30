import { Business } from "../interfaces/business.interfaces.js";
import businessModel from "../models/business.models.js";


export const getBusinesses = async () => {
    try {
        const businesses: Business[] = [];
      (await businessModel.find()).map((business ) => {
          const newbusiness = business as Business;
            businesses.push(newbusiness)
        }
        );
        return businesses;
    } catch (error) {
        throw error;
    }
}

export const getbusiness = async (id) => {
    try {
        const business: Business = await businessModel.findById(id);
        return business;
    } catch (error) {
        throw error;
    }
}

export const postbusiness = async (business: Business) => {
    try {
        const newbusiness = await businessModel.create(business);
        await newbusiness.save();
        return newbusiness;
    } catch (error) {
        throw error;
    }
}

export const updatebusiness = async (id: string, business: Business) => {
    try {
        const query = { _id: id };
        const updateDocument = { $set: business };
        const resp = await businessModel.findOneAndUpdate(query, updateDocument, { upsert: true });
        await resp.save();
        return resp;
    } catch (error) {
        throw error;
    }     
}

export const deletebusiness = async (id) => {
    try {
        const resp = await businessModel.findByIdAndDelete(id);
        return resp;
    } catch (error) {
        throw error;
    }
}
