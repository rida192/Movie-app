import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetTopRatedMoviesQuery } from "../redux/services/apiEndpoints";
import { decrement, increment } from "../redux/features/topRatedSlice";

import Loader from "./Loader";
import MoviesGrid from "./MoviesGrid";

const TopRated = () => {
  const count = useSelector((state) => state.topRated.value);
  console.log(count);
  const {
    data: moviesList,
    error,
    isLoading,
    isFetching,
  } = useGetTopRatedMoviesQuery(count);
  console.log(moviesList);

  const dispatch = useDispatch();
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
        pageNumber={count}
        increment={increment}
        decrement={decrement}
      />
    </div>
  ) : null;
};

export default TopRated;
