import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner"; // Assuming Spinner component is imported

const Blogs = () => {
  // Context Consume krne ke baad
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[670px] py-8 flex flex-col mt-[65px] gap-y-4 bottom-[75px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <p className="font-bold text-lg ">{post.title}</p>
              <p className="text-sm mt-[4px]">
                By <span className="italic">{post.author}</span> on{" "}
                <span className="underline font-bold">{post.category}</span>
              </p>
              <p className="text-sm mt-[4px]">Posted on {post.date}</p>
              <p className="text-md  mt-[10px]">{post.content}</p>
              <div className="flex gap-x-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-blue-700 font-bold underline text-[8px] mt-[5px]"
                  >{`#${tag}`}</span>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Blogs;
