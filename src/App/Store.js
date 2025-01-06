import { configureStore } from "@reduxjs/toolkit";  //store ie imported from reduxjs Toolkit
import  todoReducer from '../Features/Todo/TodoSlice.js'

export const store=configureStore //store is created with configure store
({
    reducer:todoReducer  //reducers are passed to store for adrressing 
})