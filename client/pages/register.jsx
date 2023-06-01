import Label from "@/components/Label";
import Layout from "@/components/Layout/Layout";
import newRequest from "@/utils/newRequest";
import upload from "@/utils/upload";
import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);

 
  const [ user, setUser ]= useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    })
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.checked,
      };
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = await upload(file);
    console.log('Image url', url);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
        });
        console.log("success");
        router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(file);

  console.log(user);

  return (
    <Layout>
      <div className="py-24 lg:py-40 pb-10">
        <div className="contain">
          <div className="w-full lg:w-[75%] flex items-center flex-col sm:flex-row justify-center py-10 mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex items-start flex-col sm:flex-row justify-start gap-8 w-full"
            >
              <div className="flex items-start justify-start flex-col gap-4 w-full sm:flex-1">
                <h1 className="text-2xl text-darkColor font-semibold">
                  Create an Account
                </h1>
                <Label title="Username" />
                <input
                  onChange={handleChange}
                  htmlFor="username"
                  label="Username"
                  id="username"
                  name="username"
                  placeholder="e.g JohnDoe"
                  className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
                />
                <Label title="Email Address" />
                <input
                  onChange={handleChange}
                  htmlFor="email"
                  label="Email Address"
                  id="email"
                  name="email"
                  placeholder="email"
                  className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
                />
                <Label title="Password" />
                <input
                  onChange={handleChange}
                  htmlFor="password"
                  label="Password"
                  id="password"
                  name="password"
                  placeholder="password"
                  className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
                />
                <Label title="Profile Picture" />
                <div className="w-full">
                  <input
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    // onChange={(e) => { setSelectedImage(URL.createObjectURL(e.target.files[0])); setFile(e.target.files[0])}}
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }  }
                  />
                  <div
                    className={` ${
                      file ? "flex-row" : "flex-col"
                    } flex justify-center items-center gap-3 w-full border h-[136px] rounded-md text-sm text-gray-600`}
                  >
                    <p>Upload Profile Image</p>
                    <BsUpload size={20} />
                    <label
                      htmlFor="img"
                      className="w-fit border py-2 px-5 rounded-md cursor-pointer"
                    >
                      {file ? "Change" : "Browser"}
                    </label>
                    {file && (
                      <div>
                        <img
                          src={file}
                          alt="Uploaded Image"
                          className="w-32 h-32"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <Label title="Country" />
                <input
                  onChange={handleChange}
                  htmlFor="country"
                  label="country"
                  type="text"
                  name="country"
                  id="country"
                  placeholder="e.g Nigeria"
                  className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
                />

                <button
                  type="submit"
                  className="w-full bg-primary/80 hover:bg-primary cursor-pointer outline-none text-white rounded py-3 transition-all duration-300 mt-4 hidden sm:block"
                >
                  <p className="flex items-center justify-center gap-2">
                    Register
                  </p>
                </button>
              </div>
              <div className="flex  items-start justify-start flex-col gap-4 w-full sm:flex-1">
                <h1 className="text-2xl text-darkColor font-semibold">
                  I want to be a seller
                </h1>
                <div className="w-full mt-8">
                  <label className="flex items-center justify-start w-full relative gap-4">
                    <Label title="Activate the seller account" />
                    <span className="flex items-center justify-center select-none action">
                      <input
                        type="checkbox"
                        className="appearance-none"
                        //   value={values.isSeller}

                          onChange={handleSeller}
                        name="isSeller"
                      />
                      <i className="bg-[#c5c7c9] relative w-11 h-6 rounded-xl transition-all duration-200 before:content-[''] before:absolute before:top-[2px] before:left-[2.8px] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-newLongShadow before:transition-all before:duration-300 cursor-pointer"></i>
                    </span>
                  </label>
                </div>
                <Label title="Phone Number" />
                <input
                  onChange={handleChange}
                  htmlFor="phone"
                  label="Phone Number"
                  type="text"
                  name="phone"
                  placeholder="phone"
                  className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
                />
                <Label title="About Yourself" />
                <textarea
                  onChange={handleChange}
                  htmlFor="desc"
                  label="Bio"
                  id="desc"
                  name="desc"
                  placeholder="A short description of yourself"
                  className="bg-white border border-[#E6E6E6] w-full h-full rounded p-4 focus:border-[1.5px] outline-none text-sm text-[#454B54] resize-none shadow-smallShadow"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary/80 hover:bg-primary cursor-pointer outline-none text-white rounded py-3 transition-all duration-300 mt-4 sm:hidden"
              >
                <p className="flex items-center justify-center gap-2">
                  Register
                </p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
