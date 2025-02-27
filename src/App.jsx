import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Mainpage from './pages/Mainpage';
import CourseDetail from './pages/CourseDet';
function App() {
  return (
      <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
