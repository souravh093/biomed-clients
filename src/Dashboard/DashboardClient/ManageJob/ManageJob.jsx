import { PiToolboxLight } from 'react-icons/pi';
import { SlLocationPin } from 'react-icons/sl';
import { AiOutlineEye } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Select from 'react-select';
import { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
const ManageJob = () => {
    const [value, setValue] = useState(null);
    const { isLoading, data: manageJobs} = useQuery({
        queryKey: ["manageJobs"],
        queryFn: async () => {
            const res = await axios("/manageJobsData/manageJobsData.json");
            return res.data;
        },
    });
    console.log(manageJobs);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    const options = [
        { value: "Last 6 Months", label: "Last 6 Months" },
        { value: "Last 12 Months", label: "Last 12 Months" },
        { value: "Last 16 Months", label: "Last 16 Months" },
        { value: "Last 24 Months", label: "Last 24 Months" },
        { value: "Last 5 year", label: "Last 5 year" }
    ];
    const selectStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: '#f0f5f7',
            borderRadius: '0.375rem',
            borderColor: '1px solid #ced4da',
            boxShadow: 'none',
            '&:hover': {
                borderColor: 'transparent',
            }
        }),
    };
    console.log(
        "%c Thnx for having us!",
        "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%"
    );
    return (
        <div className="md:p-20 p-5">
            <h2 className="md:text-3xl text-2xl font-medium">Manage jobs!</h2>
            <p className="md:mt-2 mt-2 text-sm font-thin">Ready to jump back in?</p>
            <div className="md:mt-10 mt-7 bg-white md:p-7 p-5 rounded-xl shadow-sm">
                <div className="md:flex md:justify-between">
                    <p className="text-lg">My Job Listings</p>
                    <div className='w-40 mt-2 md:mt-0'>
                            <Select
                                className='text-sm'
                                isSearchable={false}
                                options={options}
                                defaultValue={setValue}
                                placeholder='Last 6 Months'
                                styles={selectStyles}
                            />
                        </div>
                </div>
                <div className="relative overflow-x-auto md:mt-8">
    <table className="w-full text-left">
        <thead className="text-sm bg-[#F5F7FC] text-[#1967d2]">
            <tr>
                <th scope="col" className="px-6 py-3">
                Title
                </th>
                <th scope="col" className="px-6 py-3">
                Applications
                </th>
                <th scope="col" className="px-6 py-3">
                Created & Expired
                </th>
                <th scope="col" className="px-6 py-3">
                Status
                </th>
                <th scope="col" className="px-6 py-3">
                Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className='flex gap-4'>
                        <img src="https://i.ibb.co/yyx3Vvb/Manage-Job.png" alt=""/>
                        <div>
                            <p className='md:text-lg text-sm font-bold'>Software Engineer (Android), Libraries</p>
                            <div className='flex  text-sm font-thin mt-2'>
                                <PiToolboxLight size={20}/>
                                <p className='ms-1'>Segment</p>
                                <SlLocationPin size={18} className='ms-3'/>
                                <p className='ms-1'>London, UK</p>
                            </div>
                        </div>
                    </div>
                </th>
                <td className="pl-10 py-3 underline text-sm font-thin text-[#1967d2]">
                    3+ Applied
                </td>
                <td className="px-6 py-3 text-sm font-thin">
                    <p>October 27, 2017</p>
                    <p>April 25, 2011</p>
                </td>
                <td className="px-6 py-3 text-green-700 text-sm font-thin">
                    Active
                </td>
                <td className="px-6 py-3 text-[#1967d2]">
                    <div className='flex gap-3'>
                    <button className='bg-[#F0F5F7] hover:bg-[#1967D2] hover:text-white w-8 h-8 rounded-lg text-[#1967d2] flex justify-center items-center'>
                        <AiOutlineEye/>
                    </button>
                    <button className='bg-[#F0F5F7] hover:bg-[#1967D2] hover:text-white w-8 h-8 rounded-lg text-[#1967d2] flex justify-center items-center'>
                    <RiDeleteBin6Line/>
                    </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
            </div>
            <p className='text-center mt-20'>© 2023 Biomed by <span className='text-[#1967d2]'>ib-themes.</span> All Right Reserved.</p>
        </div>
    );
};

export default ManageJob;