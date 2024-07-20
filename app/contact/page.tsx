import React from "react";

const Contact = () => {
  return (
    <>
      <section className=" py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full mx-auto mb-16">
            <h1 className="text-center font-santeheap text-3xl font-bold">
              Get In Touch
            </h1>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-16">
            <div className="full flex items-center lg:mb-0 mb-10 justify-between">
              <div className="">
                <h2 className=" text-2xl font-popin font-medium leading-6 mb-8 lg:text-left text-center">
                  Send Message
                </h2>
                <form>
                  <input
                    type="text"
                    className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-md border outline-none border-gray-200 py-2 px-4 mb-8 focus:outline-none focus:ring-2 focus:ring-[#6c6c60]"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-md border border-gray-200 outline-none py-2 px-4 mb-8  focus:outline-none focus:ring-2 focus:ring-[#6c6c60]"
                    placeholder="Email*"
                    required
                  />
                  <textarea
                    name=""
                    id="text"
                    cols={50}
                    rows={8}
                    className="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-md border border-gray-200 outline-none px-4 py-4 mb-8  focus:outline-none focus:ring-2 focus:ring-[#6c6c60]"
                    placeholder="Message*"
                  ></textarea>
                  <div className="flex justify-center">
                    <button className="border border-gray-300 rounded-lg text-white text-xl font-medium px-8 py-3  transform transition-all ease-in-out duration-500  hover:text-gray-200 text-right font-santeheap">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
              
                <img src="/contact/profile.jpg" className="hidden lg:block   mx-auto w-full h-[550px]  rounded-lg "  alt="" />
              
             {/* <div className="hidden w-full h-[400px] md:my-8  mx-auto rounded-lg md:flex items-center justify-center bg-center  bg-contain bg-no-repeat bg-[url('/contact/profile.jpg')] ">
              {" "}
            
            </div>
              */}
          </div>
        </div>
      </section>
      {/* Research meaning listy */}
      <div className="-mt-24 md:mt-0 text-white bg-[rgb(25,27,29,1)] py-32  bg-center  bg-cover bg-no-repeat bg-[url('/mailing/bg.png')]">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl trakcing-widest font-bold font-saira text-[rgba(210,193,175,1)]">
            JOIN MY RESEARCH MAILING LIST
          </h1>
          <p
            className="text-[rgba(245,248,255,0.79)]
 text-center text-lg leading-loose mt-4"
          >
          Join our AI community! Sign up now to stay updated with the latest advancements and insights.
          </p>
          <div className="flex items-center justify-center mt-20">
            <form className="flex">
              <input
                type="text"
                className="w-[90%] lg:w-[400px] border border-[rgba(210,193,175,1)]  rounded-tl-xl  text-white bg-black pl-2 text-base font-semibold outline-0 py-3 placeholder-white focus:outline-none focus:ring-1 focus:ring-[#aca298]"
                placeholder="Email"
                id=""
              />
              <button
                type="submit"
                className="py-4 px-8 rounded-br-xl border border-[rgba(210,193,175,1)] text-white font-semibold  hover:bg-[rgba(210,193,175,0.8)] transition-colors duration-300 font-santeheap tracking-widest"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
