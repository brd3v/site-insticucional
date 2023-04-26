import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Main from './components/Main/index.tsx';
import './index.css'
import Sobre from './components/Sobre/index';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Contact from './components/Contact/index.tsx';

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
      {
        path:'sobre',
        element: <Sobre />,
      },
      {
        path:'contato',
        element: <Contact />,
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
