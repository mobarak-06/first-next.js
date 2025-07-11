"use server";
import dbConnect from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    const result = dbConnect("test_user").insertOne(payload);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
