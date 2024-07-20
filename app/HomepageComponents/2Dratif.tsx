import Image from 'next/image'
import React from 'react'
import { Carditems } from './data'

const Dratif = () => {
    return (
        <div className=' mx-5 pb-10 md:mx-10 lg:mx-20 flex flex-col md:flex-row my-20 gap-5'>
            <div className=' flex flex-col gap-3 w-full md:w-5/12 '>
                <h2 className=' saira-condensed-regular text-5xl font-bold uppercase max-md:mx-auto max-md:text-center '>Decoding IT Solutions A Journey with Dr. Atif Ali.</h2>
                <p className=' text-gray-200 max-md:mx-auto max-md:text-center max-md:w-11/12 '>From Researcher to Multifaceted Consultant
                    Multi-Faceted DR. Atif Ali.</p>
                <div className='  rounded-md flex justify-center items-center md:flex md:justify-start md:items-center overflow-hidden w-full md:w-11/12'>
                    <Image src="/Img/div.e-gallery-image (8).svg" alt='' height={500} width={200} className='rounded-md w-auto max-h-[400px] h-auto ' />
                </div>
            </div>
            <div className='w-full md:w-10/12 lg:w-7/12 flex justify-center items-center  max-md:mt-5  md:pl-10'>
                <div className=' md:grid  md:grid-cols-2 grid grid-cols-1 gap-5 h-full w-full '>

                    {Carditems.map((item, index) => (
                        <div
                            key={index}
                            className='h-full w-full hover:bg-gradient-to-b from-[#191B1D] to-[#717A83] transition-all duration-300 flex flex-col gap-5 p-5 bg-[#191B1D]'
                        >
                            <Image src='/Img/photography.png (2).svg' alt=' ' className='' height={40} width={40} />
                            <h2 className='text-custom-main text-xl font-bold uppercase saira-condensed-regular'>{item.title}</h2>
                            <p className='text-sm text-gray-200 roboto-regular'>{item.description}</p>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Dratif