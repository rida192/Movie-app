import { useEffect, useState } from "react";

import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";

import { useGetLatestMoviesQuery } from "./redux/services/apiEndpoints";

import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Trending from "./components/Trending";
import Search from "./components/Search";
import MovieDetails from "./components/MovieDetails";
import Loader from "./components/Loader";
import TopRated from "./components/TopRated";

function App() {
  // const top = data.data.movies.filter((movie) => movie.rating > 8);

  // console.log(top);
  return (
    <div className="relative flex bg-gradient-to-br from-[#222] to-black">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-[#222] to-black">
        <div />
        <div className="px-10  h-screen overflow-y-scroll scrollbar-hide flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit  pb-40">
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/movies/:movieId" element={<MovieDetails />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/top-rated" element={<TopRated />} />
              <Route path="/search" element={<Search />} />
              {/* <Route path="/top-charts" element={<div />} /> */}
              {/* <Route path="/around-you" element={<div />} /> */}
              {/* <Route path="/artists/:id" element={<div />} /> */}
              {/* <Route path="/search/:searchTerm" element={<div />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
