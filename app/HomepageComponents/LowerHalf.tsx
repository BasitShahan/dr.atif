import { researchPaper } from "../Components/data";
import Link from "next/link";
import MyWrittenWorks from "./MyWrittenWorks";

import AboutUs from "./AboutUs";
const LowerSection = () => {
  return (
    <>
    {/* to="section1" smooth={true} duration={500}
     */}
      {/* About me section start */}

        <AboutUs/>

      {/* About me section end */}

      {/* Books by DR Atif start */}
      <MyWrittenWorks/>
      {/* Books by DR Atif end */}
      {/* Find Publications  start*/}
      <section className="body-font bg-[rgb(25,27,29,1)] py-16 md:py-32">
        <div className="container mx-auto flex px-5 py-6 flex-col items-center justify-center">
          <div className="w-full mx-auto ">
            <h2 className="md:text-4xl text-3xl text-center leading-loose md:tracking-wider mb-4 font-bold text-white font-popin">
              Find My{" "}
              <span className=" text-[rgba(210,193,175,1)]">Pulications</span>{" "}
              in The
              <br className="hidden md:inline-block" />
              Following Platforms
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-10 md:gap-16 mt-8 md:mt-14">
            <img
              src="publication/publons.png"
              alt="Publons"
              className="h-8 md:h-8 lg:h-12 transition-transform transform ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
            <img
              src="publication/rg.png"
              alt="ResearchGate"
              className="h-8 md:h-8 lg:h-12 transition-transform transform ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
            <img
              src="publication/dplp.png"
              alt="DBLP"
              className="h-8 md:h-8 lg:h-12 transition-transform transform  ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
            <img
              src="publication/mendley.png"
              alt="Mendeley"
              className="h-8 md:h-8 lg:h-12 transition-transform transform  ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
            <img
              src="publication/research.png"
              alt="Researcher"
              className="h-8 md:h-8 lg:h-12 transition-transform transform  ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
            <img
              src="publication/id.png"
              alt="ORCID"
              className="h-8 md:h-8 lg:h-12 transition-transform transform  ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
            <img
              src="publication/scopus.png"
              alt="Scopus"
              className="h-8 md:h-8 lg:h-12 transition-transform transform  ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
            <img
              src="publication/google.png"
              alt="Google Scholar"
              className="h-8 md:h-8 lg:h-12 transition-transform transform  ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </section>
      {/* Find Publications  end*/}

      {/* latest Publication  start*/}
      <section className="text-gray-600 body-font bg-black py-16 md:py-32">
        <div className="container mx-auto flex px-5 py-6 flex-col items-center justify-center">
          <div className="w-full mx-auto ">
            <h2 className="md:text-4xl text-3xl text-center leading-loose md:tracking-wider  mb-4 font-bold text-white font-popin">
              Available Now in My Latest Publications
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-14">
            <img
              src="latest-publication/dark-world1.png"
              alt="dark-wordl1"
              className="h-32 md:h-56  transition-transform transform ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
            <img
              src="latest-publication/dark-world2.png"
              alt="dark-world2"
              className="h-32 md:h-56  transition-transform transform ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
            <img
              src="latest-publication/spies.png"
              alt="spies"
              className="h-32 md:h-56 transition-transform transform  ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
            <img
              src="latest-publication/defence.png"
              alt="Defence"
              className="h-32 md:h-56  transition-transform transform  ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
            <img
              src="latest-publication/dark-world3.png"
              alt="dark-world3"
              className="h-32 md:h-56 transition-transform transform  ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
            <img
              src="latest-publication/freelancing.png"
              alt="freelancing"
              className="h-32 md:h-56 transition-transform transform  ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
            <img
              src="latest-publication/defence.png"
              alt="defence"
              className="h-32 md:h-56  transition-transform transform  ease-in-out duration-500 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </section>
      {/* latest Publication  end*/}

      {/* Research Section Start */}
      <section className="body-font bg-black pb-20">
        <div className="px-2">
          <h2 className="md:text-6xl text-3xl text-center leading-loose mb-4 font-bold text-[rgba(210,193,175,1)] font-sansita italic">
            REASEARCH
          </h2>
          <p className="text-white text-center text-lg leading-loose popin">
            A visual journey showcasing insights, collaborations,{" "}
            <br className=" md:inline-block hidden" />
            and my published works.
          </p>
        </div>

        {/* lower section */}
        <div className="container px-5 lg:px-20 pt-20 mx-auto ">
          {/* <div className="-my-8 divide-y-2 divide-gray-100"> */}
          <div className=" bg-[rgb(25,27,29,1)] py-5 flex justify-between items-center p-2 rounded-md">
            <div>
              <h2 className="font-popin text-xl tracking-wider">Title</h2>
            </div>
            <div>
              <h2 className="font-popin text-xl tracking-wider">Year</h2>
            </div>
          </div>
          {researchPaper.map((data) => {
            return (
              <>
                <div className=" py-8 flex  border-b border-[rgba(255,255,255,0.6)] justify-center  gap-6 px-2 transition-all duration-500 hover:opacity-80">
                  <div className="md:flex-grow">
                    <Link
                      href="https://scholar.google.com/citations?user=vGwwMPoAAAAJ&hl=en&authuser=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h2 className="w-full md:w-[75%]  text-lg font-medium text-white title-font mb-2 font-popin ">
                        {data.title}
                      </h2>
                    </Link>

                    <p className="w-full md:w-[70%]  leading-relaxed text-[rgba(255,255,255,0.6)] mt-1">
                      {data.authors}
                    </p>
                    <p className="w-full md:w-[75%]  leading-relaxed text-[rgba(255,255,255,0.6)] mt-1">
                      {data.conference}
                    </p>
                  </div>
                  <div className="md:w-64 md:mb-0  flex-shrink-0 flex flex-col">
                    <span className="mt-1 text-white text-lg text-right font-popin">
                      {data.year}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
          <div className="flex justify-center">
            <Link
              href="https://scholar.google.com/citations?user=vGwwMPoAAAAJ&hl=en&authuser=1"
              className="flex py-9"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border-2 border-[rgba(210,193,175,1)] rounded-lg text-white text-xl font-medium font-popin px-8 py-3  transform transition-all ease-in-out duration-500 hover:scale-105 hover:text-[rgba(210,193,175,1)]">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Section end */}

      {/* Subscribe to my newletter start */}
      <div className="text-white bg-[rgb(25,27,29,1)] py-16 md:py-32 ">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl trakcing-widest font-bold font-saira text-[rgba(210,193,175,1)]">
            SUBSCRIBE TO MY NEWSLETTER
          </h1>
          <p
            className="text-[rgba(245,248,255,0.79)]
 text-center text-lg leading-loose mt-4 w-full md:w-[50%] mx-auto"
          >
            Sign up for my newsletter to see new photos, tips, and blog
            publications. Do not worry, we will never spam you.
          </p>
          <div className="flex items-center justify-center mt-20">
            <form className="flex">
              <input
                type="text"
                className="w-[90%] lg:w-[400px] border border-[rgba(210,193,175,1)]  rounded-tl-xl  text-white bg-black pl-2 text-base font-semibold outline-0 py-3 placeholder-white focus:outline-none focus:ring-1 focus:ring-[#aca298]"
                placeholder="Email Address"
                id=""
              />
              <button
                type="submit"
                className="p-4 rounded-br-xl border border-[rgba(210,193,175,1)] text-white font-semibold  hover:bg-[rgba(210,193,175,0.8)] transition-colors duration-300"
              >
                Subcribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowerSection;
