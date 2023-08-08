import React from 'react';
import Banner from './Banner/Banner';
import TopCompany from './TopCompany/TopCompany';
import TrendingJobs from './TrendingJobs/TrendingJobs';
import Categorys from './categorys/Categorys';

const Home = () => {
    return (
        <div>
            <Banner />
            <TrendingJobs />
            <Categorys />
            <TopCompany />
        </div>
    );
};

export default Home;