import Image from 'next/image'
import React from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'
import { BsStarFill } from 'react-icons/bs'

const Review = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-start justify-start border-t last:border-b last:pb-7 pt-7 ">
    <div className="flex items-start justify-start gap-4">
      <div className="w-10 h-10 border bg-gray-300 rounded-full flex items-center justify-center text-base text-gray-500 uppercase font-semibold">
        <Image
          src="https://pps.whatsapp.net/v/t61.24694-24/315778951_158251616960791_2241025532022843406_n.jpg?ccb=11-4&oh=01_AdQ0qmM5JKr0zGinAAZUYOFjrhIekykBbJd8z19zOXWLAQ&oe=6446C130"
          alt="pp"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="flex items-start justify-start flex-col gap-4">
        <div className="flex items-start justify-start gap-1 flex-col">
          <h2 className="text-darkColor font-bold lowercase">
            John Doe
          </h2>
          <div className="flex items-center justify-start gap-2">
            <span className="text-sm font-medium text-gray-500">
              India
            </span>
          </div>
        </div>
        <p className="flex items-center justify-start gap-1 text-yellow-400 font-semibold">
          4 star
        </p>
        <p className="font-medium max-w-[660px] text-darkColor">
          This is a great service. I will definitely use it again. Thank you
            very much.
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
  )
}

export default Review