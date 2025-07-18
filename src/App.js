import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import DetailPage from "./Components/Pages/DetailPage";
import ErrorPage from "./Components/Pages/404Page";
import Awardees from "./Components/Pages/Awardees";
import History from "./Components/Pages/History";
import BLogStandard from "./Components/Pages/BLogStandard";
import ContactUs from "./Components/Pages/ContactUs";
import BreadCrumbs from "./Components/Pages/BreadCrumbs";
import EventSingle from "./Components/Pages/EventSingle";
import InstructorDetails from "./Components/Pages/InstructorDetails";
import Events from "./Components/Pages/Events";
import InstructorTwo from "./Components/Pages/InstructorTwo";
import SingleBlog from "./Components/Pages/SingleBlog";
import SingleCourse from "./Components/Pages/SingleCourse";
import Thanks from "./Components/Pages/Thanks";
import "swiper/css";
import "aos/dist/aos.css"
import useLenis from "./hooks/useLenis"; // Import your custom hook
import ScrollToTop from "./hooks/ScrollToTop"; // Import the ScrollToTop component
import Message from "./Components/Pages/Message";


function App() {
  useLenis();
  
  
  return (
    <BrowserRouter>
       <ScrollToTop /> {/* ✅ Must be inside BrowserRouter */}
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
        
         
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/awardees" element={<Awardees />} />
          <Route
            path="/history"
            element={<History />}
          />
          <Route
            path="/events"
            element={<Events />}
          />
          <Route path="/DetailPage" element={<DetailPage />} />
          <Route path="/Awardees/:id" element={<DetailPage />} />
          <Route path="/page/:id" element={<BreadCrumbs />} />

          <Route
            path="/instructor-two"
            element={<InstructorTwo />}
          />
          <Route
            path="/instructor-details"
            element={<InstructorDetails />}
          />
         
          <Route
            path="/event-single"
            element={<EventSingle />}
          />
          <Route path="/error" element={<ErrorPage />} />
         
         
          <Route
            path="/single-course"
            element={<SingleCourse />}
          />
        
         
          <Route
            path="/blog-standard"
            element={<BLogStandard />}
          />
          <Route
            path="/single-blog"
            element={<SingleBlog />}
          />
             <Route
            path="/message"
            element={<Message />}
          />

          <Route
            path="/contacts"
            element={<ContactUs />}
          />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


