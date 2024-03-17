
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import Button from '../ui/Button';

export default function HomePageSlide() {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': 'pink',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg "
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide className="text">
                    <div className="cl" data-swiper-parallax="-100">
                        "Welcome to a place where words create worlds, and every scroll unveils a new chapter of inspiration.
                        Make yourself at home, where stories unfold and ideas flourish. Your journey through words begins here."
                    </div>
                    <div className="title" data-swiper-parallax="-300">

                        "Writing is the painting of the voice."
                    </div>

                    <div className="subtitle" data-swiper-parallax="-200">
                        -Voltaire
                    </div>

                    <div className="subtitle flex gap-6 mt-5" data-swiper-parallax="-100">
                        <Button text={" Read More"} />
                        <Button text={" Join Community "} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='text' >
                    <div className="title" data-swiper-parallax="-300">
                        Slide 2
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="subtitle flex gap-6 mt-5" data-swiper-parallax="-100">
                        <Button text={" Read More"} />
                        <Button text={" Join Community "} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
