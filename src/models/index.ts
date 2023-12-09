import mongoose from "mongoose";
import { getModelForClass } from "@typegoose/typegoose";
import { Learn } from "./learn";

export const LearnModel = mongoose.models.Learn || getModelForClass(Learn);
