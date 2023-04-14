import React from "react";
import Link from "next/link";

const SingleCard = ({ item }) => {
  return (
    <Link
      href={`/gigs?cat=${item.cat}`}
      className="relative inline-block cursor-pointer w-[300px] md:w-[240px] lg:w-[250px] mx-4"
    >
      <img
        src={item.img}
        alt={item.title}
        
        className="w-full h-[320px] block hover:opacity-80 transition-all duration-300 rounded-md "
      />
      <div className="absolute top-4 text-white left-4">
        <p className="text-sm font-normal truncate w-[200px]">{item?.desc}</p>
        <h2 className="text-2xl font-bold tracking-wide truncate w-[200px]">
          {item.title}
        </h2>
      </div>
    </Link>
  );
};

export default SingleCard;