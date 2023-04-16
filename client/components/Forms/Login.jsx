import React, { useRef, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import axios from "axios";


const Login = ({ show, setShow }) => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ errors, setErrors ] = useState(null)

  const modalRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8800/api/auth/login', {
        username,
        password
      }, 
      {
        withCredentials: true
      }
      )
  
      console.log(res.data)
    } catch (error) {
      console.log(error)
      setErrors(error)
    }
    
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
      
            <input
              htmlFor="username"
              label="username"
              id="username"
              placeholder="username"
              className="bg-white  border border-[#C7CBD1] my-10 w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
              onChange={(e) =>  setUsername(e.target.value) }
            />
            <input
              htmlFor="password"      
              label="password"
              id="password"
              placeholder="password"
              className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
              onChange={(e) =>  setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full h-[40px] bg-primary text-white rounded-lg mt-4 text-sm font-medium"
            >
              Sign In
            </button>



            </form>
            <div
            onClick={() => setShow(false)}
            className="w-full border-t absolute bottom-0 py-4 bg-white z-10 px-8 flex items-center justify-center text-sm font-semibold text-darkColor gap-2"
          >
            Not a member yet?
            <Link href="/register" className="text-primary">
              Join now
            </Link>
          </div>
            </motion.div>
        </div>

    </section>
  )
}

export default Login