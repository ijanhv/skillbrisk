import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Link from "next/link";
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
    Action: <button className="bg-blue-600 rounded-full text-white p-1 hover:text-gray-300 text-xl font-bold"><MdMail /></button>,
  },
  {
    Image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    Title: "Product 2",
    Price: "$29.99",
    Sales: "50",
    Action: <button className="bg-blue-600 rounded-full text-white p-1 hover:text-gray-300 text-xl font-bold"><MdMail /></button>,
  },
  {
    Image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    Title: "Product 3",
    Price: "$9.99",
    Sales: "200",
    Action: <button className="bg-blue-600 rounded-full text-white p-1 hover:text-gray-300 text-xl font-bold"><MdMail /></button>,
  },
  {
    Image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    Title: "Product 3",
    Price: "$9.99",
    Sales: "200",
    Action: <button className="bg-blue-600 rounded-full text-white p-1 hover:text-gray-300 text-xl font-bold"><MdMail /></button>,
  },
];

const MyOrders = () => {

    const currentUser = {
      name: 'John Doe',
      id: '123',
      isSeller: true
    }


  return (
    <Layout>
      <main className="py-40">
        <div className="contain">
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
                    {currentUser?.isSeller ? 'Buyer' : 'Seller'}
                  </th>
                  <th className="text-center text-gray-700 text-sm font-semibold leading-[18px] pb-2">
                    Contact
                  </th>

                </tr>
              </thead>
              <tbody className="w-full">
                {tableActions &&
                  tableActions.map((row, i) => (
                    <tr
                      key={i}
                      className="text-sm leading-5 w-full even:bg-gray-200"
                    >
                      <td className="first:text-left text-sm text-darkColor font-medium items-center py-2">
                        <Image src={row.Image} alt={row.Title} className="w-10"/>
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-center py-2">
                        {row.Title}
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-center py-2">
                        {row.Price}
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-center py-2">
                        {row.Sales}
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-center py-2">
                        {row.Action}
                      </td>
                    </tr>
                  ))}

                
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default MyOrders;
