import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useGetTopRatedMoviesQuery } from "../redux/services/apiEndpoints";
import { decrement, increment } from "../redux/features/topRatedSlice";

import Loader from "./Loader";
import MoviesGrid from "./MoviesGrid";

const TopRated = () => {
  const pageNumber = useSelector((state) => state.topRated.value);
  // console.log(pageNumber);
  const {
    data: moviesList,
    error,
    isLoading,
    isFetching,
  } = useGetTopRatedMoviesQuery(pageNumber);
  // console.log(moviesList);

  const divRef = useRef(null);

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

export default TopRated;
