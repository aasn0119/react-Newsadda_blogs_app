import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "../Components/Spinner";

const Blogs = () => {
  // Consume
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[500px] py-3 flex flex-col gap-y-6 mt-16 mb-16">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No posts Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-sm ">{post.title} </p>
            <p className="text-[12px]">
              by <span className="italic">{post.author} </span> on{" "}
              <span className="font-bold underline">{post.category} </span>
            </p>
            <p className="text-[12px]">
              Posted on <span>{post.date} </span>
            </p>
            <p className="text-xs my-2">{post.content} </p>
            <div className="flex gap-x-1">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-blue-500 underline font-bold text-[8px] "
                  >
                    {`#${tag}`}{" "}
                  </span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
