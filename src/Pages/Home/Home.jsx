import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import CategoryMenu from './CategoryMenu/CategoryMenu';
import TopCompany from './TopCompany/TopCompany';
import TrendingJobs from './TrendingJobs/TrendingJobs';
import Categorys from './categorys/Categorys';
import FrequentlyAskQuestion from './FrequentlyAskQuestion/FrequentlyAskQuestion';

const Home = () => {
    return (
        <div>
            <CategoryMenu/>
            <Banner />
            <TrendingJobs />
            <Categorys />
            <AboutUs/>
            <TopCompany />
            <FrequentlyAskQuestion />
        </div>
    );
};

export default Home;