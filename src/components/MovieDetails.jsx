import { useEffect, useState, useRef } from "react";

import { useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../redux/services/apiEndpoints";
// import { moviesOption, fetchData } from "../utils/fetchData";
import Loader from "./Loader";
import { AiFillStar } from "react-icons/ai";
import Title from "./Title";
import MovieCard from "./MovieCard";

{
  /* <h2
  className={`absolute text-[45px] text-yellow-500 right-[5px] top-[5px] fflex items-center justify-center `}
>
  <AiFillStar />
  <p className=" text-black text-xs font-bold -mt-[30px]">{movie?.rating}</p>
</h2>; */
}

const MovieDetails = () => {
  const { movieId } = useParams();

  // const { data, isFetching, error, isLoading } =
  //   useGetMovieDetailsQuery(movieId);

  const {
    data: movie,
    isFetching,
    error,
    isLoading,
  } = useGetMovieDetailsQuery(movieId);

  // const { data: moviesSuggest } = useGetMovieSuggestionQuery(movieId);

  // if (isFetching || isLoading) return <Loader />;

  const divRef = useRef(null);
  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth" });
  });

  console.log("movie", movie);
  // console.log("movies sug", moviesSuggest);

  return error ? (
    <>Somthing Went Wrong!!</>
  ) : isLoading || isFetching ? (
    <>
      <Loader />
    </>
  ) : movie ? (
    <div className="flex flex-col  pt-28 md:pt-40 fadeAnimate" ref={divRef}>
      <div className="flex flex-col md:flex-col gap-8 max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-2">
          <div className="">
            <h2 className=" text-2xl  md:text-4xl max-w-[700px] mb-4 text-center md:text-start ">
              {movie.original_title}
            </h2>
            <div className="flex gap-2 text-gray-300 font-light justify-center md:justify-start">
              Movies . <p>{movie?.release_date?.slice(0, 4)}</p> .{" "}
              <p>{movie.original_language}</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-2xl text-yellow-500">
              <AiFillStar />
            </p>
            <p>{(movie?.vote_average).toFixed(1)} / 10</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-14 lg:gap-32 ">
          <div className=" w-[260px] h-[270px] md:h-[390px]  self-center md:self-start">
            <img
              src={`https://themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}`}
              className="object-fit max-h-full w-full"
            />
          </div>
          <div className="flex-1">
            <Title name={"Description"} text={movie?.overview} />
          </div>
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

// movie

// {
//   "adult": false,
//   "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
//   "belongs_to_collection": null,
//   "budget": 200000000,
//   "genres": [
//       {
//           "id": 28,
//           "name": "Action"
//       },
//       {
//           "id": 14,
//           "name": "Fantasy"
//       },
//       {
//           "id": 878,
//           "name": "Science Fiction"
//       }
//   ],
//   "homepage": "https://www.dc.com/BlackAdam",
//   "id": 436270,
//   "imdb_id": "tt6443346",
//   "original_language": "en",
//   "original_title": "Black Adam",
//   "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
//   "popularity": 5999.474,
//   "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
//   "production_companies": [
//       {
//           "id": 12,
//           "logo_path": "/iaYpEp3LQmb8AfAtmTvpqd4149c.png",
//           "name": "New Line Cinema",
//           "origin_country": "US"
//       },
//       {
//           "id": 34081,
//           "logo_path": null,
//           "name": "Flynn Picture Company",
//           "origin_country": "US"
//       },
//       {
//           "id": 73669,
//           "logo_path": "/7tmSGstK3KwgcDIuBYLTAayjit9.png",
//           "name": "Seven Bucks Productions",
//           "origin_country": "US"
//       },
//       {
//           "id": 128064,
//           "logo_path": "/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
//           "name": "DC Films",
//           "origin_country": "US"
//       }
//   ],
//   "production_countries": [
//       {
//           "iso_3166_1": "US",
//           "name": "United States of America"
//       }
//   ],
//   "release_date": "2022-10-19",
//   "revenue": 384571691,
//   "runtime": 125,
//   "spoken_languages": [
//       {
//           "english_name": "English",
//           "iso_639_1": "en",
//           "name": "English"
//       }
//   ],
//   "status": "Released",
//   "tagline": "The world needed a hero. It got Black Adam.",
//   "title": "Black Adam",
//   "video": false,
//   "vote_average": 7.311,
//   "vote_count": 2601
// }
