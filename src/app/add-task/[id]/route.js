import connectDB from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, {params}) => {
    const db = await connectDB();
    const allTaskCollection = db.collection('add-task')
    try {
        const res = await allTaskCollection.deleteOne({_id:new ObjectId (params.id)});
        return NextResponse.json({message: "Task Deleted", response: res}, {status: 200})
    } catch (error) {
        return NextResponse.json({message : "No ToDo Lists Found"}, {status : 400})   
    }
    }
    
    