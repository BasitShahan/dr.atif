import React from 'react'
import { researchPaper } from "../Components/data";
import Link from "next/link";

export default function MyWrittenWorks() {
  return (
    <div>
      
      <section className="text-gray-600 body-font bg-black pt-16 md:pt-32">
        <div className="">
          <h2 className="md:text-6xl text-3xl text-center leading-loose mb-4 font-bold text-white font-sansita italic tracking-wider">
            MY <span className=" text-[rgba(210,193,175,1)]">WRITTEN</span>{" "}
            WORKS
          </h2>
          <p className="text-white text-center text-lg leading-loose popin md:mt-10">
            Discover books that bridge the gap between innovation and practical{" "}
            <br className=" lg:inline-block hidden" />
            knowledge in AI and IT consulting.
          </p>
        </div>
        <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
          <div className="md:w-[40%] mx-auto w-5/6 my-10 md:my-0 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="books/darkworld.png"
            />
            <h1 className=" text-4xl lg:text-5xl font-prata text-center my-6 text-white">
              DARK WORLD
            </h1>
            <p className="text-white text-center text-xl leading-loose font-popin tracking-wider mt-2">
              A BOOK ON THE DEEP
              <br />
              DARK WEB
            </p>
          </div>
          <div className="lg:flex-grow w-full flex flex-wrap md:w-1/2 lg:pl-16 md:pl-16 md:items-start md:text-left justify-center items-center mx-auto md:mt-20">
            <div className="flex justify-center w-full md:w-[42%]  ">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="books/cybersecurity.png"
              />
            </div>
            <div className="flex justify-center w-full md:w-[42%] ">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="books/freelancing.png"
              />
            </div>
            <div className="flex justify-center  w-full md:w-[42%]">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="books/spies.png"
              />
            </div>
            <div className="flex justify-center  w-full md:w-[42%]">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="books/deepdark.png"
              />
            </div>
            <Link
              href="https://www.routledge.com/search?author=Atif%20Ali"
              className="flex py-9"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border-2 border-[rgba(210,193,175,1)] rounded-lg text-white text-xl font-medium font-popin px-8 py-3  transform transition-all ease-in-out duration-500 hover:scale-105 hover:text-[rgba(210,193,175,1)]">
                EXPLORE MORE
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
