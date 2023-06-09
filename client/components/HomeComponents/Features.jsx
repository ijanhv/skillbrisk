import { useState, useRef, useEffect, useMemo } from "react";
import { BsCheckCircle, BsPlayFill } from "react-icons/bs";
import { featureData } from "@/assets/data";
import userImg from '../../assets/users.png'
import Image from "next/image";

const Features = () => {
//  const [showVideo, setShowVideo] = useState(false);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (videoRef.current && !videoRef.current.contains(event.target)) {
//         setShowVideo(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     const body = document.querySelector("body");
//     if (showVideo) {
//       body?.style?.overflow = "hidden";
//     } else {
//       body?.style?.overflowY = "auto";
//       body?.style?.overflowX = "hidden";
//     }
//   }, [showVideo]);

//   const handleButtonClick = () => {
//     setShowVideo(true);
//   };

  return (
    <section className="bg-[#f1fdf7] py-14">
      <div className="contain">
        <div className="flex lg:items-center flex-col items-start justify-start lg:flex-row lg:justify-between w-full gap-8 lg:gap-5">
          <div className="flex-1 flex items-start justify-start flex-col gap-5">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-darkColor">
              A whole world of freelance <br /> talent at your fingertips
            </h2>
            <div className="w-full flex items-start justify-start flex-col gap-5">
              {featureData.map((item, i) => (
                <div
                  className="flex items-start justify-start w-full flex-col gap-3"
                  key={i}
                >
                  <div className="flex items-center justify-start gap-3">
                    <span className="text-darkColor">
                      <BsCheckCircle className="sm:w-6 sm:h-6 w-4 h-4" />
                    </span>
                    <h2 className="text-base sm:text-lg font-semibold text-darkColor">
                      {item.title}
                    </h2>
                  </div>
                  <p className="w-full lg:max-w-[450px] text-sm sm:text-base font-medium text-gray-500">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full relative" 
            // onClick={handleButtonClick}
            >
              <Image src={userImg} alt="features_image" className="w-full" />
              <span className="absolute top-0 w-full h-full flex items-center justify-center text-white">
                {/* <span className="bg-black/50 rounded-full flex items-center w-[60px] h-[60px] justify-center cursor-pointer">
                  <BsPlayFill size={59} />
                </span> */}
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;