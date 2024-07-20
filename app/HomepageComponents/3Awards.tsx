import React from 'react'
import { AwardsList, ExperienceList } from './data';
import RoleItem from '../Components/roleComponent';
import { FaAward } from "react-icons/fa";

const Awards = () => {
    return (
        <div className='mx-5 md:mx-10 lg:mx-20 mb-20 '>
            <div className=' grid grid-cols-1 md:grid-cols-2 '>
                <div className=' flex relative -top-4   md:mt-10'>
                    <div className=' w-full'>
                        <h2 className=' poppinsu text-2xl  font-bold text-custom-main pb-5 max-md:mx-auto max-md:text-center'>AWARDS</h2>

                        {AwardsList.map((role, index) => (
                            <RoleItem key={index} title={role.title} description={role.description} />
                        ))}
                        <div className=' md:pb-10 pt-5 flex flex-col  md:flex-row gap-10'>
                            <div className=' flex border border-white justify-center items-center gap-3 px-6 py-1'>
                                <FaAward className=' min-h-8 min-w-8 w-1 h-1' />
                                <div className=' text-center'>
                                    <p className='textborder text-lg font-bold'>60+</p>
                                    <p className=' font-semibold text-sm'>
                                        Total Awards
                                    </p>

                                </div>
                            </div>
                            <div className=' flex border bg-white border-white justify-center items-center gap-3 px-6 py-1'>
                                <FaAward className=' min-h-8 min-w-8 w-1 h-1 text-[#AB5232]' />
                                <div className=' text-center text-black'>
                                    <p className=' font-semibold text-sm'>
                                        All Rounder
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' flex md:justify-center  mt-10'>
                    <div className=' w-full'>
                        <h2 className=' poppinsu text-2xl  font-bold text-custom-main pb-5 max-md:mx-auto max-md:text-center'>WORK EXPERIENCE</h2>

                        {ExperienceList.map((role, index) => (
                            <RoleItem key={index} title={role.title} description={role.description} />
                        ))}


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Awards