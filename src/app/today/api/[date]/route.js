
import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import { parseISO, startOfDay, endOfDay } from 'date-fns';


export const GET = async (req, res) =>{
    const {date} = req.query;

    if(!date){
        return NextResponse.json({error: 'Date is required'}) 
    }
    
    const db = await connectDB();
    const taskCollection = db.collection('add-task')
    try {
        // const todayDate = new Date().toLocaleDateString("en-DE").toLocaleLowerCase();
        // const todayTask = await taskCollection.find({date: todayDate }).toArray();
       
        // const todayTask = await taskCollection.find({}, {projectoin : {date: 1} }).toArray();
        // console.log(todayTask)
       
        const start = new Date(date);
        const end = new Date (date);
       end.setDate(end.getDate()+1);

        console.log(selectedDate, start, end)

        const results = await taskCollection
      .find({
        dateField: {
          $gte: start,
          $lte: end
        }
      })
      .toArray();
        
        return NextResponse.json({results})
    } catch (error) {
        console.log(error)
    }
}


