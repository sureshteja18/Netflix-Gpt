import React from "react";
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider,Routes, Route } from "react-router-dom";
import MovieContainer from "./MovieContainer";
import ProtectedRoute from "./ProtectedRoute";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element:(<ProtectedRoute element={<Browser/>}/>)
    },
    {
      path: "/browser/:movieId/movie",
      element: (<ProtectedRoute element={<MovieContainer/>}/>),
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
