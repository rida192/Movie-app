import { useDispatch } from "react-redux";

import MovieCard from "./MovieCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const MoviesGrid = ({
  moviesList,
  pageNumber,
  increment,
  decrement,
  bookmark,
}) => {
  const dispatch = useDispatch();

  console.log(moviesList?.results?.length);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 pt-28 md:pt-40 gap-8 place-content-center hide-scrollbar fadeAnimate">
        {moviesList?.results
          ? moviesList?.results?.map((movie) => (
              <MovieCard
                key={movie.id}
                className="w-[200px] h-[150px]"
                movie={movie}
              />
            ))
          : moviesList.map((movie) => (
              <MovieCard
                key={movie.id}
                className="w-[200px] h-[150px]"
                movie={movie}
              />
            ))}
      </div>

      {moviesList?.results?.length && (
        <div className="flex items-center justify-center mt-10  space-x-4">
          {/* Prev button */}
          <button
            onClick={() => {
              if (pageNumber === 1) {
                return;
              } else {
                dispatch(decrement());
              }
            }}
            className={`flex items-center justify-center gap-[4px]  transition duration-200 ${
              pageNumber === 1
                ? "opacity-50 hover:text-white"
                : "hover:text-teal-400"
            }`}
          >
            <AiOutlineArrowLeft />
            Prev
          </button>

          {/* Next button */}
          <button
            onClick={() => {
              if (pageNumber === moviesList?.total_pages) {
                return;
              } else {
                dispatch(increment());
              }
            }}
            className={`flex items-center justify-center gap-[4px] transition duration-200 ${
              pageNumber === moviesList?.total_pages
                ? "opacity-50 hover:text-white"
                : "hover:text-teal-400"
            }`}
          >
            Next
            <AiOutlineArrowRight />
          </button>
        </div>
      )}
    </>
  );
};

export default MoviesGrid;
