import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TrendingJobs.css";

// Required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

const TrendingJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("TrendingJobsData/trendingJobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <>
      <SectionTitle
        heading={"Trending Jobs"}
        text={"Most viewed and all-time top Jobs"}
      />
      <div className="bg-slate-50 dark:bg-slate-700 w-full px-4 mx-auto">
        <Swiper
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, FreeMode, Navigation, Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
        >
          {jobs.map((job) => (
            <SwiperSlide className="border rounded-xl" key={job._id} job={job}>
              <img className="rounded-t-xl w-full" src={job.job_image} alt="" />
              <div className="p-2 h-100 overflow-hidden space-y-2">
                <h2 className="text-base text-gray-500">{job.job_title}</h2>
                <p className="mb-1 text-xl font-semibold hover:text-[#5BBB7B] hover:underline duration-500 cursor-pointer">
                  {`${job.job_text.slice(0, 50)}...`}
                </p>
                <p className="text-lg">
                  Location:{" "}
                  <span className="text-gray-500">{job.location}</span>
                </p>
                <hr className="mx-10 my-2 border-t border-gray-300" />
              </div>

              <div className="flex justify-between items-center p-2">
                <div className="flex items-center gap-2 hover:text-[#5BBB7B] duration-500 cursor-pointer">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={job.ceo_image}
                    alt=""
                  />
                  <p className="text-lg">{job.ceo_name}</p>
                </div>
                <p className="text-lg">
                  <span className="text-gray-500">Salary:</span> {job.salary}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TrendingJobs;
