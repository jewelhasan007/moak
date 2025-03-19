import axios from "axios";

export const getSectionsDB = async  () =>{
 const resp =  await axios.get('http://localhost:3000/component/sections');
 console.log('fetch data', resp.data)
 return resp.data
}
