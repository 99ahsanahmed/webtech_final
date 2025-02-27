export default function Sidebar() {
  const subjects = ["Biology", "Chemistry", "Physics", "Logical Reasoning", "English"];

  return (
    <div className="w-64 p-4 border-r bg-white shadow-md h-screen">
      <h2 className="text-2xl font-bold text-red-600 text-left">Welcome</h2>
      <h3 className="text-lg font-semibold text-red-500 mt-4 text-left">Filters</h3>
      <div className="mt-3">
        <h4 className="text-gray-800 text-left">Subject</h4>
        <ul className="mt-2 space-y-2">
          {subjects.map((subject, index) => (
            <li key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={subject}
                className="w-4 h-4 text-red-500 border-red-500 focus:ring-red-500"
              />
              <label htmlFor={subject} className="text-gray-800 font-semibold">
                {subject}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}