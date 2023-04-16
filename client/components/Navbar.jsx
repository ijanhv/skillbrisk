import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Login from "./Forms/Login";
import { useRouter } from 'next/router'
import MobileSidebar from "./MobileSidebar";
import { FaBars } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showSecondNavbar, setShowSecondNavbar] = useState(false)
  const [active, setActive] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const modalRef = useRef(null);
  const router = useRouter()
  const { pathname } = router
  
  const links = [
    "Graphics & Design",
    "Digital Marketing",
    "Writing & Translation",
    "Video & Animation",
    "Music & Audio",
    "Programming & Tech",
    "Business",
    "Lifestyle",
    "AI Services",
  ];


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };




  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenDrop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const backgroundChange = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
    };
    window.addEventListener("scroll", backgroundChange);
    return () => {
      window.removeEventListener("scroll", backgroundChange);
    };
  }, []);

  const slideRight = () => {
    let slider = document.getElementById("navSlider");
    let maxScrollLeft = slider.scrollWidth - slider.clientWidth; // maximum scroll position
    if (slider.scrollLeft < maxScrollLeft) {
      // check if not at the end
      slider.scrollLeft = slider.scrollLeft + 400;
    } else {
      // if at end, wrap to beginning
      slider.scrollLeft = 0;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setNavBackground(" text-black bg-white");
        setShowSecondNavbar(true);

      } else {
        setNavBackground("text-white transparent");
        setShowSecondNavbar(false);
      }
    };


    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const authUser = {
  //   id: 1,
  //   username: "John doe",
  //   isSeller: true,
  //   img: "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
  // }

  const authUser = null


  return (
  
    <header
      className={`flex items-center justify-center w-full flex-col text-white fixed top-0 transition-all ease-in-out z-20 ${
        active || pathname !== "/" ? "bg-white !text-darkColor" : ""
      }`}
    >
      <div className="contain">
        <div className="w-full flex items-center justify-between py-4 relative">
          {/* <MobileSidebar
            show={showLink}
            setShow={setShowLink}
            setLoginModal={setLoginModal}
          /> */}
          <div className="flex items-center gap-2 h-full justify-between w-[50%] sm:w-fit">
            <span onClick={() => setShowLink(true)} className="lg:hidden mt-1">
              <FaBars size={25} />
            </span>
            <Link
              href="/"
              className="text-4xl select-none font-black tracking-tighter"
            >
              <span className="tracking-wide">skillbrisk</span>
              <span className="text-primary">.</span>
            </Link>
          </div>
          <nav className="flex items-center justify-end gap-7 font-medium text-base">
            <Link href="/" className="cursor-pointer hidden lg:flex">
              SkillBrisk Business
            </Link>
            <div className="cursor-pointer hidden lg:flex">Explore</div>
            <div className="items-center gap-2 cursor-pointer hidden lg:flex">
              <span>
                <TfiWorld />
              </span>
              English
            </div>
            <span className="hidden lg:flex items-center gap-2 cursor-pointer">
              <span>
                <BsCurrencyDollar />
              </span>
              USD
            </span>
            {!authUser?.isSeller && (
              <p className="cursor-pointer hidden lg:flex">Become a Seller</p>
            )}
            {authUser ? (
              <>
                {authUser && (
                  <div
                    className="relative flex flex-col sm:flex-row items-center sm:gap-4 cursor-pointer"
                    onClick={() => setOpenDrop((prev) => !prev)}
                  >
                    <Image
                      src={authUser.img}
                      alt="user_image"
                      className="w-[32px] h-[32px] rounded-[50%] object-cover"
                    />
                    <span>{authUser?.username}</span>
                    <div
                      ref={modalRef}
                      className={`absolute top-12 right-0 p-3 z-10 bg-white border rounded-md text-black flex-col items-start gap-3 w-[200px] font-medium transition-transform duration-300 ${
                        openDrop ? "flex" : "hidden"
                      }`}
                    >
                      {authUser?.isSeller && (
                        <>
                          <Link
                            href="/mygigs"
                            className="cursor-pointer w-full text-sm text-darkColor"
                          >
                            Gigs
                          </Link>
                          <Link
                            href="/addgig"
                            className="cursor-pointer w-full text-sm text-darkColor"
                          >
                            Add New Gigs
                          </Link>
                        </>
                      )}
                      <Link
                        href="/orders"
                        className="cursor-pointer w-full text-sm text-darkColor"
                      >
                        Orders
                      </Link>
                      <Link
                        href="/messages"
                        className="cursor-pointer w-full text-sm text-darkColor"
                      >
                        Messages
                      </Link>
                      <div
                        // onClick={handleLogout}
                        className="cursor-pointer w-full text-sm text-darkColor"
                      >
                        Logout
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div
                  onClick={() => {
                    setLoginModal(true);
                  }}
                  className="cursor-pointer hidden sm:flex"
                >
                  Sign in
                </div>
                <Link
                  href="/join"
                  className={`border py-2 px-5 rounded hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-sm font-semibold ${
                    active ? "text-primary border-primary" : ""
                  }`}
                >
                  Join
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
      <div
        className={`w-full transition-all duration-300 border-b ${
          active || pathname !== "/" ? "flex" : "hidden"
        }`}
      >
        <hr className="border-black" />
        <div className="contain relative">
          <div
            id={"navSlider"}
            className={`w-full inline-block h-full whitespace-nowrap scroll-smooth lg:flex items-center lg:justify-between py-3 overflow-x-auto gap-5 font-medium scrollbar-hide text-sm relative ${
              active || pathname !== "/" ? "!text-gray-500" : "text-gray-200"
            }`}
          >
            {links.map((item, i) => (
              <span
                key={i}
                className="hover:border-b-2 cursor-pointer transition-[border] h-8 scrollbar-hide border-primary mx-4 first:ml-0 lg:mx-0"
              >
                {item}
              </span>
            ))}
          </div>
          <span
            onClick={slideRight}
            className="absolute z-10 top-3 -right-8 cursor-pointer laptop:hidden"
          >
            <FiChevronRight size={20} />
          </span>
        </div>
      </div>
      <Login show={loginModal} setShow={setLoginModal} />
    </header>
  );
};

export default Navbar;