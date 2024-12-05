"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        <ChevronDown />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
          <ul className="text-black py-1">
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/" className="block w-full h-full">
                Home
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/board" className="block w-full h-full">
                Project Board
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/contact" className="block w-full h-full">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
