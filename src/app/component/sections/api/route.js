import connectDB from "@/lib/connectDB";

export const GET = async () =>{
    const db = await connectDB();
    
    const servicesCollection = db.collection('sections')
    try {
       const services = await servicesCollection.find().toArray();
       return NextResponse.json({services})
    } catch (error) {
     console.log(error)  
    return NextResponse.json({message: "No Data Found", error}) 
    }
}

// export const POST = async (request) => {
// const newBooking = await request.json();
// const db = await connectDB();
// const bookingsCollection = db.collection('sections')
// try {
//     const res = await bookingsCollection.insertOne(newBooking)
//     return NextResponse.json({message : "New Section Added Successfully"}, {status : 200})
// } catch (error) {
//     return NextResponse.json({message : "Somethings went wrong"}, {status : 400})   
// }
// }

