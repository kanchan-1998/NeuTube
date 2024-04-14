import {createSlice} from '@reduxjs/toolkit'

const apiDataSlice=createSlice({
    name:'data',
    initialState:[],
    reducers:{
        addData:(state,action)=>{
            return action.payload
        }
    }
})

export const apiDataAction=apiDataSlice.actions
export default apiDataSlice;