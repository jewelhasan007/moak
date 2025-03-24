import connectDB from "@/lib/connectDB";


export const GET = async (request, {params}) =>{
    const db = await connectDB();

    const sectionFound = await params
    const sectionCollections = db.collection('add-task')
    try {
       const sectionList = await  sectionCollections.find({section: sectionFound.section}).toArray();
       return NextResponse.json({sectionList})
    } catch (error) {
     console.log(error)  
    return NextResponse.json({message: "No Data Found", error}) 
    }
}