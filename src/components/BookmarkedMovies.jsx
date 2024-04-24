import React from "react";
import { useBookmarkContext } from "../context/bookmarkContext";
import MoviesGrid from "../components/MoviesGrid";

const BookmarkedMovies = () => {
  const { bookmarks } = useBookmarkContext();

  return bookmarks.length !== 0 ? (
    <div>
      <MoviesGrid moviesList={bookmarks} />
    </div>
  ) : (
    <div className=" w-full text-center my-auto h-full grid place-content-center text-white">
      <h1 className="text-2xl mt-[150px] md:mt-[0px] lg:mt-[350px] max-w-2xl">
        Oops! It looks like your bookmarks tab is feeling a bit lonely. Why not
        start adding some bookmarks to keep it company?
      </h1>
    </div>
  );
};

export default BookmarkedMovies;
