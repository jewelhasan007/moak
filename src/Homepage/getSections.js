import axios from "axios";

export const getSectionsDB = async () =>{
 const resp = await axios.get('http://localhost:3000/component/sections');
 return resp.data

}
