import axios from "axios";

export const getAllTask = async  () =>{
 const resp =  await axios.get(`${NEXT_PUBLIC_BASE_URL}/component/sections/api`);
 console.log('fetch data', resp.data)
 return resp.data
}

