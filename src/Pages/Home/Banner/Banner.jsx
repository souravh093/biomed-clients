import React from "react";
import Container from "../../../components/Shared/Container/Container";
import { Player } from '@lottiefiles/react-lottie-player';


const Banner = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="md:text-3xl lg:text-6xl text-2xl  py-5 md:mt-4 font-semibold  lg:mt-36 text-slate-700">
            Hire the best freelancers for any job, online.
          </h1>
          <p className="md:my-2 font-semibold  pb-3 ">
            Millions of people use BIOMED. to turn their ideas into reality.
          </p>
          <button className="bg-green-400 p-2 md:py-4 md:px-10 font-medium hover:bg-[#4ca068] rounded-lg text-white">
            Find Work
          </button>
        </div>

        <div className="p-2">
          <Player
            src="banner.json"
            className="player"
            loop
            autoplay
            style={{ height: '700px', width: '700px' }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
