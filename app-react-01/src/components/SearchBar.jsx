import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

const SearchBar = () => {
    return (
        <form className="search-container">
            <input type="text" placeholder="Pesquise por um modelo de carro..." />
            <button type="submit">
                <BsSearch />
            </button>
        </form>  
    );
};

export default SearchBar