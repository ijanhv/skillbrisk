import newRequest from "@/utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import avatar from "@/assets/users.png";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <div className="w-full flex flex-col gap-4 items-start justify-start border-t last:border-b last:pb-7 pt-7 ">
      <div className="flex items-start justify-start gap-4">
        <div className="w-10 h-10 border bg-gray-300 rounded-full flex items-center justify-center text-base text-gray-500 uppercase font-semibold">
          <Image
            height={40}
            width={40}
            src={data?.img || avatar}
            alt="pp"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex items-start justify-start flex-col gap-4">
          <div className="flex items-start justify-start gap-1 flex-col">
            <h2 className="text-darkColor font-bold lowercase">{data?.username}</h2>
            <div className="flex items-center justify-start gap-2">
              <span className="text-sm font-medium text-gray-500">{data?.country}</span>
            </div>
          </div>
          <div className="flex gap-2">
          {Array(review.star)
            .fill()
            .map((item, i) => (
              <p key={i} className="flex gap-1 text-yellow-400 font-semibold">
                <BsStarFill />
              </p>
            ))}
          {review?.star}
          </div>
          <p className="font-medium max-w-[660px] text-darkColor">
            {review?.desc}
          </p>
          <div className="flex items-center justify-start gap-2">
            <p className="font-semibold text-sm text-gray-900">Helpful?</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-start gap-2 cursor-pointer text-sm font-semibold">
                <span className="text-gray-500">
                  <BiLike />
                </span>
                <span>Yes</span>
              </div>
              <div className="flex items-center justify-start gap-2 cursor-pointer text-sm font-semibold">
                <span className="text-gray-500">
                  <BiDislike />
                </span>
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
