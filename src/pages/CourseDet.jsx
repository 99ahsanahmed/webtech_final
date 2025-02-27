import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const courses = {
  "private-universities": {
    title: "Private Universities Course",
    description: "Prepare for AKU, Ziauddin, Shifa entrance exams...",
    startDate: "1 March 2025",
    endDate: "30 September 2025",
    details: [
      { title: "24/7 Support", description: "Always available", icon: "https://premedpk-cdn.sgp1.digitaloceanspaces.com/courseFeatureicon/f0be7a43-41d9-41f0-a7e3-0ecb78d39f00.png" },
      { title: "Weekly Tests", description: "Regular practice tests", icon: "https://premedpk-cdn.sgp1.digitaloceanspaces.com/courseFeatureicon/f09ccd63-731c-41ad-b871-0defbcccf255.jpeg" },
      { title: "WhatsApp Guidance Groups", description: "MDCAT Course", icon: "https://premedpk-cdn.sgp1.digitaloceanspaces.com/courseFeatureicon/cf8c1d33-4b58-456b-b46d-637f5f4a80ae.jpeg" },
      { title: "Guidance from Mentors", description: "1-on-1 meetings, personalized schedules", icon: "https://premedpk-cdn.sgp1.digitaloceanspaces.com/courseFeatureicon/b5f24246-0cd1-4cef-b1f8-1e95e7b60e3a.png" },
      { title: "Recorded Lectures", description: "Access anytime", icon: "https://premedpk-cdn.sgp1.digitaloceanspaces.com/courseFeatureicon/ee8a8871-5fbf-4953-9c08-af0b0e24d838.png" },
      { title: "Chapter-Wise Notes", description: "Comprehensive study material", icon: "https://premedpk-cdn.sgp1.digitaloceanspaces.com/courseFeatureicon/9c2e4a7d-99be-46aa-8448-b02815df7c2c.png" },
    ],
    price: "55,000 PKR",
    discount: "45,000 PKR"
  },
  "ibtida-mdcat": {
    title: "IBTIDA MDCAT (8 MONTHS)",
    description: "🌟 Ibtida MDCAT 2025 is an 8-month comprehensive course designed to prepare you thoroughly for the challenging MDCAT examination. With expert faculty and proven study materials, we help you build a strong foundation for medical entrance exams.",
    startDate: "15 January 2025",
    endDate: "25 September 2025",
    details: [
      { title: "Recorded Lectures", description: "Access anytime", icon: "https://premedpk-cdn.sgp1.digitaloceanspaces.com/courseFeatureicon/ee8a8871-5fbf-4953-9c08-af0b0e24d838.png" },
      { title: "Chapter-Wise Notes", description: "Comprehensive study material", icon: "https://premedpk-cdn.sgp1.digitaloceanspaces.com/courseFeatureicon/9c2e4a7d-99be-46aa-8448-b02815df7c2c.png" },
      { title: "Weekly Tests", description: "Regular practice tests", icon: "https://premedpk-cdn.sgp1.digitaloceanspaces.com/courseFeatureicon/f09ccd63-731c-41ad-b871-0defbcccf255.jpeg" },
      { title: "24/7 Support", description: "Always available", icon: "https://premedpk-cdn.sgp1.digitaloceanspaces.com/courseFeatureicon/f0be7a43-41d9-41f0-a7e3-0ecb78d39f00.png" },
      { title: "WhatsApp Guidance Groups", description: "MDCAT Course", icon: "https://premedpk-cdn.sgp1.digitaloceanspaces.com/courseFeatureicon/cf8c1d33-4b58-456b-b46d-637f5f4a80ae.jpeg" },
      { title: "Guidance from Mentors", description: "1-on-1 meetings, personalized schedules", icon: "https://premedpk-cdn.sgp1.digitaloceanspaces.com/courseFeatureicon/b5f24246-0cd1-4cef-b1f8-1e95e7b60e3a.png" },
    ],
    price: "60,000 PKR",
    discount: "50,000 PKR"
  },
};

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const course = courses[courseId];
  const [isRegistered, setIsRegistered] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600 text-xl font-semibold text-center p-8 bg-white rounded-lg shadow-lg">
          <svg className="w-16 h-16 mx-auto text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h2 className="text-2xl mb-2">Course Not Found</h2>
          <p className="text-gray-600">The requested course is not available.</p>
        </div>
      </div>
    );
  }

  const handleRegistration = () => {
    // In a real app, you would handle the registration process here
    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-xl text-red-600 font-semibold mb-2">Registration Successful</p>
          <p className="text-gray-600 mb-6">You have successfully registered for the {course.title}. We're excited to have you on board!</p>
          <div className="space-y-3">
            <Link to="/" className="block w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition duration-300">
              Go to Your Dashboard
            </Link>
            <Link to="/" className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-md transition duration-300">
              View More Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Course Details */}
          <div className="lg:w-2/3 space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-500 p-6">
                <h2 className="text-3xl font-bold text-white">{course.title}</h2>
                <p className="mt-2 text-white/90">{course.description}</p>
              </div>
              
              <div className="p-6 border-t border-gray-100">
                <div className="bg-red-50 p-4 rounded-md flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border border-red-100">
                  <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
                    FULL SESSION COURSE
                  </div>
                  <div className="text-gray-700 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span><strong>Starts:</strong> {course.startDate}</span>
                    </div>
                    <div className="hidden sm:block text-gray-400">|</div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span><strong>Ends:</strong> {course.endDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-500 p-4 text-lg font-semibold text-white">
                Course Features
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {course.details.map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-16 h-16 mb-3 flex items-center justify-center bg-red-50 rounded-full">
                        <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm text-center">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Pricing & Enrollment */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-8">
              <div className="bg-gradient-to-r from-red-600 to-red-500 p-4 text-lg font-semibold text-white">
                Registration
              </div>
              <div className="p-6 space-y-4">
                <div className="text-center">
                  <div className="text-gray-500 line-through text-lg">{course.price}</div>
                  <div className="text-red-600 text-3xl font-bold">{course.discount}</div>
                  <div className="text-gray-600 text-sm">Limited time offer</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Full course access</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Study materials included</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Certificate on completion</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleRegistration}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-md shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
                >
                  <span>Register Now</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
                
                <div className="text-center text-sm text-gray-500">
                  Secure payment options available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

