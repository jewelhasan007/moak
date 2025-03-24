import connectDB from "@/lib/connectDB";


export const GET = async (request, {params}) =>{
    const db = await connectDB();

    
    const sectionCollections = db.collection('add-task')
    try {
       const sectionList = await  sectionCollections.find({section: params.section}).toArray();
       return Response.json({sectionList})
    } catch (error) {
     console.log(error)  
    return Response.json({message: "No Data Found", error}) 
    }
}