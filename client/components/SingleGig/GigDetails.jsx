import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import Slides from '../Slides/Slides'
import Reviews from '../Reviews/Reviews'
import Image from 'next/image'

const images = [
    "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2022/03/How-To-Build-A-Website-For-Free-3.png",
    "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp",
    "https://www.hostgator.com/blog/wp-content/uploads/2018/03/PopularTypesWebsites.png"
]


const GigDetails = ({ }) => {

  return (
    <div className="w-full flex items-start justify-start gap-3 flex-col">
      <div className="flex items-center justify-start gap-2 text-gray-500 text-sm font-medium">
        <span className="text-active">FIVERR </span>
        <span>
          <BiChevronRight />
        </span>
        <span className="text-active capitalize">
            {/* {data?.cat} */}
        Web Development
        </span>
      </div>
      <h1 className="text-3xl font-bold text-darkColor/90 max-w-[790px]">
        {/* {data?.title} */}
        I will make a professional website for your business
      </h1>
      <div className="flex items-center justify-start gap-3 w-full">
        <div className="flex items-center justify-start gap-3">
          <Image
            width={32}
            height={32}
            src="https://static.wixstatic.com/media/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg/v1/fill/w_640,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg"
            alt="website"
            className="w-8 h-8 border rounded-full"
          />
          <span>
            John Doe
            {/* {userData?.username} */}
        </span>
        </div>
        <div className="flex items-center justify-start gap-1 text-yellow-400 text-lg font-semibold">
            {/* {Array(Math.round(data?.totalStars / data?.starNumber))
              .fill()
              .map((item, i) => (
                <span key={i}>
                  <BsStarFill />
                </span>
              ))} */}
            <span>4</span>
          </div>
        {/* {!isNaN(data?.totalStars / data?.starNumber) && (
          <div className="flex items-center justify-start gap-1 text-yellow-400 text-lg font-semibold">
            {Array(Math.round(data?.totalStars / data?.starNumber))
              .fill()
              .map((item, i) => (
                <span key={i}>
                  <BsStarFill />
                </span>
              ))}
            <span>{Math.round(data?.totalStars / data?.starNumber)}</span>
          </div>
        )} */}
      </div>
      <div className="w-[90%]">
        <Slides rowId="4" distance={700}>
          {images?.map((item, i) => (
            <div
              key={i}
              className="relative inline-block cursor-pointer w-full mx-4 shadow-box bg-gray-200"
            >
              <div className="w-full h-full">
                <Image
                  src={item}
                  alt={item}
                  height={500}
                  width={700}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slides>
      </div>
      <h2 className="text-xl font-semibold text-gray-500">About This Gig</h2>
      <p className="text-base text-gray-700 max-w-[700px] font-normal">
        {/* {data?.desc} */}
        I will make a wesite for your business using the latest technology
      </p>
      <div className="flex flex-col gap-3 mt-5 w-full">
        <h2 className="text-xl font-semibold text-gray-500">
          About The Seller
        </h2>
        <div className="flex items-start justify-start gap-3 w-full">
          <Image
            width={80}
            height={80}
            src="https://help.apple.com/assets/63B87829CE32D578D65A85E4/63B8782ACE32D578D65A85EB/en_US/dbb0631358aad57b8b57484c2a476c7e.png"
            alt=""
            className="w-20 h-20 border rounded-full"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <h4 className="text-base font-bold text-darkColor">
              {/* {userData?.username} */}
             Kevin
            </h4>
            <div className="flex items-center justify-start gap-1 text-yellow-400 text-lg font-semibold">
              {/* {Array(Math.round(data?.totalStars / data?.starNumber))
                .fill()
                .map((item, i) => (
                  <span key={i}>
                    <BsStarFill />
                  </span>
                ))} */}
              <span>5 stars</span>
            </div>
            <button className="outline-none text-sm font-medium hover:bg-gray-400 hover:text-white transition-all duration-300 border border-gray-400 w-fit py-2 px-4 rounded">
              Contact Me
            </button>
          </div>
        </div>
        <div className="border w-full lg:w-[83%] p-5 rounded flex flex-col items-start justify-start gap-5">
          <div className="w-full flex items-start justify-between gap-4">
            <div className="w-[50%] flex flex-col items-start justify-start gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">From</span>
                <h2 className="text-darkColor font-medium">
                  {/* {userData?.country} */}
                  USA
                </h2>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">
                  Avg. response time
                </span>
                <h2 className="text-darkColor font-medium">1 Hour</h2>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">
                  Languages
                </span>
                <h2 className="text-darkColor font-medium">English</h2>
              </div>
            </div>
            <div className="w-[50%] flex flex-col items-start justify-start gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">
                  Member since
                </span>
                <h2 className="text-darkColor font-medium">Mar 2023</h2>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">
                  Last delivery
                </span>
                <h2 className="text-darkColor font-medium">1 day</h2>
              </div>
            </div>
          </div>
          <p className="text-darkColor text-sm font-medium border-t w-full pt-4 pr-4">
            {/* {userData?.desc} */}
            I am a web developer and I have been working in this field for 5 years. I have worked on many projects and I have a lot of experience in this field. I will make a website for your business using the latest technology.

          </p>

        </div>
      </div>
      
      <div className="flex flex-col gap-3 mt-5 w-full">
        <h2 className="text-xl font-semibold text-gray-500">Reviews</h2>
        <Reviews  />
      </div>

    </div>
  )
}

export default GigDetails