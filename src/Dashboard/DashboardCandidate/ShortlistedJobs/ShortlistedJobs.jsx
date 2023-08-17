import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaEye, FaRegTrashAlt } from "react-icons/fa";

const ShortlistedJobs = () => {

    const { isLoading, data: shortListedJobs = [] } = useQuery({
        queryKey: ["shortListedJobs"],
        queryFn: async () => {
            const res = await axios("/public/appliedjobs.json");
            return res.data;
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }




    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <div className="p-6 md:p-12">
                <h1 className="text-2xl md:text-3xl font-semibold">Shortlisted jobs!</h1>
                <p className="mt-1 md:mt-2 text-gray-600 text-base md:text-lg">Ready to jump back in?</p>
            </div>
            <div className="bg-white shadow-md p-4 md:p-8 mx-2 md:mx-10 rounded-2xl">
                <h2 className="text-lg md:text-xl font-semibold pb-6 md:pb-10">My Favorite Jobs</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50 text-green-400">
                            <tr>
                                <th className="py-3 md:py-5 text-left text-base md:text-lg px-3 md:ps-5">Job title</th>
                                <th className="py-3 md:py-5 text-left text-base md:text-lg">Date applied</th>
                                <th className="py-3 md:py-5 text-left text-base md:text-lg">Status</th>
                                <th className="py-3 md:py-5 text-left text-base md:text-lg">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                shortListedJobs.map(singleJob => (
                                    <tr key={singleJob._id}>
                                        <td className="py-2 md:py-4">
                                            <div className="flex items-center">
                                                <img
                                                    src={singleJob.image}
                                                    alt="Job"
                                                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl mr-3 md:mr-4"
                                                />
                                                <div>
                                                    <p className="font-semibold text-base md:text-lg">{singleJob.title}</p>
                                                    <div className="flex mt-1 text-gray-600 text-xs md:text-base">
                                                        <FaBriefcase className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                                                        <p>{singleJob.heading}</p>
                                                        <FaMapMarkerAlt className="w-3 h-3 md:w-4 md:h-4 mx-1 md:mx-2" />
                                                        <p>{singleJob.address}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-2 md:py-4">{singleJob.date}</td>
                                        <td className="py-2 md:py-4">{singleJob.status}</td>
                                        <td className="py-2 md:py-4">
                                            <div className="flex space-x-1 md:space-x-2">
                                                <span className="bg-gray-100 p-1 md:p-2 rounded-lg"><FaEye className="w-3 h-3 md:w-4 md:h-4" /></span>
                                                <span className="bg-gray-100 p-1 md:p-2 rounded-lg"><FaRegTrashAlt className="w-3 h-3 md:w-4 md:h-4" /></span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="my-10 md:my-20 text-center text-gray-600 text-xs md:text-base">
                © 2023 Superio by ib-themes. All Rights Reserved.
            </div>
        </div>

    );
};

export default ShortlistedJobs;