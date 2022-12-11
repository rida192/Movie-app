import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counterSlice";
import { useGetLatestMoviesQuery } from "../redux/services/apiEndpoints";
import Loader from "./Loader";

import MoviesGrid from "./MoviesGrid";

const Content = () => {
  // set the pageNumber
  const pageNumber = useSelector((state) => state.counter.value);

  console.log(pageNumber);

  // fetch latest movies data
  const {
    data: moviesList,
    error,
    isLoading,
    isFetching,
  } = useGetLatestMoviesQuery(pageNumber);
  console.log(moviesList);

  const divRef = useRef(null);

  // scroll to top onMount

  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth" });
  });

  return error ? (
    <div className=" w-full text-center my-auto h-full grid place-content-center">
      <h1 className="text-2xl mt-[150px] md:mt-[0px] lg:mt-[350px]">
        Somthing Went Wrong!!
      </h1>
    </div>
  ) : isLoading || isFetching ? (
    <>
      <Loader />
    </>
  ) : moviesList ? (
    <div ref={divRef}>
      <MoviesGrid
        moviesList={moviesList}
        pageNumber={pageNumber}
        increment={increment}
        decrement={decrement}
      />
    </div>
  ) : null;
};

export default Content;
