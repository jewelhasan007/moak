import axios from "axios";

export const getToDoDB = async  () =>{
 const resp =  await axios.get(`${NEXT_PUBLIC_BASE_URL}/todo/api`);

 return resp.data
}

