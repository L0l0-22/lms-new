import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import MyCourses from "../Components/Dashboard/MyCourses";
import CourseForTeacher from "../Components/Dashboard/CourseForTeacher";
import Archived from "../Components/Dashboard/Archived";
import Profile from "../Components/Dashboard/Profile";
import Wishlists from "../Components/Dashboard/Wishlists";
import CategoryPage from "../pages/CategoryPage";
import SearchPage from "../pages/SearchPage";
import CheckoutPage from "../pages/CheckoutPage";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import UploadCoursePage from "../pages/UploadCoursePage";
import ForgetPage from "../pages/ForgetPage";
import Verify from "../pages/Verify";
import TeacherDashPage from "../pages/TeacherDashPage";
import Quiz from "../pages/Quiz";

const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgetpassword" element={<ForgetPage />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/softwareengineer" element={<CategoryPage />} />
      <Route path="/searchresult" element={<SearchPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/coursedetails" element={<CourseDetails />} />
      <Route path="/shoppingcart" element={<ShoppingCartPage />} />
      <Route path="/uploadCourse" element={<UploadCoursePage />} />
      <Route path="/teacherdashboard" element={<TeacherDashPage />}>
      </Route>
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/dashboard" element={<Dashboard />}>
          <Route path="courses" element={<MyCourses />} />
          <Route path="coursesForTeacher" element={<CourseForTeacher/>} />
          <Route path="wishlist" element={<Wishlists />} />
          <Route path="archived" element={<Archived />} />
          <Route path="profile" element={<Profile />} />
        </Route>
    </Routes>
  );
};

export default AppRoutes;


