
import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import { parseISO, startOfDay, endOfDay } from 'date-fns';


export const GET = async (req, res) =>{
    const db = await connectDB();
    const taskCollection = db.collection('add-task')
    try {
            const stringTodayDate = new Date().toISOString().split('T')[0];
        console.log(stringTodayDate)  
        const results = await taskCollection
      .find({
        "date": {
          $eq: stringTodayDate
       
        }
      })
      .toArray();
        
        return NextResponse.json({results})
    } catch (error) {
        console.log(error)
    }
}


