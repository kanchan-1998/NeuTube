import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'
import {Provider} from 'react-redux'
import Store from './store/index.js'

const router=createBrowserRouter([
  {path:"/",element:<App />, children:[
    {path:"/",element:<Home/>},
    {path:"/video/:categoryId/:videoId",element:<Video/>}
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={Store}>
      <RouterProvider router={router}/>
    </Provider>

)
