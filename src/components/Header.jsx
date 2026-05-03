"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, MessageCircle, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full shadow-sm bg-white">
      {/* Topbar */}
      <div
        className={`bg-[#67B2C5E8] text-black flex items-center w-full transition-all duration-300 ease-in-out ${isScrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"
          }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 flex justify-center md:justify-end items-center h-full text-[10px] sm:text-sm font-medium text-center">
          <span>Get 10% off on your first order | Use code: <strong>GlowCare</strong></span>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100 transition-all duration-300 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex shrink-0">
          <Link href="/" className="text-3xl font-bold tracking-tight text-black flex items-center">
            GlowCa<span className="text-[#11A9DC] relative"><span className="absolute -top-2 -right-0 text-[20px] ">♥</span>r</span>e
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex flex-1 justify-center lg:justify-start lg:pl-16 xl:pl-24">
          <nav className="flex items-center gap-5 lg:gap-8 text-gray-700 text-sm font-medium whitespace-nowrap">
            <Link href="/" className="text-[#39b5e0] hover:text-[#39b5e0] transition-colors">Home</Link>
            <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
              Skincare
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <Link href="/makeup" className="hover:text-black transition-colors">Makeup</Link>
            <Link href="/categories" className="hover:text-black transition-colors">Categories</Link>
            <Link href="/new-launch" className="hover:text-black transition-colors">New Launch</Link>
            <Link href="/about" className="hover:text-black transition-colors">About us</Link>
          </nav>
        </div>

        <div className="flex items-center justify-end gap-3 sm:gap-6 text-gray-500">
          <button className="hover:text-black transition-colors hidden sm:block">
            <Search className="w-6 h-6" />
          </button>
          <button className="hover:text-black transition-colors">
            <User className="w-6 h-6" />
          </button>
          <button className="hover:text-black transition-colors relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-[#11A9DC] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-[100px] bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-6 text-lg font-medium text-gray-800">
          <Link 
            href="/" 
            className="border-b border-gray-100 pb-2 text-[#39b5e0]"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/skincare" 
            className="border-b border-gray-100 pb-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Skincare
          </Link>
          <Link 
            href="/makeup" 
            className="border-b border-gray-100 pb-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Makeup
          </Link>
          <Link 
            href="/categories" 
            className="border-b border-gray-100 pb-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </Link>
          <Link 
            href="/new-launch" 
            className="border-b border-gray-100 pb-2"
            onClick={() => setIsMenuOpen(false)}
          >
            New Launch
          </Link>
          <Link 
            href="/about" 
            className="border-b border-gray-100 pb-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About us
          </Link>
          
          <div className="mt-4 flex items-center gap-4">
             <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full w-full justify-center">
                <Search className="w-5 h-5" />
                <span>Search</span>
             </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
