import React, { useState } from 'react';
import './TopCompany.css';
import logo1 from '../../../assets/marquee/com-1.png';
import logo2 from '../../../assets/marquee/com-2.png';
import logo3 from '../../../assets/marquee/com-3.png';
import logo4 from '../../../assets/marquee/com-4.png';
import logo5 from '../../../assets/marquee/com-5.png';
import logo6 from '../../../assets/marquee/com-6.png';
import logo7 from '../../../assets/marquee/com-7.png';
import logo8 from '../../../assets/marquee/com-8.png';
import logo11 from '../../../assets/marquee/com-11.png';
import SectionTitle from '../../../components/Shared/SectionTitle/SectionTitle';
import Container from '../../../components/Shared/Container/Container';

const TopCompany = () => {
    const companies = [
        {
            name: 'Facebook',
            logo: logo1,
        },
        {
            name: 'Microsoft',
            logo: logo2,
        },
        {
            name: 'Netflix',
            logo: logo3,
        },
        {
            name: 'Airbnb',
            logo: logo4,
        },
        {
            name: 'Amazon',
            logo: logo7,
        },
        {
            name: 'Spotify',
            logo: logo6,
        },
        {
            name: 'Intel',
            logo: logo5,
        },
        {
            name: 'LinkedIn',
            logo: logo8,
        },
        {
            name: 'Paypal',
            logo: logo11,
        }
    ];

    const [isPaused, setIsPaused] = useState(false);

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    return (
        <Container>
            <SectionTitle heading="Top Companies"
                text="Industry Leaders Rely on Us">
            </SectionTitle>
            <div className="py-4">
                <div className="container mx-auto">
                    <div
                        className="flex items-center overflow-hidden marquee-container"
                        onMouseEnter={togglePause}
                        onMouseLeave={togglePause}
                    >
                        <div
                            className={`marquee-content ${isPaused ? 'paused' : ''}`}
                        >
                            {companies.map((company, index) => (
                                <a key={index} href="#" className="sm:mr-0 md:mr-4 lg:mr-8">
                                    <div className="logo-card transition-transform transform hover:scale-110">
                                        <img
                                            src={company.logo}
                                            alt={`${company.name} Logo`}
                                            className="h-auto w-auto mx-auto object-cover"
                                        />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TopCompany;
