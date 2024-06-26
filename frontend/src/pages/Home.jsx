import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import { Spinner } from "flowbite-react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    setLoading(true);
    const res = await fetch("/backend/post/getposts");
    if (!res.ok) {
      setLoading(false);
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts(data.posts);
      setPosts((prev) => prev.filter((post) => post.isPrivate !== true));
      setLoading(false);
    }
  };
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  return (
    <>
      <div className="w-full min-h-screen bg-banner-bg bg-center bg-no-repeat bg-cover text-white font font-semibold">
        <div className="flex items-center justify-center">
          <div className="max-w-2xl mx-auto p-3 text-center">
            <motion.h1
              initial={{ y: -300, scale: 0.5 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 1, delay: .5 }}
              className="text-3xl font font-semibold text-center my-7"
            >
              A little about this Blog
            </motion.h1>
            <div className="text-2xl flex flex-col gap-6">
              <motion.p
                initial={{ y: -300, scale: 0.5 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 1  }}
              >
                This is Dan Simonson's Website displaying his personal blog
                site. Dedicated to things he has learned along the way. From
                insights to perplexing problems, blogs cover the intracacies of
                Full Stack Javascript development.
              </motion.p>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 mb-10"></h1>
        <div className="p-7 flex flex-wrap gap-5 justify-center">
          {!loading && posts.length === 0 && (
            <p className="text-xl text-gray-500">No posts found.</p>
          )}
          {loading && <p className="text-xl text-gray-500">Loading...</p>}
          {!loading &&
            posts &&
            posts.map((post, i) => (
              <motion.div
                key={post._id}
                initial={{
                  opacity: 0,
                  translateX: i % 2 === 0 ? -50 : 50,
                  translateY: -50,
                }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.5, delay: i * 0.4 }}
              >
                <PostCard key={post._id} post={post} />{" "}
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
}
