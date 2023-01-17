import { Types } from "mongoose";

export interface Employee{
    id?: string;
    user: Types.ObjectId;
    role: Role;
}

enum Role {
    admin = "admin",
    employee= "employee",
}