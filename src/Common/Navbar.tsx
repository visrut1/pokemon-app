import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchContext from "../Context/SearchContext";
import "./style/Navbar.css";

import { BASE_URL } from "../env";

export const Navbar = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  const fetchPokemonByName = async (name: string) => {
    const response = await fetch(`${BASE_URL}/pokemons/name/${name}`);
    const data = await response.json();
    if (response.ok) {
      navigate(`/pokemon/${data.id}/`);
    }
  };

  const searchFormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchPokemonByName(searchTerm);
  };

  return (
    <>
      <nav className="Navbar">
        <Link to="/" className="Logo">
          <h1>PokeMon</h1>
        </Link>
        <form className="Input_Form" onSubmit={searchFormSubmitHandler}>
          <input
            type="text"
            placeholder="search"
            className="Input"
            autoFocus={true}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit" className="Search_Button">
            Search
          </button>
          <Link to="/add-pokemon" className="Add_Button mx-2">
            Add
          </Link>
        </form>
      </nav>
    </>
  );
};
