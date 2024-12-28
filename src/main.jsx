import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthContext/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Home from './Component/Home';
import Root from './Root';
import NotFound from './Component/NotFound';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
      ,
      {
        path: "*",
        element: <NotFound></NotFound>, 
      }

     
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <Toaster />
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
