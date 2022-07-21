import React from "react";

const UserCard = ({ dev, imageUrl, text, name, linkedIn, github }) => {
  return (
    //UserCard
    <aside className="shadow-2xl rounded-3xl w-[60vw] sm:w-[25em] m-0">
      <article className="flex flex-col items-center sm:grid xs:grid-cols-2 pb-4 bg-[#EEEEEE] rounded-3xl">
          <img
            className="my-6 mx-6 w-3/4 sm:w-[25vw] object-cover rounded-[2rem]"
            src={imageUrl}
            alt="CEO"
          />
          <div className="hidden sm:block pb-0 my-4 sm:mx-12 text-center">
            <h1 className="font-['Inder', sans-serif] text-[#1A69B4] font-semibold text-[1em] hover:underline decoration-blue-600">
              <q>{text}</q>
            </h1>
          </div>
          <div className="hidden xs:block text-center pt-0 pb-8 mx-12 uppercase tracking-wider text-2xl text-[#1A69B4] font-semibold">
            {dev}
          </div>
          <div className=" text-center uppercase tracking-wider text-lg text-[#1A69B4] font-semibold">
            {name}
          <figure className="flex justify-center items-center py-2 gap-4">
            <div className="hover:opacity-80 hover:w-[10%]">{linkedIn}</div>
            <div className="hover:opacity-80 hover:w-[14%]">{github}</div>
          </figure>
            
            
          </div>
        </article>
    </aside>
  );
};

export default UserCard;
