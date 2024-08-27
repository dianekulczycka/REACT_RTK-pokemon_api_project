import {createBrowserRouter, RouteObject} from 'react-router-dom';
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import PokemonsPage from "../pages/PokemonsPage";
import FavouritePokemonsPage from "../pages/FavouritePokemonsPage";
import SelectedPokemonPage from "../pages/SelectedPokemonPage";
import SearchPage from "../pages/SearchPage";
import FormsPage from "../pages/FormsPage";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <PokemonsPage/>},
            {path: "pokemons", element: <PokemonsPage/>},
            {path: "favourites", element: <FavouritePokemonsPage/>},
            {path: "pokemons/:id", element: <SelectedPokemonPage/>},
            {path: "search/:search_option", element: <SearchPage/>},
            {path: "forms/:id", element: <FormsPage/>}
        ],
    },
]

export const router = createBrowserRouter(routes);
