import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Router/Route.jsx'
import Authprovider from './Provider/Authprovider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider >
      <RouterProvider router={Route} />
      <Toaster/>
    </Authprovider>
  </React.StrictMode>,
)
