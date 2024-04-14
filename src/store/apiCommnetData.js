import {createSlice} from '@reduxjs/toolkit'

const apiCommentDataSlice=createSlice({
    name:'commentdata',
    initialState:[],
    reducers:{
        addCommentData:(state,action)=>{
            return action.payload
        }
    }
})

export const apiCommentDataAction=apiCommentDataSlice.actions
export default apiCommentDataSlice;