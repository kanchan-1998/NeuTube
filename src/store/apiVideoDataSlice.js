import {createSlice} from '@reduxjs/toolkit'

const apiVideoDataSlice=createSlice({
    name:'videodata',
    initialState:null,
    reducers:{
        addVideoData:(state,action)=>{
            return action.payload
        }
    }
})

export const apiVideoDataAction=apiVideoDataSlice.actions
export default apiVideoDataSlice;