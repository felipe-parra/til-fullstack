import dbConnect from "@/lib/mongo";
import { LearnModel } from "@/models/index";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    const learns = await LearnModel.find({});
    console.log({ learns });

    return NextResponse.json({
      message: "It's working",
      data: learns,
    });
  } catch (error) {
    console.log({ error });
    return NextResponse.error();
  }
}
