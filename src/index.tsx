import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './Pages/Home/Home';
import { Cart } from './Pages/Cart/Cart';
import { Header } from './Components/Header/Header';
import { Outlet } from 'react-router-dom'
import { Footer } from './Components/Footer/Footer';
import { CartContextProvider } from './context/CartContextProvider';

function Layout() {
  return (
    <div className='container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/fav'
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode >
);



