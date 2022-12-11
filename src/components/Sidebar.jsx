import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { BiSearch, BiCategory, BiCompass } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
const NavLinks = ({ handleClick }) => {
  const links = [
    { name: "Discover", to: "/", icon: <BiCompass /> },
    { name: "Search", to: "/search", icon: <BiSearch /> },
    // { name: "Trending", to: "/trending", icon: <AiOutlineFire /> },
    { name: "Top Rated", to: "/top-rated", icon: <AiOutlineFire /> },
  ];
  return (
    <div className="mt-10">
      {links.map((item) => (
        <NavLink
          className="flex flex-row items-center  my-8 text-sm font-medium text-white hover:text-teal-400 active:text-teal-400 transition duration-200"
          to={item.to}
          key={item.name}
          onClick={handleClick && handleClick}
          end
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
  return (
    <>
      <div className="hidden md:flex flex-col w-[150px] py-10 px-4 bg-gradient-to-br from-[#222] to-black rounded-tr-[50px] rounded-br-[50px] gap-20">
        <h1 className="text-3xl mx-auto">
          <span className="text-teal-400 font-[Pacifico]">Movie</span>fy
        </h1>
        <NavLinks />
      </div>
      <div className="absolute container py-4 flex justify-between items-center md:hidden top-0 left-0  z-[20] w-full bg-gradient-to-br from-teal-900/50 backdrop-blur-lg to-[#222]  ">
        <h1 className="text-2xl sm:text-2xl ">
          <span className="text-teal-400 font-[Pacifico]">Movie</span>fy
        </h1>
        {mobileMenuOpen ? (
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className="w-6 h-6 mr-2 text-white"
          />
        ) : (
          <HiOutlineMenu
            onClick={() => setMobileMenuOpen(true)}
            className="w-6 h-6 mr-2 text-white"
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-[calc(30%+28px)] bg-gradient-to-tl from-white/10 to-[#222]  backdrop-blur-lg z-[21]  py-6 px-3 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "left-0" : "-left-full"
        } `}
      >
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
