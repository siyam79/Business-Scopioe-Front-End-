import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import About from "../Pages/About/About";
import Setting from "../Pages/Setting/Setting";


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
                path : "/about",
                element : <About />
            },
            {
                path : "/settings",
                element : <Setting />
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