import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/SignIn/SignIn.jsx'
import Home from './home/Home.jsx'
import Dashboard from './dashboard/Dashboard.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      }
    ] 
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
