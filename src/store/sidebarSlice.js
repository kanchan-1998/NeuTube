import {createSlice} from '@reduxjs/toolkit'

const sideBarSlice=createSlice({
    name:'sideBar',
    initialState:true,
    reducers:{
        toggle:(state)=>{
            console.log(state,"sidebarslice")
            return state=!state
        }
    }
})

export const sideBarAction=sideBarSlice.actions
export default sideBarSlice;
