import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "flowbite-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import AdminPrivateRoute from "./pages/AdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostList from "./pages/PostList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import BlogHeader from "./components/BlogHeader";
import PostPage from "./pages/PostPage";
export default function App() {
  return (
    <BrowserRouter>
      <BlogHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<AdminPrivateRoute />}>
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/updatepost/:postId" element={<UpdatePost />} />
          <Route path="/postlist" element={<PostList />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/postpage/:postSlug" element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
