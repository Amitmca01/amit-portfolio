import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0a05] border-t border-orange-900/20 py-8 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Amitmca01"
            target="_blank"
            rel="noreferrer"
            className="text-white/50 hover:text-white transition-all duration-300 text-2xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/amit"
            target="_blank"
            rel="noreferrer"
            className="text-[#0077b5] hover:text-[#0091d5] transition-all duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">
          © 2026 Amit Kumar · All rights reserved
        </span>

        {/* Tag */}
        <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">
          Built with <span className="text-orange-400/60">React</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
