import Layout from "@/components/Layout/Layout";
import React from "react";
import GigOrder from "@/components/SingleGig/GigOrder";
import GigDetails from "@/components/SingleGig/GigDetails";
import { useRouter } from "next/router";

const GigInfo = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <main className="py-40 pb-10 contain">
        <div className="w-full flex items-start justify-between gap-6 flex-col lg:flex-row">
          <div className="w-full lg:w-[70%]">
            <GigDetails />
          </div>
          <div className="w-full lg:w-[30%]">
            <GigOrder />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default GigInfo;
