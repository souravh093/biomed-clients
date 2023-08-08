import React from 'react';
import TopCompany from './TopCompany/TopCompany';
import Categorys from './categorys/Categorys';
import TrendingJobs from './TrendingJobs/TrendingJobs';

const Home = () => {
    return (
        <div>
            <TrendingJobs />
            <Categorys />
            <TopCompany />
        </div>
    );
};

export default Home;