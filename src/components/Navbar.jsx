import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 px-8 shadow-sm bg-white">
      {/* Logo */}
      <div className="text-xl font-bold flex items-center">
        <img src="/images/premed.svg" alt="" className="w-24" />
  
      </div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 items-center text-gray-800">
        <div className="relative cursor-pointer flex items-center" onClick={() => setIsOpen(!isOpen)}>
          Products <ChevronDown size={16} className="ml-1" />
        </div>
        <Link to="/">
        <div className="relative cursor-pointer flex items-center">
          Courses <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full ml-1">NEW!</span>
        </div>
        </Link>
        <div className="cursor-pointer">Dashboard</div>
        <div className="relative cursor-pointer flex items-center">
          Pricing <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full ml-1">SALE!</span>
        </div>
        <div className="relative cursor-pointer flex items-center">
          About Us <ChevronDown size={16} className="ml-1" />
        </div>
      </div>
      
      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50">
          Try Features
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Login/Create Account
        </button>
      </div>
    </nav>
  );
}
