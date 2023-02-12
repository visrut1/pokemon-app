import { Layout } from "../Common/Layout";
import { Home } from "../PokemonList/Home";
import { ErrorPage } from "../Common/ErrorPage";
import { PokemonDetail } from "../PokemonDetail/PokemonDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchComponent from "../Context/SearchComponent";
import AddPokemonForm from "../Forms/AddPokemonForm";

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
        path: "/pokemon/:id/",
        element: <PokemonDetail />,
      },
      {
        path: "/add-pokemon",
        element: <AddPokemonForm />,
      },
    ],
  },
]);

export const PokemonRouter = () => {
  return (
    <>
      <SearchComponent>
        <RouterProvider router={router} />
      </SearchComponent>
    </>
  );
};
