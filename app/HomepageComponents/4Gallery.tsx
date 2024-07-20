import Image from 'next/image'
import React from 'react'

const Gallery = () => {
    return (
        <div className=' mx-5 pb-10 md:mx-10 lg:mx-20 flex flex-col gap-5 justify-center items-center'>
            <h2 className=' poppinsu text-4xl font-bold'>GA<span className=' text-custom-main'>LL</span>ERY</h2>
            <p className='poppinsu md:w-5/12  text-center'>
            A visual journey showcasing insights, collaborations, and my published works.    </p>
            <div className=' w-full grid grid-cols-2 gap-5 lg:grid-cols-3'>
                <div className=' w-full relative flex flex-col gap-5'>
                    <Image src='/Img/div.e-gallery-image.svg' alt='' height={1000} width={1000} className=' w-full h-auto rounded-md' />
                
                    <Image src='/Img/div.e-gallery-image (10).svg' alt='' height={1000} width={1000} className=' w-full h-auto rounded-md' />
                
                    <Image src='/Img/div.e-gallery-image (12).svg' alt='' height={1000} width={1000} className=' w-full h-auto rounded-md' />
                
                </div>
                <div className=' w-full flex flex-col gap-5'>
                    <Image src='/Img/div.e-gallery-image (1).svg' alt='' height={1000} width={1000} className=' w-full h-auto rounded-md' />
                    
                    <Image src='/Img/div.e-gallery-image (6).svg' alt='' height={1000} width={1000} className=' w-full h-auto rounded-md' />
                   
                    
                    <Image src='/Img/div.e-gallery-image (11).svg' alt='' height={1000} width={1000} className=' w-full h-auto rounded-md' />
                   
                    <Image src='/Img/div.e-gallery-image (13).svg' alt='' height={1000} width={1000} className=' w-full h-auto rounded-md max-md:hidden' />
                
                </div>
                <div className=' w-full flex flex-col gap-5 max-lg:hidden'>
                    <Image src='/Img/div.e-gallery-image (4).svg' alt='' height={1000} width={1000} className=' w-full h-auto rounded-md' />
                
                    <Image src='/Img/div.e-gallery-image (10).svg' alt='' height={1000} width={1000} className=' w-full h-auto rounded-md' />
                
                    <Image src='/Img/div.e-gallery-image (16).svg' alt='' height={1000} width={1000} className=' w-full h-auto rounded-md' />
                
                </div>

            </div>
        </div>
    )
}

export default Gallery