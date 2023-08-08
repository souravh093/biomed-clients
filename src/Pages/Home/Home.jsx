import React from 'react';
import TopCompany from './TopCompany/TopCompany';
import TrendingJobs from './TrendingJobs/TrendingJobs';
import Categorys from './categorys/Categorys';

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