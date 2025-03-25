import axios from "axios";

export const getToDoDB = async  () =>{
 try {
    const resp =  await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/todo/api`);

 return resp.data
 } catch (error) {
    return []
 }
}

