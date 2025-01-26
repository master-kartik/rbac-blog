import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="group shadow-lg z-50 relative w-full border border-gray-100 h-[400px] overflow-hidden rounded-2xl sm:w-[430px]">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[260px] w-full  object-cover"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2  drop-shadow-2xl">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className="z-10 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500  hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
