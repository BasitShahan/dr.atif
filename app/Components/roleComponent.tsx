import React from 'react';

interface RoleItemProps {
    title: string;
    description: string;
}

const RoleItem: React.FC<RoleItemProps> = ({ title, description }) => {
    return (
        <div className='grid grid-cols-10 relative'>
            <div className='h-full relative flex flex-col z-10 '>
                <div className='bg-[#AB5232] max-h-4 absolute top-1  rounded-full border-2 border-white max-w-4 h-10 w-10'></div>
                <div className='bg-white w-[1px] h-full top-1 left-2  -z-10 absolute'></div>
            </div>
            <div className='col-span-9   pb-8 poppinsu'>
                <h3 className='font-bold pb-2 text-lg'>{title}</h3>
                <p className='text-sm text-gray-300'>{description}</p>
            </div>
        </div>
    );
};

export default RoleItem;
