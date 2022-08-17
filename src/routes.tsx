import React from "react";

const Home = React.lazy(()=> import("./pages/Home/Home"));
const Favorites = React.lazy(()=> import("./pages/Favorites/Favorites"));


interface IRoutes{
    path : string;
    element: JSX.Element;
}

const routes:IRoutes[] = [
    {path:"",element: <Home/> },
    {path:"/favorites",element: <Favorites/> }
];

export default routes;