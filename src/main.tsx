import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Main from './components/Main/index.tsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //errorElement: <Errror />,
    children: [
      {
        path:'/',
        element: <Main/>,
      },
     
     // {
     //   path:'pageTwo',
     //   element: <PageTwo />,
     // },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
