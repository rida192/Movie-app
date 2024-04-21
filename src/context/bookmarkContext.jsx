// BookmarkContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const BookmarkContext = createContext();

export const useBookmarkContext = () => {
  return useContext(BookmarkContext);
};

export const BookmarkProvider = ({ children }) => {
  useEffect(() => {
    // Load bookmarks from localStorage when component mounts
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (storedBookmarks) {
      setBookmarks(storedBookmarks);
    }
  }, []); // Run once on component mount

  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (movie) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, movie]);
    localStorage.setItem("bookmarks", JSON.stringify([...bookmarks, movie]));
  };

  const removeBookmark = (movieId) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((movie) => movie.id !== movieId)
    );
    localStorage.setItem(
      "bookmarks",
      JSON.stringify(bookmarks.filter((movie) => movie.id !== movieId))
    );
  };

  const isBookmarked = (movieId) =>
    bookmarks.some((movie) => movie.id === movieId);

  const contextValue = {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
  };

  return (
    <BookmarkContext.Provider value={contextValue}>
      {children}
    </BookmarkContext.Provider>
  );
};
