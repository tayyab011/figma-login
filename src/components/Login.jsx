import React from 'react';
import { BsGlobeAsiaAustralia, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import logo from './Logo.jpg'

const Login = () => {
    return (
      <div className="overflow-x-hidden poppins">
        <header>
          <nav className="w-full flex justify-evenly m-4 mb-2">
            <div className="lg:w-5/6 md:w-3/4 w-1/2">
              <img src={logo} className="w-32 md:ml-10" alt="" />
            </div>

            <div className="lg:w-1/6  w-1/2 md:w-1/4 flex gap-2">
              <button className=" bg-purp  text-blu  px-2 text-base rounded-md gap-x-2 md:gap-x-4">
                Log In
              </button>
              <p className="text-lg   flex text-blu gap-2">
                <font className="text-2xl font-light">|</font> EN{" "}
                <BsGlobeAsiaAustralia className="text-lg m-1" />
              </p>
            </div>
          </nav>
        </header>
        <section>
          <section class="text-gray-600 body-font ">
            <div class="container px-5 pt-32 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 className=" text-2xl font-bold title-font mb-3 text-blu ">
                  You are just a few steps away from your Javonet experience!
                </h1>
                <p class="lg:w-2/3  mx-auto leading-relaxed text-base">
                  Let’s get started!
                </p>
                <p className=" text-5xl  font-bold mt-8 mb-2 text-blu ">
                  Free 30-day trial
                </p>

                <p className=" text-2xl font-bold title-font mb-3 text-blu ">
                  No credit card required.
                </p>
              </div>
            </div>
          </section>

          <section class="text-gray-600 body-font lg:mx-20 md:mx-2 mx-7">
            <div class="w-full flex flex-wrap px-5   mx-auto ">
              <div class="md:w-1/2 md:pr-2 w-full  text-center  pb-10 border-b border-hr md:border-b-0 ">
                <h2 className="text-2xl font-bold pb-16 text-blu">
                  Register with
                </h2>
                <button className="bg-fb text-left flex gap-3 md:w-2/3 w-full mx-auto px-3 py-4 text-white rounded roboto  text-xl ">
                  {" "}
                  <BsFacebook className="mt-1 text-xl" />
                  Continue with Facebook
                </button>
                <button className="text-gray-500  text-left flex gap-3 md:w-2/3  w-full mx-auto px-3 py-4  rounded roboto  text-xl mt-5 shadow-slate-400 shadow-sm">
                  <FcGoogle className="mt-1 text-xl" />
                  Continue In with Google
                </button>
              </div>
              <hr />
              <span>Or</span>

              <div class="md:w-1/2 md:pl-2 w-full justify-center items-center text-center grid  mb-10 md:mb-16 pb-10  pt-5 md:pt-0">
                <h2 className="text-2xl font-bold pb-12 text-blu">
                  Create account{" "}
                </h2>
                <form className="w-full text-left ">
                  <label htmlFor="name" className="text-lg font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name "
                    className="p-3 block md:w-10/12 w-full text-lg border border-gray-300 rounded-lg mt-2 mb-8"
                  />
                  <label htmlFor="email" className="text-lg font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email "
                    className="p-3 block md:w-10/12 w-full text-lg border border-gray-300 rounded-lg mt-2 mb-8"
                  />
                  <label htmlFor="password" className="text-lg font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Create a password"
                    className="p-3 block md:w-10/12 w-full text-lg border border-gray-300 rounded-lg mt-2 mb-8"
                  />
                  <label htmlFor="pass2" className="text-lg font-semibold">
                    Reapeat Password
                  </label>
                  <input
                    type="password"
                    name="pass2"
                    id="pass2"
                    placeholder="Retype your password "
                    className="p-3 md:w-10/12 w-full text-lg border border-gray-300 rounded-lg mt-2 mb-8"
                  />
                  <button
                    type="submit"
                    className=" tracking-widest px-5 py-2 bg-blue-900 text-white rounded-md  mx-auto items-center  block ml-20"
                  >
                    CREATE ACCOUNT
                  </button>
                </form>
              </div>
            </div>
          </section>

          <p className="text-center mt-5 mb-40">
            Already have an account? &nbsp;
            <font className="font-semibold text-blu ">SignIn</font>
          </p>
        </section>
      </div>
    );
};

export default Login;