import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Course2 from "./pages/Course2";
import Course from "./pages/Course";
import SinglePost from "./pages/SinglePost";
import Event from "./pages/Event";


export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course2" element={<Course2 />} />
        <Route path="/sinlepost" element={<SinglePost />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
