import axios from "axios";

export const getAddTaskDB = async  () =>{
 const resp =  await axios.get(`${NEXT_PUBLIC_BASE_URL}/add-task/api`);
 console.log('fetch data', resp.data)
 return resp.data
}

