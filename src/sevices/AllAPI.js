import { commonApi } from "./commonAPI"

const serverUrl='http://localhost:5000'
export const uploadtodo=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/todolist`,reqBody)
}
export const getAlltodo=async(reqBody)=>{
    return await commonApi('GET',`${serverUrl}/todolist`,"")

}
export const deleteTodo=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/todolist/${id}`,{})
}
export const gettododetailsbyid=async(id)=>{
    return await commonApi('GET',`${serverUrl}/todolist/${id}`,"")
}
export const updatetodobyid=async(id,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/todolist/${id}`,reqBody)
}