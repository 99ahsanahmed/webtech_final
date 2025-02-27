import React from "react";
import { Search } from "lucide-react";

const SearchSection = () => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-gray-50">
      {/* Heading and Buttons */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-6xl font-bold text-red-700">PreMed Courses</h1>
          <p className="text-black font-semibold">Learning made easier</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold">
            All Courses
          </button>
          <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md font-semibold">
            Live Courses
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>
    </div>
  );
};

export default SearchSection;
