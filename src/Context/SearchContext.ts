import { createContext } from "react";

interface ISearchContext {
  searchTerm: string;
  setSearchTerm: Function;
}

export default createContext<ISearchContext>({
  searchTerm: "",
  setSearchTerm: () => {},
});
