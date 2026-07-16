import React, { useState, useEffect } from "react";
import assets from "../assets/data";
import { navLinks } from "../assets/data";
import { FiMenu, FiX } from "react-icons/fi";
const Navbar = () => {
  let [open, setOpen] = useState(false);
  let [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY > 50);
    };
  }, []);

  return (
    <section className={`fixed top-0 z-50 w-full px-3 `}>
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between p-1 px-3 md:px-5 ${scroll ? "mt-3 rounded-3xl backdrop-blur-md bg-primary/50" : ""}`}
      >
        {/* /*first part */}
        <img src={assets.royaLogo} className="w-15 px-0 md:px-4 md:w-24" alt="" />
        {/* /*second part */}
        <div
          className={`${open ? `flex w-full mt-2` : `flex w-0 overflow-hidden`} flex-col items-center absolute top-full left-0 py-4 rounded-3xl bg-primary 
       shadow shadow-ink/10 overflow-hidden md:relative md:flex md:flex-row md:items-center md:justify-center md:w-fit md:py-0`}
        >
          {navLinks.map((links) => {
            return (
              <a
                key={links.href}
                href={links.href}
                className={`${scroll ? " shadow-none" : ""} md:bg-secondary w-full cursor-pointer   p-2 px-5 text-center font-header text-white md:text-primary md:border-0`}
              >
                {links.label}
              </a>
            );
          })}
        </div>

        {/* /*third part */}
        <div className="flex items-center">
          <button className="cursor-pointer bg-primary font-header font-medium  text-white border-0 rounded-full shadow p-1.5  text-md md:px-8 md:py-2">
            احجز موعد
          </button>
          <button
            type="button"
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full  text-warm-white"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {open ? <FiX size={30} className="bg-primary text-white rounded-full p-2" /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
