import { Schema, model } from "mongoose";
import { Person } from "../interfaces/person.interface";

const Personschema = new Schema<Person>(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const PersonModel = model("person", Personschema);
export default PersonModel;