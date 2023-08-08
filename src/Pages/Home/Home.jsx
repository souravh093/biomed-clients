import React from 'react';
import Banner from './Banner/Banner';
import TopCompany from './TopCompany/TopCompany';
import TrendingJobs from './TrendingJobs/TrendingJobs';
import Categorys from './categorys/Categorys';
import FrequentlyAskQuestion from './FrequentlyAskQuestion/FrequentlyAskQuestion';

const Home = () => {
    return (
        <div>
            <Banner />
            <TrendingJobs />
            <Categorys />
            <TopCompany />
            <FrequentlyAskQuestion />
        </div>
    );
};

export default Home;