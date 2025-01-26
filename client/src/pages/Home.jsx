import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Spotlight } from "../components/Spotlight";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="mx-auto">
      <Spotlight />
      <div className="flex flex-col gap-6 p-28 px-3 lg:px-40 max-w-7xl mx-auto ">
        <h1 className="text-3xl font-bold mx-auto lg:text-6xl tracking-tighter">
          Top Blogs
        </h1>
        <div className="flex flex-wrap mx-auto gap-4">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
        <Link
          to="/search"
          className="text-xs sm:text-sm mx-auto text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3">
        <CallToAction />
      </div>
    </div>
  );
}
