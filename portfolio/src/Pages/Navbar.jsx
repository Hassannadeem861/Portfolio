import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../Constants";
import { logo, menu, close } from "../Images";
// import  hassan  from "../Images/images.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-10 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-25 h-20" />
          <p className="text-white cursor-pointer font-bold text-[20px]">
            Hassan
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link, i) => (
            <li key={Link.id}>
              <a
                href={`#${Link.id}`}
                className={`${
                  active === Link.title ? "text-white" : "text-secondary"
                }hover:text-white text-[20px] cursor-pointer font-medium`}
                onClick={() => setActive(Link.title)}
              >
                {Link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-start items-start flex-col gap-4">
              {navLinks.map((Link, i) => (
                <li key={Link.id}>
                  <a
                    href={`#${Link.id}`}
                    className={`${
                      active === Link.title ? "text-white" : "text-secondary"
                    } font-poppins text-[16px] cursor-pointer font-medium`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(Link.title);
                    }}
                  >
                    {Link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
