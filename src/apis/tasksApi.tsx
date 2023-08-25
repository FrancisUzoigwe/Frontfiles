import axios from "axios"


const url: string = "https://hack-project-management.onrender.com/api"

export const createTask = async (id: string, data: any) => {
    try {
        return await axios.post(`${url}/${id}/create-task`, data).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteTask = async (id: string,) => {
    try {
        return await axios.delete(`${url}/${id}/delete-task`,).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}




export const readTask = async () => {
    try {
        return await axios.get(`${url}/read-task`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}