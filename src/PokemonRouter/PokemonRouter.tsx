import { Layout } from "../Common/Layout";
import { Home } from "../PokemonList/Home";
import { ErrorPage } from "../Common/ErrorPage";
import { PokemonDetail } from "../PokemonDetail/PokemonDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/detail",
        element: <PokemonDetail />,
      },
    ],
  },
]);

export const PokemonRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
