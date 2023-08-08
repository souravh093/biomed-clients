import React from 'react';

const SingleCategory = ({items}) => {
    const {icon,service_number, sub_title, title} = items;
    console.log(items)
    return (
        <div className='border px-9 py-10 hover:border-slate-600 rounded-md transition'>
            <div className='mb-6'>
                <img className='w-[50px] h-[50px]' src={icon} alt="" />
            </div>
            <div className='space-y-2'>
                <p>{service_number} service</p>
                <h2 className='lg:text-3xl md:text-2xl sm:text-xl'>{title}</h2>
                <p className='text-slate-500'>{sub_title}</p>
            </div>
        </div>
    );
};

export default SingleCategory;