import {createSlice} from '@reduxjs/toolkit'

const categorySlice=createSlice({
    name:'category',
    initialState:{category:0},
    reducers:{
        home:(state)=>{
            state.category=0
        },
        gaming:(state)=>{
            state.category=20
        },
        automobiles:(state)=>{
            state.category=2
        },
        sports:(state)=>{
            state.category=17
        },
        entertainment:(state)=>{
            state.category=24
        },
        technology:(state)=>{
            state.category=28
        },
        music:(state)=>{
            state.category=10
        },
        blogs:(state)=>{
            state.category=22
        },
        news:(state)=>{
            state.category=25
        }       
    }
})

export const categoryAction=categorySlice.actions;
export default categorySlice;