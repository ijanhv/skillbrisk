import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTrash } from "react-icons/bs";


const columns = ["Image", "Title", "Price", "Sales", "Action"];

const tableActions = [
  {
    Image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    Title: "Product 1",
    Price: "$19.99",
    Sales: "100",
    Action: <button className="text-red-600 font-bold"><BsTrash /></button>,
  },
  {
    Image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    Title: "Product 2",
    Price: "$29.99",
    Sales: "50",
    Action: <button className="text-red-600 font-bold"><BsTrash /></button>,
  },
  {
    Image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    Title: "Product 3",
    Price: "$9.99",
    Sales: "200",
    Action: <button className="text-red-600 font-bold"><BsTrash /></button>,
  },
  {
    Image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    Title: "Product 3",
    Price: "$9.99",
    Sales: "200",
    Action: <button className="text-red-600 font-bold"><BsTrash /></button>,
  },
];

const MyGigs = () => {
  return (
    <Layout>
      <main className="py-40">
        <div className="contain">
          <div className="w-full flex flex-col items-start gap-5 justify-start">
            <div className="flex items-center justify-between w-full gap-2">
              <h2 className="text-2xl font-bold">Gigs</h2>
              <Link href="/add">
                <button className="bg-primary/80 py-3 px-2 text-white outline-none rounded-md text-sm hover:bg-primary w-fit transition-all duration-300">
                  Add New Gig
                </button>
              </Link>
            </div>

            <table className="w-full">
              <thead className="h-[35px]">
                <tr>
                  {columns &&
                    columns.map((head, i) => (
                      <th
                        key={i}
                        className="text-left text-gray-700 text-sm font-semibold leading-[18px] pb-2"
                      >
                        {head.header}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody className="w-full">
                {tableActions &&
                  tableActions.map((row, i) => (
                    <tr
                      key={i}
                      className="text-sm leading-5 w-full even:bg-gray-200"
                    >
                      <td className="first:text-left text-sm text-darkColor font-medium text-center py-2">
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

export default MyGigs;
