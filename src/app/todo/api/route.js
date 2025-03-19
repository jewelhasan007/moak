import connectDB from "@/lib/connectDB";


export const POST = async (request) => {
const newTask = await request.json();
const db = await connectDB();
const taskCollection = db.collection('to-do-lists')
try {
    const res = await taskCollection.insertOne(newTask)
    return Response.json({message : "New task added"}, {status : 200})
} catch (error) {
    return Response.json({message : "Somethings went wrong"}, {status : 400})   
}
}


export const GET = async () => {
const db = await connectDB();
const allTaskCollection = db.collection('to-do-lists')
try {
    const res = await allTaskCollection.find().toArray();
    return Response.json({res})
} catch (error) {
    return Response.json({message : "No ToDo Lists Found"}, {status : 400})   
}
}