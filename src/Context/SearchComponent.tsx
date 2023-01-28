import { useState } from "react";
import SearchContext from "./SearchContext";

interface ISearchProps {
  children: React.ReactElement;
}

const SearchComponent = (props: ISearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchContext.Provider
      value={{ searchTerm: searchTerm, setSearchTerm: setSearchTerm }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchComponent;
