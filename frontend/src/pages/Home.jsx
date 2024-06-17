import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  console.log("posts: ", posts);
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
      setPosts((prev) => prev.filter((post) => post.isPrivate !== true))
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 ">
        Posts results:
      </h1>
      <div className="p-7 flex flex-wrap gap-4">
        {!loading && posts.length === 0 && (
          <p className="text-xl text-gray-500">No posts found.</p>
        )}
        {loading && <p className="text-xl text-gray-500">Loading...</p>}
        {!loading &&
          posts &&
          posts.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  );
}
