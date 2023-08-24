import React from 'react';

const SearchForm = () => {
    return (
        <div className="lg:flex">
            <div className="border rounded-lg p-4 max-w-2xl">
                <form className="space-y-4">
                    <div className=" flex flex-col lg:flex-row lg:flex lg:items-center lg:space-x-4 gap-2 lg:gap-0">
                        <div className="flex-grow">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="filter-title"
                                    placeholder="What are you looking for?"
                                    className="w-full py-2 pl-5 pr-4 outline-none rounded-lg border-r"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <select
                                name="filter-category"
                                id="XBpUo_category"
                                className="w-full dark:bg-slate-800 py-2 pl-2 pr-8 rounded-lg outline-none"
                            >
                                <option value="">Categories</option>
                                <option value="47">Design & Creative</option>
                                <option value="46">Development & IT</option>
                                <option value="48">Digital Marketing</option>
                                <option value="51">Finance & Accounting</option>
                                <option value="53">Programming & Tech</option>
                                <option value="55">Trending</option>
                                <option value="54">Writing & Translation</option>
                            </select>
                        </div>
                        <div className="flex-shrink">
                            <button
                                type="submit"
                                className="px-10 w-full py-4 bg-primary text-white rounded-md hover:bg-hover focus:outline-none focus:ring focus:border-focus focus:ring-opacity-50 "
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchForm;
