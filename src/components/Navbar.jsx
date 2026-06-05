import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed w-full z-50 relative py-4 px-8
      bg-[#1c1917]/92 backdrop-blur-lg
      border-b border-orange-300/10
      shadow-[0_4px_24px_rgba(251,146,60,0.06)]
      before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px]
      before:bg-gradient-to-r before:from-transparent before:via-orange-300/50 before:to-transparent"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* LEFT: Logo */}
        <div>
          <a href="#" className="text-white group cursor-pointer">
            <div className="relative leading-none">
              <span
                className="absolute -top-2 -left-1 text-[52px] font-black uppercase text-transparent 
                [-webkit-text-stroke:1px_rgba(168,85,247,0.15)] leading-none select-none pointer-events-none"
              >
                A
              </span>

              <div className="flex items-baseline gap-0 relative">
                <span
                  className="text-[38px] font-black uppercase leading-none text-transparent 
                  [-webkit-text-stroke:1.5px_white] tracking-tight"
                >
                  A
                </span>

                <div className="flex flex-col justify-center ml-[2px] mb-[4px]">
                  <span className="text-[9px] font-black tracking-[0.25em] text-white/40 uppercase leading-none">
                    MIT
                  </span>
                  <span className="text-[9px] font-black tracking-[0.25em] text-purple/60 uppercase leading-none mt-[1px]">
                    ───
                  </span>
                </div>

                <span className="text-[22px] font-thin text-purple/80 leading-none mx-1 mb-[2px] rotate-12 inline-block">
                  ⟋
                </span>

                <div className="relative">
                  <span
                    className="text-[36px] font-black italic leading-none tracking-tight
                    bg-gradient-to-br from-white via-orange-300 to-orange-600
                    bg-clip-text text-transparent"
                  >
                    dev
                  </span>
                  <div
                    className="absolute -bottom-[3px] left-0 right-0 h-[2px]
                    bg-gradient-to-r from-transparent via-orange-300 to-transparent rounded-full"
                  ></div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-[6px]">
                <div className="h-[1px] w-3 bg-purple/40"></div>
                <span className="text-[6.5px] font-mono tracking-[0.5em] text-white/40 uppercase">
                  frontend · developer
                </span>
                <div className="h-[1px] w-3 bg-orange-400/30"></div>
              </div>
            </div>
          </a>
        </div>

        {/* RIGHT: Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={"#" + link}
                className="text-white/70 transition-all duration-500 hover:text-orange-300 hover:tracking-widest relative inline-block group"
              >
                {link}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-orange-300 to-transparent rounded-full transition-all duration-500 group-hover:w-full"></span>
              </a>
            ),
          )}
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={
              "block h-[2px] w-6 bg-white rounded-full transition-all duration-300 " +
              (menuOpen ? "rotate-45 translate-y-[7px]" : "")
            }
          ></span>
          <span
            className={
              "block h-[2px] w-4 bg-orange-400 rounded-full transition-all duration-300 " +
              (menuOpen ? "opacity-0" : "")
            }
          ></span>
          <span
            className={
              "block h-[2px] w-6 bg-white rounded-full transition-all duration-300 " +
              (menuOpen ? "-rotate-45 -translate-y-[7px]" : "")
            }
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          "md:hidden transition-all duration-500 overflow-hidden " +
          (menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0")
        }
      >
        <div className="flex flex-col gap-4 px-4 pb-6 border-t border-orange-400/10 pt-4">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={"#" + link}
                onClick={() => setMenuOpen(false)}
                className="text-white/60 hover:text-orange-300 text-sm font-medium tracking-widest uppercase transition-all duration-300"
              >
                {link}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
