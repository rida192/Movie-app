import { useEffect, useRef } from "react";

import { useParams } from "react-router-dom";
import {
  useGetMovieDetailsQuery,
  useGetSimilerMoviesQuery,
} from "../redux/services/apiEndpoints";
import Loader from "./Loader";
import { AiFillStar } from "react-icons/ai";
import Title from "./Title";
import MovieCard from "./MovieCard";

const MovieDetails = () => {
  // fetch movie id
  const { movieId } = useParams();

  // fetch movie details data
  const {
    data: movie,
    isFetching,
    error,
    isLoading,
  } = useGetMovieDetailsQuery(movieId);

  // fetch similer movies
  const { data: similerMovies } = useGetSimilerMoviesQuery(movieId);
  const divRef = useRef(null);

  // scroll up onMount
  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth" });
  });

  // console.log("movie", movie);
  // console.log(similerMovies);

  return error ? (
    <>Somthing Went Wrong!!</>
  ) : isLoading || isFetching ? (
    <>
      <Loader />
    </>
  ) : movie ? (
    <div
      className="flex flex-col  pt-28 pb-28 md:pt-40 fadeAnimate"
      ref={divRef}
    >
      <div className="flex flex-col  gap-8 max-w-[1200px] ">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-2">
          <div className="">
            <h2 className=" text-2xl  md:text-4xl max-w-[700px] mb-4 text-center md:text-start ">
              {movie.original_title}
            </h2>

            {/* getting the release date data */}
            <div className="flex gap-2 text-gray-300 font-light justify-center md:justify-start flex-wrap">
              Movies .<p>{movie.original_language}</p>.{" "}
              <p>{movie?.release_date?.slice(0, 4)}</p> .{" "}
              {movie?.genres.slice(0, 2).map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
              . {`${Math.floor(movie?.runtime / 60)}h ${movie?.runtime % 60}m`}
            </div>
          </div>
          <div className="flex">
            <p className="text-2xl text-yellow-500">
              <AiFillStar />
            </p>
            {/* fixing the number */}
            <p>{(movie?.vote_average).toFixed(1)} / 10</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-14 lg:gap-32 ">
          <div className=" w-[290px] h-[270px] md:h-[390px]  self-center md:self-start">
            <img
              src={
                movie?.poster_path
                  ? `https://themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}`
                  : "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/movie-alt2-512.png"
              }
              className="object-fit max-h-full w-full"
            />
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <i className="text-xl text-white/80 font-mono">
                {movie?.tagline}
              </i>
            </div>
            <Title name={"Overview"} text={movie?.overview} />
          </div>
        </div>

        <Title name={"Similer Movies"} />

        <div className="scroller pb-2 px-1 scroll-px-2 grid grid-flow-col auto-cols-[40%] sm:auto-cols-[30%] md:auto-cols-[21%] gap-4 overflow-x-auto snap-x  [&>*]:snap-start">
          {similerMovies?.results?.map((movie) => (
            <MovieCard key={movie.id} className="" movie={movie} />
          ))}
        </div>
      </div>

      {/* <div className="mt-8 flex flex-wrap gap-3">
        {movie?.genres?.map((genre, i) => (
          <span
            key={i}
            className="text-sm font-semibold border text-black bg-white border-white rounded-full py-[5px] px-[7px]  hover:text-white hover:bg-white/10 transition duration-200 cursor-pointer"
          >
            {genre}
          </span>
        ))}
      </div> */}
      {/* <div className="mt-8  flex flex-col md:flex-row gap-20  max-w-[1200px]">
        <div className="flex flex-col">
          <Title name={"Trailer"} />
          <iframe
            className="max-w-[500px] h-[270px] md:w-[385px]  md:h-[330px] mx-auto"
            src={`https://youtube.com/embed/${movie?.yt_trailer_code}?autoplay=0`}
            frameborder="0"
            sandbox="allow-same-origin allow-forms allow-popups
            allow-scripts allow-presentation"
          ></iframe>
        </div>
        <div className="flex-1 flex flex-col gap-12 md:gap-24 ">
          <Title name={"Cast"} />
          <div className="flex flex-wrap gap-12  text-center justify-center md:items-center  md:justify-start">
            {movie?.cast?.map(
              (character, i) =>
                character.url_small_image && (
                  <div key={i} className=" ">
                    <img
                      className="mx-auto"
                      src={character?.url_small_image}
                      alt=""
                    />
                    <p className="p-2 bg-white/20 backdrop-blur-md rounded-t-md">
                      {character?.name}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
      </div> */}

      {/* <div className="mt-8">
        <Title name={"Related Movies"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center ">
          {movie?.data?.movies?.map((card, i) => (
            <MovieCard movie={card} key={i} />
          ))}
        </div>
      </div> */}
    </div>
  ) : null;
};

export default MovieDetails;
