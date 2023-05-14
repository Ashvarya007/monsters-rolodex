
import "./search-box-style.css";
const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    type="search"
    className={`search-box ${className}`}
    id="searchBox"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);


export default SearchBox;
