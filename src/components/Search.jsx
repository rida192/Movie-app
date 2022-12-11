import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { increment, decrement } from "../redux/features/searchSlice";
// import { useGetSearchedMoviesQuery } from "../redux/services/apiEndpoints";
import MoviesGrid from "./MoviesGrid";
import Loader from "./Loader";

const Search = () => {
  const [search, setSearch] = useState("all");
  const count = useSelector((state) => state.search.value);
  // const {
  //   data: moviesList,
  //   error,
  //   isLoading,
  //   isFetching,
  // } = useGetSearchedMoviesQuery(search);
  const divRef = useRef(null);

  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth" });
  });

  console.log(moviesList, count);

  return isLoading ? (
    <>
      <Loader />
    </>
  ) : moviesList ? (
    <>
      <div className="pt-28 md:pt-40" ref={divRef}>
        <form>
          <input
            className="text-black"
            type="text"
            vlaue={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </div>
      <MoviesGrid
        moviesList={moviesList}
        pageNumber={count}
        increment={increment}
        decrement={decrement}
      />
    </>
  ) : null;
};

export default Search;
