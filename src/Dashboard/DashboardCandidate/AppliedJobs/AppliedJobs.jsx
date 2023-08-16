import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaEye, FaRegTrashAlt } from "react-icons/fa";

const AppliedJobs = () => {

    const { isLoading, data: appliedJobs = [] } = useQuery({
        queryKey: ["appliedJobs"],
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
            <div className="p-12">
                <h1 className="text-3xl font-semibold">Applied jobs!</h1>
                <p className="mt-2 text-gray-600 text-lg">Ready to jump back in?</p>
            </div>
            <div className="bg-white shadow-md p-8 mx-10 rounded-2xl">
                <h2 className="text-xl font-semibold pb-10">My Applied Jobs</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 text-green-400">
                        <tr>
                            <th className="py-5 text-left text-lg ps-5">Job title</th>
                            <th className="py-5 text-left text-lg">Date applied</th>
                            <th className="py-5 text-left text-lg">Status</th>
                            <th className="py-5 text-left text-lg">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {

                            appliedJobs.map(singleJob => <tr key={singleJob._id}>

                                <td className="py-4">
                                    <div className="flex items-center">
                                        <img
                                            src={singleJob.image}
                                            alt="Job"
                                            className="w-14 h-14 rounded-xl mr-4"
                                        />
                                        <div>
                                            <p className="font-semibold text-lg">{singleJob.title}</p>
                                            <div className="flex mt-1 text-gray-600">
                                                <FaBriefcase className="w-4 h-4 mr-2" /> <p>{singleJob.heading}</p>
                                                <FaMapMarkerAlt className="w-4 h-4 mx-2" /> <p>{singleJob.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4">{singleJob.date}</td>
                                <td className="py-4">{singleJob.status}</td>
                                <td className="py-4">
                                    <div className="flex space-x-2">
                                        <span className="bg-gray-100 p-2 rounded-lg"><FaEye className="w-4 h-4" /></span>
                                        <span className="bg-gray-100 p-2 rounded-lg"><FaRegTrashAlt className="w-4 h-4" /></span>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="my-20 text-center text-gray-600">
                © 2023 Superio by ib-themes. All Rights Reserved.
            </div>
        </div>
    );
};

export default AppliedJobs;
