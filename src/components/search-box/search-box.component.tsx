import './search-box.styles.css';

type SerchBoxProps={
  className:string;
  placeholder?:string;
  onChangeHandler:(a:string)=>void
}



const SearchBox = ({ className, placeholder, onChangeHandler }:SerchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
