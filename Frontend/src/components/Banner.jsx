import React from "react";
import banner from "../../public/Banner.png"

const Banner = () => {
  return (
    <>
      <div className=" max-w-screen-2xl container max-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome to Book_Store here to learn somthing{" "}
              <span className="text-blue-400">new everyday...!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ea
              amet necessitatibus recusandae omnis obcaecati corporis tempora
              repellat maxime delectus eos quisquam doloribus, distinctio,
              soluta ipsum esse molestiae quasi et.
            </p>
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="Enter valid email address to login" required />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>
        <div className=" order-1 w-full md:w-1/2">
        <img src={banner} className="w-92 h-92" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;