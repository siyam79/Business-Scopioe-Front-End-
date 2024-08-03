import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import About from "../Pages/About/About";
import Setting from "../Pages/Setting/Setting";
import NewListing from "../Pages/NewsListing/NewListing";
import Search from "../Pages/Search/Search";


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
                path : "/newListing",
                element : <NewListing />
            },
            {
                path : "/search",
                element : <Search />
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