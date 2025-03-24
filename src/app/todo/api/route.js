import connectDB from "@/lib/connectDB";


export const POST = async (request) => {
const newTask = await request.json();
const db = await connectDB();
const taskCollection = db.collection('to-do-lists')
try {
    const res = await taskCollection.insertOne(newTask)
    return NextResponse.json({message : "New task added"}, {status : 200})
} catch (error) {
    return NextResponse.json({message : "Somethings went wrong"}, {status : 400})   
}
}


export const GET = async () => {
const db = await connectDB();
const allTaskCollection = db.collection('to-do-lists')
try {
    const res = await allTaskCollection.find().toArray();
    return NextResponse.json({res})
} catch (error) {
    return NextResponse.json({message : "No ToDo Lists Found"}, {status : 400})   
}
}