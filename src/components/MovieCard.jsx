import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gradient-to-tl from-white/20  to-[#222] hover:from-white/30 hover:saturate-[2.5]  backdrop-blur-lg text-center p-2 relative transition-all duration-100 group rounded-sm  ">
      <Link to={`/movies/${movie.id}`}>
        <div className="img-container overflow-hidden h-[150px] sm:h-[200px] ">
          {/* <img
            src={`https://themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}`}
            alt="cover image"
            className="transition w-full h-full duration-200 object-fit"
          /> */}
          <link
            rel="preload"
            fetchpriority="high"
            as="image"
            href={`https://themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}`}
            type="image/jpg"
          ></link>
        </div>
        <h2 className="text-sm mt-2 text-ellipsis whitespace-nowrap overflow-hidden">
          {movie.original_title}
        </h2>

        <h2
          className={`absolute text-[45px] text-yellow-500 right-[5px] top-[5px] fflex items-center justify-center `}
        >
          <AiFillStar />
          <p className=" text-black text-xs font-bold -mt-[30px]">
            {movie?.vote_average === 0
              ? movie?.vote_average
              : (movie?.vote_average).toFixed(1)}
          </p>
        </h2>
      </Link>
    </div>
  );
};

export default MovieCard;
