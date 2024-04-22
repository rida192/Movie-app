import React from "react";
import { useBookmarkContext } from "../context/bookmarkContext";
import MoviesGrid from "../components/MoviesGrid";

const BookmarkedMovies = () => {
  const { bookmarks } = useBookmarkContext();

  console.log(bookmarks);

  return (
    <div>
      <MoviesGrid moviesList={bookmarks} />
    </div>
  );
};

export default BookmarkedMovies;
