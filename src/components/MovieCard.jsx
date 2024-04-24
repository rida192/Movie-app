import { Link, useLocation } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { useBookmarkContext } from "../context/bookmarkContext";
import { AnimatePresence, motion } from "framer-motion";

const MovieCard = ({ movie, index }) => {
  const { pathname } = useLocation();

  const genre = pathname.split("/")[1];

  const { addBookmark, removeBookmark, isBookmarked } = useBookmarkContext();

  return (
    movie.original_title !== "Così fan tutte" && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: index * 0.05 }}
        className="bg-gradient-to-tl dark:from-white/20  dark:to-[#222] hover:from-white/30 hover:saturate-[2.5]  backdrop-blur-lg text-center p-2 relative transition-all duration-100 group rounded-sm md:hover:scale-[1.03] text-black dark:text-white shadow-[0_5px_20px_0_rgba(0,0,0,0.3)] shadow-black/70 dark:shadow-none my-2.5 "
      >
        <div className="flex justify-between items-center ">
          <div>
            {isBookmarked(movie.id) ? (
              <AnimatePresence>
                <motion.button
                  initial={{ opacity: 0.8, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.1 }}
                  className=" text-[20px] text-teal-500 "
                  onClick={() => removeBookmark(movie.id)}
                >
                  <FaBookmark />
                </motion.button>
              </AnimatePresence>
            ) : (
              <motion.button
                initial={{ opacity: 0.8, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1 }}
                className=" text-[20px] dark:text-white text-black  "
                onClick={() => addBookmark(movie)}
              >
                <FaRegBookmark />
              </motion.button>
            )}
          </div>
          <h2
            className={` text-[38px] text-yellow-500 flex justify-center items-center   `}
          >
            <AiFillStar />
            <p className=" text-black text-xs font-bold -ml-[28px]">
              {movie?.vote_average === 0
                ? movie?.vote_average
                : (movie?.vote_average).toFixed(1)}
            </p>
          </h2>
        </div>
        <Link to={`/${genre ? genre : "movies"}/${movie.id}`}>
          <div className="img-container overflow-hidden h-[150px] sm:h-[200px] ">
            <img
              src={
                movie?.poster_path
                  ? `https://themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}`
                  : "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/movie-alt2-512.png"
              }
              alt="cover image"
              className="transition w-full h-full duration-200 object-fit"
            />
          </div>
          <h2 className="text-sm mt-2 text-ellipsis whitespace-nowrap overflow-hidden">
            {movie.original_title}
          </h2>

          {/* <h2
            className={`absolute text-[45px] text-yellow-500 right-[5px] top-[5px]  `}
          >
            <AiFillStar />
            <p className=" text-black text-xs font-bold -mt-[30px]">
              {movie?.vote_average === 0
                ? movie?.vote_average
                : (movie?.vote_average).toFixed(1)}
            </p>
          </h2> */}
        </Link>
        {/* <div>
          {isBookmarked(movie.id) ? (
            <button
              className="absolute text-[25px] text-yellow-500 left-[15px] top-[15px]"
              onClick={() => removeBookmark(movie.id)}
            >
              <FaBookmark />
            </button>
          ) : (
            <button
              className="absolute text-[25px] text-yellow-500 left-[15px] top-[15px]"
              onClick={() => addBookmark(movie)}
            >
              <FaRegBookmark />
            </button>
          )}
        </div> */}
      </motion.div>
    )
  );
};

export default MovieCard;
