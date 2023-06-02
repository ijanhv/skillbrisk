import Layout from "@/components/Layout/Layout";
import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiHomeAlt } from "react-icons/bi";
import { dummyGigs } from "@/assets/data";
import GigCard from "@/components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "@/utils/newRequest";
import { useRouter } from 'next/router';


const Gigs = ({ item }) => {
  // const { search } = useLocation();
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };
  const apply = () => {
    refetch();
  };

  const router = useRouter();
  console.log(router);
  const { pathname, query, asPath } = router;

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest.get(`/gigs?${asPath.split("=")[1]}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then((res) => {
        return res.data;
      }),
  });

  useEffect(() => {
    refetch();
  }, [sort])


  console.log(data);
  return (
    <Layout>
      <main className="py-40">
        <div className="contain">
          <div className="flex items-start justify-start flex-col gap-4">
            <div className="flex items-center justify-start gap-2 sm:gap-4 text-darkColor font-medium">
              <span>
                <BiHomeAlt size={12} />
              </span>
              <span>/</span>
              <span className="text-sm">
                {/* {findData?.shortTitle ? findData?.shortTitle : "Designs"} */}
                Designs
              </span>
              <span>/</span>
              <span className="text-sm">
                {/* {findData?.title ? findData?.title : "Job Title"} */}
                Graphics and Design
              </span>
            </div>
            <h2 className="text-3xl font-bold">Web Development</h2>
            <p className="text-base font-medium">
              Find a freelance Web development expert to build your Web website
            </p>
            <div className="w-full flex md:items-center justify-between flex-col md:flex-row gap-4">
              <div className="flex md:items-center items-start justify-start gap-2 flex-col md:flex-row">
                <p className="text-base font-normal text-gray-500">Budget:</p>
                <div className="flex items-center justify-start gap-2 w-full">
                  <input
                    type="text"
                    ref={minRef}
                    placeholder="min"
                    className="border w-[50%] md:w-[150px] outline-none px-2 h-[40px] rounded-md text-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="max"
                    ref={maxRef}
                    className="border w-[50%] md:w-[150px] outline-none px-2 h-[40px] rounded-md text-gray-500"
                  />
                  <button
                    onClick={apply}
                    className="w-fit bg-primary text-white text-base font-medium py-2 px-7 outline-none rounded-md hover:bg-primary/95"
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-end gap-2">
                <p className="text-base font-normal text-gray-500">Sort by:</p>
                <div className="flex items-center justify-start gap-2 cursor-pointer relative">
                  <div
                    className="flex items-center justify-start gap-2 cursor-pointer relative px-2 h-[40px] rounded-md text-gray-500 border w-[45%] md:w-fit"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    <p className="text-sm w-full">
                      {sort == "sales" ? "Best Selling" : "Newest"}
                    </p>
                    <span
                      className={`${
                        open ? "rotate-180" : "rotate-0"
                      } transition-all duration-300`}
                    >
                      <BiChevronDown size={20} />
                    </span>
                  </div>
                  <div
                    className={`${
                      open ? "flex" : "hidden"
                    } flex-col items-start justify-start bg-white shadow-box rounded-md absolute w-[140px] top-8 right-2`}
                  >
                    {sort === "sales" ? (
                      <div
                        onClick={() => reSort("createdAt")}
                        className="px-4 py-2 w-full border-b text-gray-500 text-sm cursor-pointer"
                      >
                        Newest
                      </div>
                    ) : (
                      <div
                        onClick={() => reSort("sales")}
                        className="px-4 py-2 w-full border-b text-gray-500 text-sm cursor-pointer"
                      >
                        Best Selling
                      </div>
                    )}
                    <span
                      className="px-4 py-2 w-full border-b text-gray-500 text-sm cursor-pointer"
                      onClick={() => reSort("sales")}
                    >
                      Popular
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 tab:grid-cols-3 lg:grid-cols-4 items-start justify-start gap-8">
              {isLoading
                ? "Loading..."
                : error
                ? "Something went wrong!"
                : data?.map((item, i) => (
                    <div key={i}>
                      <GigCard key={item._id} item={item} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Gigs;
