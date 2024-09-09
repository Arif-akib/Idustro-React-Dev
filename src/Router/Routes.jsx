import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Service from '/src/Pages/Service'
import Portfolio from "../Pages/Portfolio";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/Service',
                element:<Service/>
            },
            {
                path: '/Portfolio',
                element:<Portfolio/>
            },
        ]
    }
])