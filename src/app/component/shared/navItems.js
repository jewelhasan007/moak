

export const navItemsDB = async() =>{
    try {
        const resp = await fetch ('http://localhost:3000/component/sections/api');
        const data = await resp.json();
        return data
    } catch (error) {
        console.error(error)
       
    }
}



