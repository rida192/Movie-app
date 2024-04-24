import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { BiSearch, BiCategory, BiCompass } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { useThemeContext } from "../context/themeContext";
import { motion } from "framer-motion";

// Navlinks function for useablity
const NavLinks = ({ handleClick }) => {
  const { pathname } = useLocation();

  const genre = pathname.split("/")[1];
  // console.log(pathname.split("/")[1]);

  // Linkes array to loop through it
  const links = [
    { name: "Discover", to: "/", icon: <BiCompass /> },
    { name: "Search", to: "/search", icon: <BiSearch /> },
    // { name: "Trending", to: "/trending", icon: <AiOutlineFire /> },
    { name: "Top Rated", to: "/top-rated", icon: <AiOutlineFire /> },
    // { name: "Watchlist", to: "/watchlist", icon: <BsBookmark /> },
    { name: "Bookmarks", to: "/bookmarked", icon: <BsBookmark /> },
  ];

  return (
    <div className="mt-10">
      {links.map((item) => (
        <NavLink
          className={`flex flex-row items-center  my-8 text-sm font-medium  hover:text-teal-500 dark:hover:text-teal-400 text-black dark:text-white transition duration-200 ${
            item.name === "Discover" && genre === "movies" ? "active" : ""
          }
          `}
          to={item.to}
          key={item.name}
          onClick={handleClick && handleClick}
          // end
        >
          <h2 className="text-2xl mr-2"> {item.icon}</h2>
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { darkMode, toggleDarkMode } = useThemeContext();

  // const [isOn, setIsOn] = useState(false);

  // const toggleSwitch = () => setIsOn(!isOn);

  // const spring = {
  //   type: "spring",
  //   stiffness: 700,
  //   damping: 30,
  // };
  return (
    <>
      {/* desktop header */}
      <div className="hidden md:flex flex-col justify-between w-[150px] py-10 px-4 bg-white dark:bg-gradient-to-br  dark:from-[#222] dark:to-black rounded-tr-[50px] rounded-br-[50px] gap-20 text-black dark:text-white shadow-[0_5px_20px_0_rgba(0,0,0,0.3)]  shadow-black/40 dark:shadow-none">
        <h1 className="text-3xl mx-auto">
          <span className="text-teal-400 font-[Pacifico]">Movie</span>fy
        </h1>
        <NavLinks />
        {/* <motion.button
            className="relative w-12 h-6 rounded-full p-1 bg-gray-400"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`absolute w-4 h-4 rounded-full ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-md`}
              layout
              transition={{ duration: 0.2 }}
            ></motion.div>
          </motion.button> */}

        {/* <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div> */}

        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={toggleDarkMode}
        >
          <button
            className="theme-toggle--button mx-auto "
            aria-label="Toggle Theme"
          >
            <span class={`shape ${darkMode ? "moon" : "sun"}`}></span>
            <span class="rays--container">
              <span class="ray"></span>
              <span class="ray"></span>
              <span class="ray"></span>
              <span class="ray"></span>
            </span>
          </button>
          <p className="flex-1">Theme</p>
        </div>
      </div>
      {/* mobile header */}
      <div className="absolute container py-4 flex justify-between items-center md:hidden top-0 left-0  z-[20] w-full bg-gradient-to-br dark:from-teal-900/50 dark:backdrop-blur-lg dark:to-[#222]  text-black shadow-xl shadow-black/40 dark:shadow-none dark:text-white bg-white dark:bg-white/0 ">
        <h1 className="text-2xl sm:text-2xl ">
          <Link to="/">
            <span className="text-teal-400 font-[Pacifico] cursor-pointer">
              Movie
            </span>
            fy
          </Link>
        </h1>
        {mobileMenuOpen ? (
          // close button
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className="w-6 h-6 mr-2 dark:text-white text-black"
          />
        ) : (
          // burger button
          <HiOutlineMenu
            onClick={() => setMobileMenuOpen(true)}
            className="w-6 h-6 mr-2 dark:text-white text-black"
          />
        )}
      </div>
      <div
        // toggled nav
        className={`absolute top-0 h-[100dvh] w-[calc(46%+28px)] bg-gradient-to-tl from-white/10 to-white dark:to-[#222]  backdrop-blur-lg z-[21]  py-6 px-3 md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "left-0" : "-left-full"
        } `}
      >
        <div className="flex flex-col justify-between h-full">
          <NavLinks handleClick={() => setMobileMenuOpen(false)} />
          <div
            className="flex items-center gap-4 cursor-pointer  bottom-0 left-32 text-black dark:text-white"
            onClick={toggleDarkMode}
          >
            <button
              className="theme-toggle--button mx-auto"
              aria-label="Toggle Theme"
            >
              <span class={`shape ${darkMode ? "moon" : "sun"}`}></span>
              <span class="rays--container">
                <span class="ray"></span>
                <span class="ray"></span>
                <span class="ray"></span>
                <span class="ray"></span>
              </span>
            </button>
            <p className="flex-1">Theme</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
