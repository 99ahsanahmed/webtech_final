import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function CourseCard({ title, subtitle, tags, isLive, imageSrc }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md bg-white max-w-sm overflow-hidden hover:shadow-2xl">
      <div className="relative">
        <div className="h-40 bg-gray-300 flex items-center justify-center">

          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
        {isLive && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            Live
          </span>
        )}
      </div>
      <div className="p-4 text-left">
        <span className="text-gray-700 font-bold">General</span>
        <h3 className="text-lg font-bold text-gray-800 mt-1">{title}</h3>
        {/* <p className="text-red-500 font-semibold mt-1">{subtitle}</p> */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
