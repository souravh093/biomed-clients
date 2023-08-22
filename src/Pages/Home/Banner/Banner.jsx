import { Player } from '@lottiefiles/react-lottie-player';
import React from "react";
import Container from "../../../components/Shared/Container/Container";
import SearchForm from "../../Shared/Header/SearchForm/SearchForm";

const Banner = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-center">
        <div>
          <div className="flex flex-col h-full justify-center">
            <h1 className="md:text-3xl lg:text-6xl text-2xl py-5 md:mt-4 font-semibold text-slate-700">
              Hire the Popular Freelancers for Job, Online!
            </h1>
            <p className="md:my-2 font-semibold pb-3">
              Millions of people use BIOMED. to turn their ideas into reality.
            </p>
            <SearchForm />
          </div>
        </div>

        <div className="hidden md:block">
          <Player
            src="banner.json"
            className="player"
            loop
            autoplay
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
