import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostReport from './UserDashboard/PostReport.jsx'
import Maincontainer from './UserDashboard/Maincontainer.jsx'
import Login from './PublicDashboard/Login.jsx'
import Register from './PublicDashboard/Register.jsx'
import LoginModal from './PublicDashboard/LoginModal.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Maincontainer/>
      },
      {
        path:"/report",
        element: <PostReport/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/loginmodal",
        element:<LoginModal/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
