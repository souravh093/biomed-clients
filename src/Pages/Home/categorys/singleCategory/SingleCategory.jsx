import React from 'react';

const SingleCategory = ({items}) => {
    const {icon,service_number, sub_title, title} = items;
    console.log(items)
    return (
        <div className='border px-7 py-7 hover:border-slate-600 transition rounded-md'>
            <div className='mb-6'>
                <img className='w-[50px] h-[50px]' src={icon} alt="" />
            </div>
            <div>
                <p>{service_number} service</p>
                <h2>{title}</h2>
                <p className='text-slate-500'>{sub_title}</p>
            </div>
        </div>
    );
};

export default SingleCategory;