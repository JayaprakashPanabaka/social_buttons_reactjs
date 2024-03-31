import React from "react";

const SocialButtons = () => {
  return (
    <div className="bg-socialButtonsBg h-screen flex flex-col justify-center items-center text-white bg-center bg-cover  bg-no-repeat">
      <h1 className="text-white text-5xl font-serif font-bold my-4">
        Social Buttons
      </h1>
      <div className="flex">
        <button className="bg-[#eab308] mx-3 p-1 w-16 rounded-md">Like</button>
        <button className="bg-[#ffffff] text-black mx-3 p-1 w-24 rounded-md">
          Comment
        </button>
        <button className="bg-[#1d4ed8] mx-3 p-1 w-20 rounded-md">Share</button>
      </div>
    </div>
  );
};

export default SocialButtons;
