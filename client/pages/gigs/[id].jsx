import Layout from "@/components/Layout/Layout";
import React from "react";
import GigOrder from "@/components/SingleGig/GigOrder";
import GigDetails from "@/components/SingleGig/GigDetails";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import newRequest from "@/utils/newRequest";
import oops from "@/assets/oops.webp";
import Image from "next/image";

const GigInfo = () => {
  const router = useRouter();
  const gigId = router.query.id;
  console.log(gigId);

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: userData,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${data.userId}`).then((res) => {
        return res.data;
      }),
      enabled: !!userId
  });

  console.log(userData);

  return (
    <Layout>
      <main className="py-40 pb-10 contain">
        <div className="w-full flex items-start justify-between gap-6 flex-col lg:flex-row">
          <div className="w-full lg:w-[70%]">
            {isLoading ? (
              <>
              <div className="justify-center">
             <Image className=" "
             width={350}
             height={350}
             src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif"
             />
             </div>
             </>
            ) : error ? (
              <Image width={500} height={500} src={oops} />
            ) : (
              <GigDetails data={data} userData={userData} />
            )}
          </div>
          <div className="w-full lg:w-[30%]">
            <GigOrder data={data} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default GigInfo;
