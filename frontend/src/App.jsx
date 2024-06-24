import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";
import Home from "./pages/Home";
import AdminPrivateRoute from "./pages/AdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import PostList from "./pages/PostList";
import UpdatePost from "./pages/UpdatePost";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import BlogHeader from "./components/BlogHeader";
import PostPage from "./pages/PostPage";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();

  return (
    <>
      <BlogHeader />
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<AdminPrivateRoute />}>
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/updatepost/:postId" element={<UpdatePost />} />
            <Route path="/postlist" element={<PostList />} />
          </Route>
          <Route path="/postpage/:postSlug" element={<PostPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
