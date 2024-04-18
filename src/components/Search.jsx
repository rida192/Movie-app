import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { increment, decrement } from "../redux/features/searchSlice";
import { useGetsearchedMoviesQuery } from "../redux/services/apiEndpoints";
import { BiSearch } from "react-icons/bi";

import MoviesGrid from "./MoviesGrid";
import Loader from "./Loader";

const Search = () => {
  const [search, setSearch] = useState("all");
  const pageNumber = useSelector((state) => state.search.value);

  const {
    data: moviesList,
    error,
    isLoading,
    isFetching,
  } = useGetsearchedMoviesQuery({ search: search, pageNumber: pageNumber });
  const divRef = useRef(null);

  // to scroll up onMount

  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth" });
  });

  // input ref for targeting the input
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value == "") return;
    setSearch(value);
    inputRef.current.value = "";
  };
  // console.log(moviesList, pageNumber, search);
  return isLoading || isFetching ? (
    <>
      <Loader />
    </>
  ) : moviesList ? (
    <>
      <div className="pt-28 md:pt-40" ref={divRef}>
        <div className="flex justify-center  mx-auto">
          <form onSubmit={onSubmit} className="flex">
            {/* input feild */}
            <input
              ref={inputRef}
              className="text-black focus:outline-none py-2 pr-11 pl-4  rounded-full w-[300px] sm:w-[500px] "
              type="text"
              vlaue={search}
            />
            {/* submit button */}
            <button className="rounded-r-full bg-teal-400 h-10 w-10 text-black text-2xl flex items-center justify-center -ml-10 font-light focus:outline-teal-100  ">
              <BiSearch />
            </button>
          </form>
        </div>
        <h1 className=" mt-8 text-white/80 text-sm md:text-lg">
          Showing resluts of {search}
        </h1>
      </div>
      <MoviesGrid
        moviesList={moviesList}
        pageNumber={pageNumber}
        increment={increment}
        decrement={decrement}
      />
    </>
  ) : null;
};

export default Search;
