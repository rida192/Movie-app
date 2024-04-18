import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Trending from "./components/Trending";
import Search from "./components/Search";
import MovieDetails from "./components/MovieDetails";
import TopRated from "./components/TopRated";
import Watchlist from "./components/Watchlist";

function App() {
  return (
    <div className="relative flex bg-gradient-to-br from-[#222] to-black ">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-[#222] to-black overflow-x-hidden">
        <div />
        <div className="px-6 h-screen  overflow-y-scroll overflow-x-hidden scrollbar-hide flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit  pb-40">
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/:genre/:movieId" element={<MovieDetails />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/top-rated" element={<TopRated />} />
              <Route path="/search" element={<Search />} />
              {/* <Route path="/watchlist" element={<Watchlist />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
