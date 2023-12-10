"use server";

import { TILType } from "@/components/LearnForm";
import dbConnect from "@/lib/mongo";
import { LearnModel } from "@/models";
import { Learn } from "@/models/learn";
import { revalidatePath } from "next/cache";

export const createLearn = async (data: TILType) => {
  try {
    await dbConnect();

    const result = await LearnModel.create(data);

    console.log({ result });
    revalidatePath("/");
  } catch (error) {
    return {
      message: "Somthing wen't wrong",
    };
  }
};

export const fetchLearns = async () => {
  await dbConnect();
  const results: Learn[] = await LearnModel.find({});

  return results;
};
