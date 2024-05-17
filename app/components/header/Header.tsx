"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "../images/logo";
//import Navigation from "./Navigation";
import { LanguageSelector } from "./LanguageSelector";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-md py-4 sticky top-0 z-10 backdrop-blur-md">
      <div className="mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="text-lg font-semibold whitespace-nowrap">
          <Link
            href="/"
            className="text-gray-800 hover:text-gray-600 transition-colors flex items-center"
          >
            <Logo
              height="50px"
              width="50px"
            />
            Stoic Drops
          </Link>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="logo"
            >
              <path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/*   <Navigation isMenuOpen={isMenuOpen} /> */}
        <LanguageSelector />
      </div>
    </header>
  );
};

export { Header };
