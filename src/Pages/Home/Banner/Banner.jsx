import React from 'react';
import Container from '../../../components/Shared/Container/Container';

const Banner = () => {
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2'>

                <div className=' md:px-10'>
                <h1 className='md:text-5xl text-2xl font-semibold  lg:mt-36 text-slate-700'>Hire the best freelancers for any job, online.</h1>
                <p className='md:my-10'>Millions of people use freeio.com to turn their ideas into reality.</p>
                <button className='bg-green-400 p-2 md:p-5 hover:bg-green-900 rounded-lg text-white'>Find Work</button>
                </div>

                <div className='p-2'>
                    <img src="https://demoapus1.com/freeio/wp-content/uploads/2022/09/h4.png" alt="" />
                </div>

            </div>
        </Container>
    );
};

export default Banner;