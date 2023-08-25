import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import CategoryMenu from './CategoryMenu/CategoryMenu';
import FrequentlyAskQuestion from './FrequentlyAskQuestion/FrequentlyAskQuestion';
import PreferenceJobs from './PreferenceJobs/PreferenceJobs';
import TopCompany from './TopCompany/TopCompany';
import TrendingJobs from './TrendingJobs/TrendingJobs';
import Categorys from './categorys/Categorys';
import RecentJob from './RecentJob/RecentJob';

const Home = () => {
    return (
        <div>
            <CategoryMenu />
            <Banner />
            <TrendingJobs />
            <Categorys />
            <RecentJob/>
            <AboutUs/>
            <TopCompany />
            <PreferenceJobs />
            <FrequentlyAskQuestion />
        </div>
    );
};

export default Home;