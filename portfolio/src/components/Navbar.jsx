import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { RiMenuFoldFill } from "react-icons/ri";
import { BiCross } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">
          <a href="#top" className="flex items-center gap-2">
            <FaCode className="text-accent text-xl" />
            <h1 className="font-bold text-xl">Vishal.dev</h1>
          </a>

          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="md:hidden text-accent cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RiMenuFoldFill size={30} />
          </button>

          <ul className="hidden md:flex gap-8">
            {links.map((link) => (
              <li key={link} className="hover:text-accent transition-colors duration-300">
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`fixed top-0 right-0 w-64 h-full bg-panel border border-accent/20 shadow-accent-glow
        transition-transform duration-300 ease-in-out z-50 rounded-xl
        ${isMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"}`}
      >
        <button
          aria-label="Close menu"
          className="text-white text-2xl p-6 cursor-pointer absolute top-0 right-0"
          onClick={() => setIsMenuOpen(false)}
        >
          <BiCross className="rotate-45 hover:rotate-135 hover:text-accent transition-all duration-300 hover:shadow-accent-glow" />
        </button>

        <ul className="flex flex-col gap-6 p-8 text-white">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          aria-hidden="true"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;