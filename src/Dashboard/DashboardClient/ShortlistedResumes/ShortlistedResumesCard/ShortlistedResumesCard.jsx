import React from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { IoCashOutline } from 'react-icons/io5';
import { RxCrossCircled } from 'react-icons/rx';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEye, AiOutlineCheck } from 'react-icons/ai';
const ShortlistedResumesCard = ({shortlistedResume}) => {
    const {profile_url,profession,location,salary,tags,full_name} = shortlistedResume;
    return (
        <div style={{border:'1px solid #ecedf2'}} className='lg:p-7 md:p-4 p-3 rounded-lg lg:flex gap-6 w-full'>
                        <img className='lg:w-24 lg:h-20 md:w-20 md:h-20 w-20 h-20 mt-3 md:mt-0 object-cover overflow-hidden rounded-full' src={profile_url}/>
                        <div className='mt-4 lg:mt-0 md:mt-2'>
                            <p className='font-semibold mb-2'>{full_name}</p>
                            <div className='lg:flex'>
                                <div className='flex gap-2 text-sm flex-wrap'>
                                    <p className='text-[#1967d2]'>{profession}</p>
                                    <p className='flex items-center  gap-1 text-[#696969]'><SlLocationPin size={17}/> {location}</p>
                                    <p className='flex items-center gap-2 text-[#696969]'><IoCashOutline size={18}/> ${salary} / hour</p>
                                </div>
                                <div className='flex gap-4 lg:ms-16 md:my-3 my-3'>
                                    <button className='bg-[#F0F5F7] hover:bg-[#1967D2] hover:text-white w-8 h-8 rounded-lg text-[#1967d2] flex justify-center items-center'><AiOutlineEye size={18}/></button>
                                    <button className='bg-[#F0F5F7] hover:bg-[#1967D2] hover:text-white w-8 h-8 rounded-lg text-[#1967d2] flex justify-center items-center'><AiOutlineCheck size={18}/></button>
                                    <button className='bg-[#F0F5F7] hover:bg-[#1967D2] hover:text-white w-8 h-8 rounded-lg text-[#1967d2] flex justify-center items-center'><RxCrossCircled size={18}/></button>
                                    <button className='bg-[#F0F5F7] hover:bg-[#1967D2] hover:text-white w-8 h-8 rounded-lg text-[#1967d2] flex justify-center items-center'><RiDeleteBin6Line size={18}/></button>
                                </div>
                            </div>
                            <div className='flex text-sm lg:gap-16 md:gap-10 gap-8 md:mt-2 mt-6 mb-1 md:mb-0'>
                                <div className='p-2 rounded-lg bg-[#F0F5F7]'><p className='text-[#696969]'>{tags[0]}</p></div>
                                <div className='p-2 rounded-lg bg-[#F0F5F7]'><p className='text-[#696969]'>{tags[1]}</p></div>
                                <div className='p-2 rounded-lg bg-[#F0F5F7]'><p className='text-[#696969]'>{tags[2]}</p></div>
                            </div>
                        </div>
                    </div>
    );
};

export default ShortlistedResumesCard;