import axios from "axios";

export const getToDoDB = async  () =>{
 const resp =  await axios.get('http://localhost:3000/todo/api');

 return resp.data
}

