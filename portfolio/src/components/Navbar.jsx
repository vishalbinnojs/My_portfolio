import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { RiMenuFoldFill } from "react-icons/ri";
import { BiCross } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const links = ["About","Skills","Projects","Contact"]
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#222]/90 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">
        <div className="flex items-center gap-2">
          <FaCode className="text-cyan-400 text-xl" />
          <h1 className="font-bold text-xl">Vishal.dev</h1>
        </div>
        
        <RiMenuFoldFill size={30} className="block md:hidden text-2xl cursor-pointer text-cyan-400" 
        onClick={()=>setIsMenuOpen(!isMenuOpen)}
        />
        
        <ul className="hidden md:flex gap-8 ">
          {links.map((link,i)=>(
            <li key={i} className=" hover:text-cyan-400 transition-colors duration-300">
              <a href={`#${link.toLowerCase()}`}>{link}</a></li>
          ))}
        </ul>

        {/* {isMenuOpen && (
  <ul className="md:hidden absolute top-18 right-0 flex flex-col gap-4  bg-[#2a2a2a]  p-8 border border-cyan-500/20 shadow-[0_0_40px_rgba(0,229,255,0.15)] w-[50%]">
    {links.map((link, i) => (
      <li key={i} className=" hover:text-cyan-400 transition-colors duration-300">
        <a href={`#${link.toLowerCase()}`}>{link}</a>
      </li>
    ))}
  </ul>
)} */}
<div
  className={`fixed top-0 right-0  w-64 bg-[#2a2a2a] border border-cyan-500/20 shadow-[0_0_40px_rgba(0,229,255,0.15)]
  transition-transform duration-300 ease-in-out z-50 rounded-xl
  ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
>
  <button
    className="text-white text-2xl p-6 cursor-pointer absolute top-0 right-0"
    onClick={() => setIsMenuOpen(false)}
  >
    <BiCross className="rotate-45 hover:rotate-135 hover:text-cyan-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]"/>
  </button>

  <ul className="flex flex-col gap-6 p-8 text-white">
    {links.map((link, i) => (
      <li key={i} >
        <a href={`#${link.toLowerCase()}`}
        className=" hover:text-cyan-400 transition-colors duration-300">
          {link}
        </a>
      </li>
    ))}
  </ul>
</div>
{isMenuOpen && (
  <div
    className="fixed inset-0 bg-black/50 sm:hidden"
    onClick={() => setIsMenuOpen(false)}
  />
)}
        
      </div>
    </nav>
  );
};

export default Navbar;