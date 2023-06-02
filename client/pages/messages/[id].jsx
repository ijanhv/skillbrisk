import Layout from "@/components/Layout/Layout";
import newRequest from "@/utils/newRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Message = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

 
  console.log(data);
  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  let currentUser = null;
  if (typeof window !== "undefined") {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  const chatdata = [
    {
      _id: "1",
      userId: "1",
      desc: "Hey there, how can I help you today?",
    },
    {
      _id: "2",
      userId: "54321",
      desc: "I'm having trouble with my account, can you assist me?",
    },
    {
      _id: "1",
      userId: "1",
      desc: "Sure, what seems to be the problem?",
    },
    {
      _id: "4",
      userId: "54321",
      desc: "I can't seem to reset my password, the link is not working.",
    },
    {
      _id: "1",
      userId: "1",
      desc: "Let me check on that for you. Can you please provide your email address?",
    },
    {
      _id: "6",
      userId: "23",
      desc: "Sure, it's john.doe@email.com",
    },
    {
      _id: "1",
      userId: "1",
      desc: "Thank you, one moment please...",
    },
    {
      _id: "8",
      userId: "12345",
      desc: "I have just sent a password reset link to your email. Please check your inbox.",
    },
    {
      _id: "1",
      userId: "1",
      desc: "Thanks, I just received it. That worked!",
    },
  ];

  return (
    <Layout>
      <main className="py-40 pb-20">
        <div className="contain">
          <div className="w-full flex items-center justify-center flex-col gap-4">
            <p className="flex items-center gap-2 uppercase justify-start text-sm font-medium text-darkColor/60 w-full md:w-[80%]">
              <Link href="/messages" className="font-semibold text-darkColor">
                MESSAGES
              </Link>{" "}
              <BiChevronRight size={20} />
              <span>Client</span> <BiChevronRight size={20} />
            </p>

            <div className="w-full md:w-[80%] flex items-start justify-start gap-4 flex-col h-[500px]">
              {data?.length === 0 ? (
                <div className="flex items-center justify-center mt-5 flex-col w-full">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4344461-3613889.png"
                    alt="/"
                    className="w-[350px]"
                  />
                  <h2 className="text-4xl text-active font-medium">
                    Start Making a Conversation!
                  </h2>
                </div>
              ) : isLoading ? (
                "Loading..."
              ) : error ? (
                "Error"
              ) : (
                <div className="h-[500px] overflow-auto border p-4 rounded-md flex flex-col gap-4 w-full">
                  {data?.map((item) => (
                    <div
                      key={item._id}
                      className={`flex items-start gap-5 max-w-[600px] ${
                        item.userId === currentUser._id
                          ? "self-end !flex-row-reverse"
                          : ""
                      }`}
                    >
                      <Image
                        width={50}
                        height={50}
                        src={userData?.img}
                        alt="sender_img"
                        className="w-10 h-10 object-cover rounded-full border"
                      />
                      <p
                        className={`text-sm p-4 rounded-2xl ${
                          item.userId === currentUser._id
                            ? "bg-blue-500 rounded-tr-[0] text-white"
                            : "bg-gray-200 rounded-tl-[0]"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* {isLoading ? (
              <div className="flex items-center justify-center w-full">
                <img src={loader} alt="/" className="w-[40px]" />
              </div>
            ) : error ? (
              <p className="text-2xl text-red-400 font-normal">
                Error : Something went wrong
              </p>
            ) : (
              <>
                {data?.length === 0 ? (
                  <div className="flex items-center justify-center mt-5 flex-col w-full">
                    <img
                      src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4344461-3613889.png"
                      alt="/"
                      className="w-[350px]"
                    />
                    <h2 className="text-4xl text-active font-medium">
                      Start Making a Conversation!
                    </h2>
                  </div>
                ) : (
                  <div className="h-[500px] overflow-auto border p-4 rounded-md flex flex-col gap-4 w-full">
                    {data.map((item) => (
                      <div
                        key={item._id}
                        className={`flex items-start gap-5 max-w-[600px] ${
                          item.userId === authUser._id
                            ? "self-end !flex-row-reverse"
                            : ""
                        }`}
                      >
                        <img
                          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/c51dbf5c160dac9bd067442911e65d16-1626181910196/Miscellaneous_2x.png"
                          alt="sender_img"
                          className="w-10 h-10 object-cover rounded-full border"
                        />
                        <p
                          className={`text-sm p-4 rounded-2xl ${
                            item.userId === authUser._id
                              ? "bg-blue-500 rounded-tr-[0] text-white"
                              : "bg-gray-200 rounded-tl-[0]"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )} */}
              <form
                onSubmit={handleSubmit}
                className="flex items-end w-full md:gap-8 flex-col md:flex-row gap-2"
              >
                <textarea
                  name="desc"
                  placeholder="Reply a message"
                  cols="30"
                  rows="10"
                  className="border h-[100px] w-full md:w-[80%] rounded-md resize-none p-2 text-sm font-medium focus:border-primary outline-none" // {
                  // ${
                  //   errors.desc && touched.desc ? "border-red-500" : ""
                  // }`
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary/80 hover:bg-primary text-white w-fit py-3 px-6 text-sm rounded"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Message;
