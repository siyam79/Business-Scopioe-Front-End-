import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";


const Route = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout />,
        errorElement : <ErrorPage />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path :'/register',
                element : <Register />
            },
            {
                path : "/login",
                element : <Login />
            }
        ]
    }
])

export default Route;