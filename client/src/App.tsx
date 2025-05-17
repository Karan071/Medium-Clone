import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import LandingPage from "./pages/Landing";
import Blogs from "./pages/Blogs"
import Publish from "./pages/Publish"

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/publish" element={<Publish/>}/>
      </Routes>
  );
}