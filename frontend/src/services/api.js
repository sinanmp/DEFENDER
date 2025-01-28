import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:3000/api",
    headers:{
        "Content-Type": "application/json",
    },
    withCredentials: true
})

async function login(body) {
    try {
        const response = await api.post("/login",body)
        return response.data
    } catch (error) {
        console.log(error)
        return error.response.data        
    }
}




async function addProduct(body) {
   try {
    const response = await api.post("/addProduct",body)
    return response.data
   } catch (error) {
    console.log(error)
    return error.response.data   
   } 
}

async function getProducts() {
    try {
        const response = await api.get("/getProducts")
        return response.data
       } catch (error) {
        console.log(error)
        return error.response.data   
       } 
}


async function deleteProduct(id) {
    try {
        const response = await api.delete(`/deleteProduct?id=${id}`)
        return response.data
       } catch (error) {
        console.log(error)
        return error.response.data   
       } 
}


async function toggleStock(id) {
    try {
        const response = await api.put(`/toggleStock?id=${id}`)
        return response.data
       } catch (error) {
        console.log(error)
        return error.response.data 
       } 
}


export default {
    login, 
    addProduct,
    getProducts,
    deleteProduct,
    toggleStock
}