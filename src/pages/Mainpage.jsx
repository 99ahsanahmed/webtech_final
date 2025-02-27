

import React, { useState } from "react";
import Course from "../components/Course";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SearchSection from "../components/Main-top";

const Mainpage = () => {
  // State for filtering and searching
  const [showLiveOnly, setShowLiveOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const courses = [
    {
      id: "private-universities",
      title: "Private Universities Course",
      subtitle: "AKU | Ziauddin | Shifa",
      tags: ["AKU", "Ziauddin", "FSC/A level"],
      isLive: true,
      imageSrc: "/images/c1.webp",
    },
    {
      id: "ibtida-mdcat",
      title: "IBTIDA MDCAT (8 MONTHS)",
      subtitle: "Every Journey Starts With A Dream",
      tags: ["MDCAT", "FSC Parallel Prep"],
      isLive: false,
      imageSrc: "/images/premed-c2.webp",
    },
    {
      id: "private-universities-2",
      title: "Private Universities Course",
      subtitle: "AKU | Ziauddin | Shifa",
      tags: ["AKU", "Ziauddin", "FSC/A level"],
      isLive: true,
      imageSrc: "/images/c1.webp",
    },
    {
      id: "ibtida-mdcat-2",
      title: "IBTIDA MDCAT (8 MONTHS)",
      subtitle: "Every Journey Starts With A Dream",
      tags: ["MDCAT", "FSC Parallel Prep"],
      isLive: true,
      imageSrc: "/images/premed-c2.webp",
    },
    {
      id: "private-universities-3",
      title: "Private Universities Course",
      subtitle: "AKU | Ziauddin | Shifa",
      tags: ["AKU", "Ziauddin", "FSC/A level"],
      isLive: true,
      imageSrc: "/images/c1.webp",
    },
    {
      id: "ibtida-mdcat-3",
      title: "IBTIDA MDCAT (8 MONTHS)",
      subtitle: "Every Journey Starts With A Dream",
      tags: ["MDCAT", "FSC Parallel Prep"],
      isLive: true,
      imageSrc: "/images/premed-c2.webp",
    },
    {
      id: "private-universities-4",
      title: "Private Universities Course",
      subtitle: "AKU | Ziauddin | Shifa",
      tags: ["AKU", "Ziauddin", "FSC/A level"],
      isLive: true,
      imageSrc: "/images/c1.webp",
    },
    {
      id: "ibtida-mdcat-4",
      title: "IBTIDA MDCAT (8 MONTHS)",
      subtitle: "Every Journey Starts With A Dream",
      tags: ["MDCAT", "FSC Parallel Prep"],
      isLive: true,
      imageSrc: "/images/premed-c2.webp",
    },
    {
      id: "private-universities-5",
      title: "Private Universities Course",
      subtitle: "AKU | Ziauddin | Shifa",
      tags: ["AKU", "Ziauddin", "FSC/A level"],
      isLive: true,
      imageSrc: "/images/c1.webp",
    },
    {
      id: "ibtida-mdcat-5",
      title: "IBTIDA MDCAT (8 MONTHS)",
      subtitle: "Every Journey Starts With A Dream",
      tags: ["MDCAT", "FSC Parallel Prep"],
      isLive: true,
      imageSrc: "/images/premed-c2.webp",
    },
  ];

  // Filter courses based on live status and search query
  const filteredCourses = courses
    .filter(course => !showLiveOnly || course.isLive)
    .filter(course => {
      if (!searchQuery.trim()) return true;
      
      const query = searchQuery.toLowerCase();
      return (
        course.title.toLowerCase().includes(query) ||
        course.subtitle.toLowerCase().includes(query) ||
        course.tags.some(tag => tag.toLowerCase().includes(query))
      );
    });

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Sidebar and Courses container */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar - Fixed width on desktop, full width on mobile */}
        <div className="w-full md:w-1/4 lg:w-1/5">
          <Sidebar />
        </div>

        {/* Course Cards - Takes remaining space */}
        <div className="w-full md:w-3/4 lg:w-4/5">
          {/* SearchSection with filter and search functionality */}
          <SearchSection 
            showLiveOnly={showLiveOnly}
            setShowLiveOnly={setShowLiveOnly}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          {/* Show filtered courses count */}
          <div className="mb-4 mt-4 text-gray-600 font-medium">
            Showing {filteredCourses.length} {showLiveOnly ? 'live' : ''} courses
            {searchQuery && ` matching "${searchQuery}"`}
          </div>
          
          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <Link to={`/courses/${course.id}`} key={course.id} className="block">
                <Course {...course} />
              </Link>
            ))}
          </div>
          
          {/* No results message */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-10 bg-white rounded-lg shadow-sm mt-4">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700">No courses found</h3>
              <p className="text-gray-500 mt-2">
                {searchQuery 
                  ? `No ${showLiveOnly ? 'live ' : ''}courses match "${searchQuery}"`
                  : "There are currently no live courses available."}
              </p>
              <div className="mt-6 space-y-2">
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                  >
                    Clear search
                  </button>
                )}
                {showLiveOnly && (
                  <button 
                    onClick={() => setShowLiveOnly(false)}
                    className="block mx-auto mt-4 px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors"
                  >
                    View all courses
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;