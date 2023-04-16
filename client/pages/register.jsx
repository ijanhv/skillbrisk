import Layout from '@/components/Layout/Layout'
import React from 'react'

const Register = () => {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        phone: "",
        img: null,
        country: "",
        isSeller: false,
        desc: "",
      };
  return (
    <Layout>
        <div className="py-24 lg:py-40 pb-10">
      <div className="contain">
        <div className="w-full lg:w-[75%] flex items-center flex-col sm:flex-row justify-center py-10 mx-auto">
          <form
            // onSubmit={handleSubmit}
            className="flex items-start flex-col sm:flex-row justify-start gap-8 w-full"
          >
            <div className="flex items-start justify-start flex-col gap-4 w-full sm:flex-1">
              <h1 className="text-2xl text-darkColor font-semibold">
                Create an Account
              </h1>
              <input 
                htmlFor="username"
                label="Username"
                id="username"
                placeholder="e.g JohnDoe"
                className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
                />
                <input
                htmlFor="email"
                label="Email Address"
                id="email"
                placeholder="email"
                className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
                />

                <input
                htmlFor="password"
                label="Password"
                id="password"
                placeholder="password"
                className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
                />

              
              <div className="w-full">
                <input 
                htmlFor="img"
                label="Profile Picture"
                id="img"
                placeholder="Profile Picture"
                className="hidden"
                type="file"
                accept="image/*"
                />
{/*                 
                <div
                  className={`flex justify-center items-center flex-col gap-3 w-full border h-[136px] rounded-md text-sm text-gray-600 ${
                    touched.img && errors.img
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  {values?.img?.type?.startsWith("image/") ? (
                    <label
                      htmlFor="img"
                      className="cursor-pointer h-full w-full flex items-center justify-center"
                    >
                      <img
                        src={URL.createObjectURL(values.img)}
                        alt={values.img.name}
                        className="w-[120px] h-[120px] rounded-full object-cover"
                      />
                    </label>
                  ) : (
                    <>
                      <p>Upload Cover Image</p>
                      <BsUpload size={20} />
                      <label
                        htmlFor="img"
                        className="w-fit border py-2 px-5 rounded-md cursor-pointer"
                      >
                        Browser
                      </label>
                    </>
                  )} */}
                {/* </div> */}
              </div>
              <input 
              htmlFor="country"
              label="country"
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
            <div className="flex items-start justify-start flex-col gap-4 w-full sm:flex-1">
              <h1 className="text-2xl text-darkColor font-semibold">
                I want to be a seller
              </h1>
              <div className="w-full mt-8">
                <label className="flex items-center justify-start w-full relative gap-4">
                  <span className="text-[#5D6771] text-[15px] leading-5 font-medium flex items-center justify-center select-none">
                    Activate the seller account
                  </span>
                  <span className="flex items-center justify-center select-none action">
                    <input
                      type="checkbox"
                      className="appearance-none"
                    //   value={values.isSeller}
                    //   onChange={handleChange}
                      name="isSeller"
                    />
                    <i className="bg-[#c5c7c9] relative w-11 h-6 rounded-xl transition-all duration-200 before:content-[''] before:absolute before:top-[2px] before:left-[2.8px] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-newLongShadow before:transition-all before:duration-300 cursor-pointer"></i>
                  </span>
                </label>
              </div>
              <input 
               htmlFor="phone"
               label="Phone Number"
               type="text"
               name="phone"
               placeholder="phone"
                className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
              
              />

             <textarea 
              htmlFor="desc"
              label="Bio"
              id="desc"
              name="desc"
              placeholder="A short description of yourself"
              className="bg-white border border-[#E6E6E6] w-full h-[107px] rounded p-4 focus:border-[1.5px] outline-none text-sm text-[#454B54] resize-none shadow-smallShadow"
            
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
  )
}

export default Register