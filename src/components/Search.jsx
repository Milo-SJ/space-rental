import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch;
  return (
    <>
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        onInput={(e) => {
          dispatch(setSearchTerm(e.target.value));
        }}
      />
    </>
  );
};

export default Search;
