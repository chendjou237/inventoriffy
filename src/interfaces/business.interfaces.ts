import { ObjectId } from "mongodb";

export interface Business{
    name:string;
    email: string;
    contact: string;
    logo: string;
    address: string;
    adminId: ObjectId;
    users: ObjectId[];
}