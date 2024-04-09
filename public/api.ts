import { ITASK } from "@/types/tasks"

const baseUrl = "http://localhost:3001"


export const getALlTodoList = async ():  Promise<ITASK[]> =>{
    const res = await fetch(`${baseUrl}/task`);
    const todos = await res.json()
    return todos;

}