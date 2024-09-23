import React, { useState } from "react";
import Victory from "../../../assets/victory.svg";

function Auth() {
  const [activeState, setActiveState] = useState("login");

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl">Hey Buddy</h1>
              <img src={Victory} alt="Vicotry Emoji" className="h-[100px]" />
            </div>
            <p className="font-medium text-center">
              Fill in the details to get started with the best chat app!
            </p>
          </div>

          <div className="flex items-center justify-center w-full">
            <div className="w-3/4">
              <div className="bg-transparent rounded-none w-full flex">
                <div
                  className={`${
                    activeState === "login" ? "bg-transparent" : ""
                  } text-center text-black text-opacity-90 border-b-2 rounded-none w-full ${
                    activeState === "login" ? "text-black" : ""
                  } ${activeState === "login" ? "font-semibold" : ""} ${
                    activeState === "login" ? "border-b-purple-500" : ""
                  } p-3 transition-all duration-300 cursor-pointer`}
                  onClick={() => setActiveState("login")}
                >
                  Login
                </div>

                <div
                  className={`${
                    activeState === "register" ? "bg-transparent" : ""
                  } text-center text-black text-opacity-90 border-b-2 rounded-none w-full ${
                    activeState === "register" ? "text-black" : ""
                  } ${activeState === "register" ? "font-semibold" : ""} ${
                    activeState === "register" ? "border-b-purple-500" : ""
                  } p-3 transition-all duration-300 cursor-pointer`}
                  onClick={() => setActiveState("register")}
                >
                  Register
                </div>
              </div>
            </div>
          </div>

          {activeState === "login" && (
            <>
              <input
                type="email"
                placeholder="Email"
                className="rounded-full py-2 px-4 w-[70%] outline-none border border-1 border-gray-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="rounded-full -mt-5 py-2 px-4 w-[70%] outline-none border border-1 border-gray-300"
              />
              <button>Login</button>
            </>
          )}

          {activeState === "register" && (
            <>
              <input
                type="email"
                placeholder="Email"
                className="rounded-full py-2 px-4 w-[70%] outline-none border border-1 border-gray-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="rounded-full py-2 -mt-5 px-4 w-[70%] outline-none border border-1 border-gray-300"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="rounded-full -mt-5 py-2 px-4 w-[70%] outline-none border border-1 border-gray-300"
              />
              <button>Register</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
