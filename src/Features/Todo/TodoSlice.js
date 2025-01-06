import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState=
{
    todos:[{id:1,text:'hello world'}]   //Todos object which define initial state
} 

export const Todoslice=createSlice({  //Craeteslice Method
   name:'todo',  // name of the slice
   initialState,
   reducers:   //like functions ,methods to do something
    {
        addTodo:(state,action)=>   //state define updated state and action defines action.payload
        {
         const todo={
           id:nanoid(), //id is generated automaticallly with nanoid
           text:action.payload  //text is given by action.payload
           }
           state.todos.push(todo)  //push the created todo in todos object
        },

        removeTodo:(state,action)=>
        {
            state.todos=state.todos.filter((todo)=>
                todo.id!==action.payload)
        }
    },

})

export const {addTodo,removeTodo}=Todoslice.actions  //separate export reducers 
// for better importing these reducers are used in another folders
export default Todoslice.reducer