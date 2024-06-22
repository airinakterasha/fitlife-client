import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';


const Banner = () => {

    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className="hero" style={{backgroundImage: 'url(https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content py-20 md:py-48">
                            <div className="max-w-xl">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Personal Training</h1>
                            <p className="mb-5">When it comes to achieving your fitness goals, sometimes a little personalized guidance can make a world of difference.</p>
                            <Link to='/all-classes'>
                                <button className="btn bg-[#F23B3F] text-white mt-5 border-none hover:bg-emerald-600">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero" style={{backgroundImage: 'url(https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content py-20 md:py-48">
                            <div className="max-w-xl">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Group Fitness Classes</h1>
                            <p className="mb-5">If you are looking for a fun and motivating way to achieve your fitness goals, look no further than the group fitness classes at the website</p>
                            <Link to='/all-classes'>
                                <button className="btn bg-[#F23B3F] text-white mt-5 border-none">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero" style={{backgroundImage: 'url(https://images.pexels.com/photos/1117493/pexels-photo-1117493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content py-20 md:py-48">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">24 hour access</h1>
                            <p className="mb-5">Unlock the Power of Convenience, We have 24-Hour Access power to our classes.</p>
                            <Link to='/all-classes'>
                                <button className="btn bg-[#F23B3F] text-white mt-5 border-none">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper> 
        </>
    )
}

export default Banner