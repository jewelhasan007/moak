import connectDB from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async(request, {params}) =>{
   
    const db = await connectDB();
    const taskCollections = db.collection('add-task')
    try {
    const tasks = await taskCollections.findOne({_id: new ObjectId (params.id)});
    return NextResponse.json({message: "task found", response: tasks})
    } catch (error) {
        return NextResponse.json({message: "something went wrong"})
    }
}
export const PATCH = async(request, {params}) =>{
   
    const db = await connectDB();
    const taskCollections = db.collection('add-task')
    const updateDoc = await request.json();

    try {
    const tasks = await taskCollections.updateOne(
        {_id: new ObjectId (params.id)},
        {
        $set: {
            ...updateDoc
        },
        },
        {
            upsert : true
        });

    return NextResponse.json({message: "task found", response: tasks}, {staus: 200})
    } catch (error) {
        return NextResponse.json({message: "something went wrong"})
    }
}
