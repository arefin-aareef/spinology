import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Bicycles from "../Pages/Bicycles/Bicycles/Bicycles";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <Signup></Signup>
        },
        {
          path: 'bicycles',
          element: <Bicycles></Bicycles>
        }
    ]
  },
]);
