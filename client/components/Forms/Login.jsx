import React, { useRef, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";


const Login = ({ show, setShow }) => {
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);

  const handleSubmit = () => {

  }

  return (
    <section
      className={`fixed top-0 right-0 w-full h-full bg-[#00000085] z-10 place-items-center flex justify-center transition-all duration-500 ${
        show ? "flex" : "hidden"
      }`}
    >
        <div className="contain flex justify-center items-center">
            <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: "-150px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className="w-[406px] min-h-[450px] border border-[#F1F2F4] rounded-lg bg-white p-4 md:p-8 overflow-y-auto text-darkColor flex flex-col items-center relative"
            >
            <h2 className="w-full text-center text-2xl font-bold">
            Sign In to Fiverr
            </h2>
            <form 
            onSubmit={handleSubmit}
            className="">
            {/* <CustomizeInput
              showLabel={false}
              htmlFor="username"
              label="Username"
              labelClassName="text-sm font-medium text-darkColor"
              type="text"
              name="username"
            //   value={values.username}
            //   onChange={handleChange}
              onBlur={handleBlur}
              error={getError("username")}
              id="username"
              placeholder="Johndoe"
              className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
            /> */}


            </form>
            </motion.div>
        </div>

    </section>
  )
}

export default Login