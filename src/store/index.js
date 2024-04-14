import {configureStore} from '@reduxjs/toolkit'
import sideBarSlice from './sidebarSlice'
import categorySlice from './categorySlice';
import apiDataSlice from './apiDataSlice';
import apiVideoDataSlice from './apiVideoDataSlice';
import apiChannelDataSlice from './apiChannelData';
import apiCommentDataSlice from './apiCommnetData';

const Store= configureStore({
    reducer:{
        sideBar:sideBarSlice.reducer,
        category:categorySlice.reducer,
        data:apiDataSlice.reducer,
        videodata:apiVideoDataSlice.reducer,
        channeldata:apiChannelDataSlice.reducer,
        commentdata:apiCommentDataSlice.reducer,
    }
})

export default Store;
