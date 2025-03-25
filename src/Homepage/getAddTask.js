import axios from "axios";

export const getAddTaskDB = async  () =>{
try {
    const resp =  await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/add-task/api`);

    return resp.data
} catch (error) {
    return []
}
}

