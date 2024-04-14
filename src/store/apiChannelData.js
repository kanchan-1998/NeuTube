import {createSlice} from '@reduxjs/toolkit'

const apiChannelDataSlice=createSlice({
    name:'channeldata',
    initialState:null,
    reducers:{
        addChannelData:(state,action)=>{
            return action.payload
        }
    }
})

export const apiChannelDataAction=apiChannelDataSlice.actions
export default apiChannelDataSlice;