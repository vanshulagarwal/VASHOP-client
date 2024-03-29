import { useState } from 'react'
import './App.scss'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LoginPage from './pages/LoginPage/LoginPage'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const Layout = () => {
  return (
    <div className='app'>
      <ToastContainer autoClose={3000} draggablePercent={50} limit={3}/>
      <ScrollToTop/>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/login",
        element: <span><LoginPage /></span>
      },
    ]
  },
])

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
