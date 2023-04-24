import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillHeartFill, BsStarFill } from 'react-icons/bs'


const GigCard = ({ item }) => {
  return (
    <Link
      href="/gigs/123"
      className="w-full shadow-box flex items-start flex-col justify-start border group"
    >
      <Image

        width={320}
        height={240}
        src={item?.img}
        alt={item?.username}
        className="w-full object-cover h-[200px]"
      />
      <div className="w-full bg-white pt-5 flex items-start flex-col gap-3 justify-start">
        <div className="flex items-center justify-start gap-3 px-4">
        <div className="w-8 h-8">
                <Image
                  width={32}
                  height={32}
                  src={item?.img }
                  alt={item?.username}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="flex flex-col items-start justify-start">
                <h2 className="text-sm font-medium">{item?.username}</h2>
                <p className="text-sm font-normal text-gray-400">
                  {item?.isSeller === true ? "Seller" : "Buyer"}
                </p>
              </div>
          {/* {isLoading ? (
            <div className="w-4 h-4">
              <img
                src={loader}
                alt="loading..."
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <>
              <div className="w-8 h-8">
                <img
                  src={data?.img || Avatar}
                  alt={data?.username}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="flex flex-col items-start justify-start">
                <h2 className="text-sm font-medium">{data?.username}</h2>
                <p className="text-sm font-normal text-gray-400">
                  {data?.isSeller === true ? "Seller" : "Buyer"}
                </p>
              </div>
            </>
          )} */}
        </div>
        <p className="text-darkColor text-base group-hover:text-primary transition-all duration-300 px-4">
          {/* {truckcateString(item.desc, 60)} */}
          {item.desc}
        </p>
        <p className="flex items-center justify-start gap-1 text-yellow-400 font-semibold px-4">
          <BsStarFill />
          {!isNaN(item.totalStars / item.starNumber) &&
            Math.round(item.totalStars / item.starNumber)}
        </p>
        <div className="border-t w-full p-5 flex items-center justify-between">
          <span className="text-gray-400 cursor-pointer">
            <BsFillHeartFill size={20} />
          </span>
          <span className="text-sm font-normal text-gray-500">
            started AT{" "}
            <span className="text-xl font-semibold text-darkColor">
              ${item.price}
            </span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default GigCard