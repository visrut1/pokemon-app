import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchContext from "../Context/SearchContext";
import "./style/Navbar.css";

export const Navbar = () => {
  const { setSearchTerm } = useContext(SearchContext);

  return (
    <>
      <nav className="Navbar">
        <Link to="/" className="Logo">
          <h1>PokeMon</h1>
        </Link>
        <form className="Input_Form">
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
        </form>
      </nav>
    </>
  );
};
