import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/features/counterSlice";
import { useGetLatestMoviesQuery } from "../redux/services/apiEndpoints";
import MovieCard from "./MovieCard";
import Loader from "./Loader";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import MoviesGrid from "./MoviesGrid";

const Content = () => {
  const count = useSelector((state) => state.counter.value);
  // const {
  //   data: moviesList,
  //   error,
  //   isLoading,
  //   isFetching,
  // } = useGetLatestMoviesQuery(count);
  console.log(count);

  const {
    data: moviesList,
    error,
    isLoading,
    isFetching,
  } = useGetLatestMoviesQuery(count);
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

export default Content;
