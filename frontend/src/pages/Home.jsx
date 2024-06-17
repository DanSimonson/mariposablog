import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import { Spinner } from "flowbite-react";
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
    <div className="w-full min-h-screen">
      <div className="flex items-center justify-center">
        <div className="max-w-2xl mx-auto p-3 text-center">
          <h1 className="text-3xl font font-semibold text-center my-7">
            A little about this Blog
          </h1>
          <div className="text-2xl text-gray-500 flex flex-col gap-6">
            <p>
              This is Dan Simonson's Website displaying his personal blog site.
              Dedicated to things he has learned along the way. From insights to
              perplexing problems, blogs cover the intracacies of Full Stack
              Javascript development.
            </p>
          </div>
        </div>
      </div>
       <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 mb-10">
        
      </h1>
      <div className="p-7 flex flex-wrap gap-5">
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
