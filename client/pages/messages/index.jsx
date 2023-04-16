import Layout from '@/components/Layout/Layout';
import React from 'react'



const tableActions = [
    {
        Buyer: "John Doe",
        LastMessage: "Can you please confirm the delivery date? Thanks!",
        Date: "2023-04-14",
        Action: <button className="bg-green-600 text-white p-1.5 hover:text-gray-300 text-sm ">Mark as Read</button>
    },
    {
        Buyer: "John Doe",
        LastMessage: "Can you please confirm the delivery date? Thanks!",
        Date: "2023-04-14",
        Action: <button className="bg-green-600 text-white p-1.5 hover:text-gray-300 text-sm ">Mark as Read</button>
    },
    {
        Buyer: "John Doe",
        LastMessage: "Can you please confirm the delivery date? Thanks!",
        Date: "2023-04-14",
        Action: <button className="bg-green-600 text-white p-1.5 hover:text-gray-300 text-sm ">Mark as Read</button>
    },
    {
        Buyer: "John Doe",
        LastMessage: "Can you please confirm the delivery date? Thanks!",
        Date: "2023-04-14",
        Action: <button className="bg-green-600 text-white p-1.5 hover:text-gray-300 text-sm ">Mark as Read</button>
    }
    
  ];


const Messages = () => {
  return (
    <Layout>
      <main className="py-40">
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
                {tableActions &&
                  tableActions.map((row, i) => (
                    <tr
                      key={i}
                      className="text-sm leading-5 w-full even:bg-gray-200"
                    >
                    
                      <td className="first:text-left text-sm text-darkColor font-medium text-left py-2">
                        {row.Buyer}
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-left py-2">
                        {row.LastMessage}
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-left py-2">
                        {row.Date}
                      </td>
                      <td className="first:text-left text-sm text-darkColor font-medium text-left py-2">
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
  )
}

export default Messages