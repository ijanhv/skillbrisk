import React from 'react'
import { TfiReload } from 'react-icons/tfi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import Link from 'next/link'

const GigOrder = ({ data }) => {
  console.log('gigorder', data);
  return (
    <div className="w-full bg-white border p-4 flex flex-col gap-4 items-start justify-start rounded">
      <div className="flex items-center justify-between gap-2 w-full">
        <h2 className="text-gray-800 text-sm font-bold">    
        {data?.title}
        </h2>
        <p className="text-base font-normal">$ {data?.price}</p>
      </div>
      <p className="text-sm font-medium text-darkColor">
        {data?.desc}   
    </p>
      <div className="flex items-center justify-between gap-2 w-full">
        <div className="flex items-center justify-start gap-2 text-sm text-darkColor font-semibold">
          <AiOutlineClockCircle />
          <span>{data?.deliveryTime} Days Delivery</span>
        </div>
        <div className="flex items-center justify-start gap-2 text-sm text-darkColor font-semibold">
          <TfiReload />
          <span>{data?.revisionNumber} Revisions</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-start justify-start w-full">
        {data?.features.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-start gap-2 text-sm text-darkColor/70 font-semibold"
          >
            <BsCheckLg className="text-primary" />
            <span>{item}</span>
          </div>
        ))}
        <div
            className="flex items-center justify-start gap-2 text-sm text-darkColor/70 font-semibold"
          >
            <BsCheckLg className="text-primary" />
            <span>  
                100% Satisfaction
                
            </span>
          </div>
      </div>
      <Link href={`/pay/${data?._id}`} className="w-full">
        <button className="w-full h-10 rounded bg-primary/95 text-white hover:bg-primary outline-none">
          Continue
        </button>
      </Link>
    </div>
  )
}

export default GigOrder