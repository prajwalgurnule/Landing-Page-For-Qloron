import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import links from "../data/links";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnMaximize = useCallback(() => {
    if (window.innerWidth > 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("resize", closeMenuOnMaximize);
    return () => {
      window.removeEventListener("resize", closeMenuOnMaximize);
    };
  }, [closeMenuOnMaximize]);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSortboxClick = () => {
    window.open("https://hr-pro-hrms-landing-page.vercel.app/", "_blank");
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
          <nav className="flex justify-between items-center py-6">
            {/* logo */}
            <a
              href="/"
              className="flex items-center gap-3 text-2xl text-black font-semibold"
            >
              <img
                src="../images/QloronLogo/company-logo.png"
                alt="Qloron Logo"
                className="logonavbar rounded-sm"
                width="200"
                height="200"
              />
            </a>

            {/* nav items for large devices */}
            <ul className="hidden lg:flex gap-12 items-center">
              {links.map(({ path, title }) => (
                <li
                  key={path}
                  className="text-base text-primary hover:text-secondary duration-300"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
              {/* Sortbox button */}
              <li>
                <button
                  onClick={handleSortboxClick}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 border border-cyan-600 rounded-md transition duration-300"
                >
                  SORTBOXS
                </button>
              </li>
            </ul>

            {/* mobile menu */}
            <div className="lg:hidden block">
              <button onClick={handleMenuToggler}>
                {isMenuOpen ? (
                  <FaXmark className="w-5 h-5 text-primary" />
                ) : (
                  <FaBarsStaggered className="w-5 h-5 text-primary" />
                )}
              </button>
            </div>
          </nav>

          {/* mobile menu items */}
          <div
            className={`px-4 bg-secondary py-5 mb-2 rounded-xl ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul>
              {links.map(({ path, title }) => (
                <li
                  key={path}
                  className="text-base text-white/85 first:text-white py-1 hover:text-primary duration-300"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "active-black" : ""
                    }
                    onClick={handleCloseMenu}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
              {/* Sortbox button for mobile */}
              <li className="py-2">
                <button
                  onClick={handleSortboxClick}
                  className="btn-primary flex items-center md:mb-5 rounded-full"
                >
                  SORTBOXS
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
