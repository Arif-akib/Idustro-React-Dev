import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Service from '/src/Pages/Service'
import Portfolio from "../Pages/Portfolio";
import About from '/src/Pages/About'
import Team from "../Pages/Team";
import Contact from "../Pages/Contact";

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
            {
                path: '/About_Us',
                element:<About/>
            },
            {
                path: '/Our_Team',
                element:<Team/>
            },
            {
                path: '/Contact',
                element:<Contact/>
            },
        ]
    }
])