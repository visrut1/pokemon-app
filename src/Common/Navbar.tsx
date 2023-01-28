import { Link } from "react-router-dom";
import "./style/Navbar.css";

export const Navbar = () => {
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
          />
          <button type="submit" className="Search_Button">
            Search
          </button>
        </form>
      </nav>
    </>
  );
};
