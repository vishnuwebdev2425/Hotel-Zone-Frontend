import { createSlice } from "@reduxjs/toolkit";

const cartstore=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },

        deleteItem:(state,action)=>{
           
           state.items= state.items.filter((each)=>{
            return each.id!=action.payload
            })
        },

        clearItem:(state)=>{
            state.items.length=0;

        }

    }
})


export const {addItem,deleteItem,clearItem}=cartstore.actions;
export default cartstore.reducer;