"use server";

import dbConnect from "@/lib/mongo";
import { LearnModel } from "@/models";
import { Learn } from "@/models/learn";
import { revalidatePath } from "next/cache";

export const createLearn = async (data: FormData) => {
  await dbConnect();
  const newLearn: Learn = {
    title: data.get("title") as string,
    description: data.get("description") as string,
    tags: [],
    createdAt: new Date(),
  };
  const result = await LearnModel.create(newLearn);

  console.log({ result });
  revalidatePath("/");
  return result;
};

export const fetchLearns = async () => {
  await dbConnect();
  const results: Learn[] = await LearnModel.find({});

  return results;
};
