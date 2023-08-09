import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import CategoryMenu from './CategoryMenu/CategoryMenu';
import TopCompany from './TopCompany/TopCompany';
import TrendingJobs from './TrendingJobs/TrendingJobs';
import Categorys from './categorys/Categorys';
<<<<<<< HEAD
import FrequentlyAskQuestion from './FrequentlyAskQuestion/FrequentlyAskQuestion';
=======
import PreferenceJobs from './PreferenceJobs/PreferenceJobs';
>>>>>>> 55587f7dc0ae7e36e623c384240aebdc8695d420

const Home = () => {
    return (
        <div>
            <CategoryMenu/>
            <Banner />
            <TrendingJobs />
            <Categorys />
            <AboutUs/>
            <TopCompany />
<<<<<<< HEAD
            <FrequentlyAskQuestion />
=======
            <PreferenceJobs />
>>>>>>> 55587f7dc0ae7e36e623c384240aebdc8695d420
        </div>
    );
};

export default Home;