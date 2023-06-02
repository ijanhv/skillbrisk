import Layout from "@/components/Layout/Layout";
import newRequest from "@/utils/newRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import moment from "moment";
import Link from "next/link";

const tableActions = [
  {
    Buyer: "John Doe",
    LastMessage: "Can you please confirm the delivery date? Thanks!",
    Date: "2023-04-14",
    Action: (
      <button className="bg-green-600 text-white p-1.5 hover:text-gray-300 text-sm ">
        Mark as Read
      </button>
    ),
  },
  {
    Buyer: "John Doe",
    LastMessage: "Can you please confirm the delivery date? Thanks!",
    Date: "2023-04-14",
    Action: (
      <button className="bg-green-600 text-white p-1.5 hover:text-gray-300 text-sm ">
        Mark as Read
      </button>
    ),
  },
  {
    Buyer: "John Doe",
    LastMessage: "Can you please confirm the delivery date? Thanks!",
    Date: "2023-04-14",
    Action: (
      <button className="bg-green-600 text-white p-1.5 hover:text-gray-300 text-sm ">
        Mark as Read
      </button>
    ),
  },
  {
    Buyer: "John Doe",
    LastMessage: "Can you please confirm the delivery date? Thanks!",
    Date: "2023-04-14",
    Action: (
      <button className="bg-green-600 text-white p-1.5 hover:text-gray-300 text-sm ">
        Mark as Read
      </button>
    ),
  },
];

const Messages = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get("/conversations").then((res) => {
        return res.data;
      }),
  });

  let currentUser = null;
  if (typeof window !== "undefined") {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries("conversations");
    },
  });


  const handleRead = (id) => {
    mutation.mutate(id);
  }

  return (
    <Layout>
      <main className="py-40">
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "Error"
        ) : (
          <div className="contain">
            <div className="w-full flex flex-col items-start gap-5 justify-start">
              <div className="flex items-center justify-between w-full gap-2">
                <h2 className="text-2xl font-bold">Messages</h2>
              </div>

              <table className="w-full">
                <thead className="h-[35px]">
                  <tr>
                    <th className="text-left text-gray-700 text-sm font-semibold leading-[18px] pb-2">
                      Buyer
                    </th>
                    <th className="text-left text-gray-700 text-sm font-semibold leading-[18px] pb-2">
                      Last Message
                    </th>
                    <th className="text-left text-gray-700 text-sm font-semibold leading-[18px] pb-2">
                      Date
                    </th>

                    <th className="text-left text-gray-700 text-sm font-semibold leading-[18px] pb-2">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {data?.map((row, i) => (
                    <tr
                      key={i}
                      className={`text-sm leading-5 w-full ${
                        (currentUser.isSeller && !row.readBySeller) ||
                        (!currentUser.isSeller && !row.readByBuyer)
                          ? "bg-green-50"
                          : "even:bg-gray-200 "
                      }  py-4`}
                    >
                      <td className="first:text-left text-sm text-darkColor font-medium text-left py-2">
                        {currentUser.isSeller ? row.buyerId : row.sellerId}
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-left py-2">
                        <Link href={`/messages/${row.id}`}>{row.lastMessage?.substring(0, 50)}...</Link>
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-left py-2">
                        {moment(row.updateAt).fromNow()}
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-left py-2">
                        {((currentUser.isSeller && !row.readBySeller) ||
                          (!currentUser.isSeller && !row.readByBuyer)) && (
                          <button onClick={() => handleRead(row.id)} className="bg-green-600 text-white p-1.5 hover:text-gray-300 text-sm ">
                            Mark as Read
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default Messages;
