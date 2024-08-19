import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import HomePage from './pages/Home'
import AdminPage from './pages/Admin'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([{
  path: '/',
  element: <AdminPage/>,
  errorElement: <NotFound/>,
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)