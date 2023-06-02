import Layout from "@/components/Layout/Layout";
import newRequest from "@/utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const tableActions = [
  {
    Image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    Title: "Product 1",
    Price: "$19.99",
    Sales: "100",
    Action: (
      <button className="bg-blue-600 rounded-full text-white p-1 hover:text-gray-300 text-xl font-bold">
        <MdMail />
      </button>
    ),
  },
  {
    Image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    Title: "Product 2",
    Price: "$29.99",
    Sales: "50",
    Action: (
      <button className="bg-blue-600 rounded-full text-white p-1 hover:text-gray-300 text-xl font-bold">
        <MdMail />
      </button>
    ),
  },
  {
    Image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    Title: "Product 3",
    Price: "$9.99",
    Sales: "200",
    Action: (
      <button className="bg-blue-600 rounded-full text-white p-1 hover:text-gray-300 text-xl font-bold">
        <MdMail />
      </button>
    ),
  },
  {
    Image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    Title: "Product 3",
    Price: "$9.99",
    Sales: "200",
    Action: (
      <button className="bg-blue-600 rounded-full text-white p-1 hover:text-gray-300 text-xl font-bold">
        <MdMail />
      </button>
    ),
  },
];

const MyOrders = () => {
  let currentUser = null;

  if (typeof window !== "undefined") {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get("/orders").then((res) => {
        return res.data;
      }),
  });
  console.log(data);

  const router = useRouter();

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      router.push(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        router.push(`/message/${res.data.id}`);
      }
    }
  }; 
  return (
    <Layout>
      <main className="py-40">
        <div className="contain">
          {isLoading ? (
            "Loading..."
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="w-full flex flex-col items-start gap-5 justify-start">
              <div className="flex items-center justify-between w-full gap-2">
                <h2 className="text-2xl font-bold">Orders</h2>
              </div>

              <table className="w-full">
                <thead className="h-[35px]">
                  <tr>
                    <th className="text-center text-gray-700 text-sm font-semibold leading-[18px] pb-2">
                      Image
                    </th>
                    <th className="text-center text-gray-700 text-sm font-semibold leading-[18px] pb-2">
                      Title
                    </th>
                    <th className="text-center text-gray-700 text-sm font-semibold leading-[18px] pb-2">
                      Price
                    </th>
                    <th className="text-center text-gray-700 text-sm font-semibold leading-[18px] pb-2">
                      {currentUser?.isSeller ? "Buyer" : "Seller"}
                    </th>
                    <th className="text-center text-gray-700 text-sm font-semibold leading-[18px] pb-2">
                      Contact
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {data.map((row, i) => (
                    <tr
                      key={i}
                      className="text-sm leading-5 w-full even:bg-gray-200"
                    >
                      <td className="text-sm text-darkColor font-medium items-center py-2">
                        <Image
                          width={50}
                          height={50}
                          src={row.img}
                          alt={row.title}
                          className="w-10"
                        />
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-center py-2">
                        {row.title}
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-center py-2">
                        {row.price}
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-center py-2">
                        {row.buyerId.substr(0, 10)}...
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-center py-2">
                        <button 
                        onClick={() => handleContact(row)}
                        className="bg-blue-600 rounded-full text-white p-1 hover:text-gray-300 text-xl font-bold">
                          <MdMail />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default MyOrders;
