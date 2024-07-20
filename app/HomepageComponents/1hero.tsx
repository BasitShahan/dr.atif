import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaRegPaperPlane } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 -translate-y-16 '>
            <div className='  w-full md:w-11/12 h-full max-h-[730px] overflow-hidden col-span-1'>
                <Image src="/Img/Image Header (3).svg" alt='' className=' h-auto w-full ' height={830} width={627} />
            </div>
            <div className=' flex justify-center items-center   w-full'>
                <div className=' w-11/12 md:w-8/12 flex flex-col gap-5 relative md:top-2  top-16 '>

                    <h1 className='  max-md:mx-auto max-md:text-center saira-condensed-regular text-5xl font-bold '>HELLO! <br />I'M DR ATIF ALI</h1>
                    <p className=' text-gray-200 max-md:mx-auto max-md:text-center text-justify'>A Professional Author, Writer, Researcher, QA,  IT
                    Dr. Atif Ali – Postdoc Artificial Intelligence from Research Management Center Multimedia University Malaysia, and Ph.D. in Computer Science (Artificial Intelligence based Software Engineering).  His research contributions are in the Cyber Security, Artificial Intelligence, and Software Engineering. He has received over 47 National/ Provincial awards in different co-curricular activities. He has more than 60 research articles to his credit, internationally recognized. He is the author of 4 x books.

                        </p>
                   
                    <Link href={"#"} className=' max-md:mx-auto max-md:text-center  transition-all duration-300 border-2 border-custom-main bg-transparent hover:bg-custom-main w-fit'>
                        <p className=' px-4 py-2 poppinsu flex gap-2 justify-center items-center hover:text-white text-custom-main'>
                            <FaRegPaperPlane className=' min-h-2 min-w-2' />CONTACT ME
                        </p>

                    </Link>

                </div>
            </div>

        </div>
    )
}

export default Hero