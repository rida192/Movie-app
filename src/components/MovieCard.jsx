import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const MovieCard = ({ movie }) => {
  // console.log(movie);
  return (
    <div className="bg-gradient-to-tl from-white/20  to-[#222] hover:from-white/30 hover:saturate-[2.5]  backdrop-blur-lg text-center p-2 relative transition-all duration-100 group rounded-sm  ">
      <Link to={`/movies/${movie.id}`}>
        <div className="img-container overflow-hidden h-[150px] sm:h-[200px] ">
          <img
            src={`https://themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}`}
            alt="cover image"
            // loading="lazy"
            className="transition w-full h-full duration-200 object-fit"
          />
        </div>
        <h2 className="text-sm mt-2 text-ellipsis whitespace-nowrap overflow-hidden">
          {movie.original_title}
        </h2>

        <h2
          className={`absolute text-[45px] text-yellow-500 right-[5px] top-[5px] fflex items-center justify-center `}
        >
          <AiFillStar />
          <p className=" text-black text-xs font-bold -mt-[30px]">
            {movie?.vote_average}
          </p>
        </h2>
      </Link>
    </div>
  );
};

export default MovieCard;

// /t/p/w220_and_h330_face/jhdSPDlhswjN1r6O0pGP3ZvQgU8.jpg
// {
//   "adult": false,
//   "backdrop_path": "/tUBN1paMQ1tmVA5Sjy1ZjPWVsiF.jpg",
//   "genre_ids": [
//       12,
//       16,
//       35,
//       10751,
//       14
//   ],
//   "id": 676701,
//   "original_language": "es",
//   "original_title": "Tadeo Jones 3: La Tabla Esmeralda",
//   "overview": "Tad would love for his archeologist colleagues to accept him as one of their own, but he always messes everything up. Tad accidentally destroys a sarcophagus and unleashes an ancient spell endangering the lives of his friends: Mummy, Jeff and Belzoni. With everyone against him and only helped by Sara, he sets off on an adventure that will take him from Mexico to Chicago and from Paris to Egypt, in order to put an end to the curse of the Mummy.",
//   "popularity": 588.999,
//   "poster_path": "/jvIVl8zdNSOAJImw1elQEzxStMN.jpg",
//   "release_date": "2022-08-24",
//   "title": "Tad the Lost Explorer and the Curse of the Mummy",
//   "video": false,
//   "vote_average": 7.8,
//   "vote_count": 147
// }
