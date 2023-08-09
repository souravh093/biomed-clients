import React from 'react';
import Banner from './Banner/Banner';
import TopCompany from './TopCompany/TopCompany';
import TrendingJobs from './TrendingJobs/TrendingJobs';
import Categorys from './categorys/Categorys';
import PreferenceJobs from './PreferenceJobs/PreferenceJobs';

const Home = () => {
    return (
        <div>
            <Banner />
            <TrendingJobs />
            <Categorys />
            <TopCompany />
            <PreferenceJobs />
        </div>
    );
};

export default Home;