import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '../../../assets/carousel-1.jpg'
import image2 from '../../../assets/carousel-2.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Slider = () => {

    const { data: sliders = [], isLoading } = useQuery({
        queryFn: () => getSliders(),
        queryKey: ['slider']
    })



    const getSliders = async () => {
        const data = await axios.get('http://localhost:5000/slides')

        return data.data
    }


    if (isLoading) {
        return <div className="text-center flex flex-col justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>

        </div>
    }

    console.log(sliders)


    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
         
        
             <SwiperSlide className='relative'  >

            <div>
                <img  className='rounded-lg' src={image1} alt="" />
            </div>

            <div className='absolute'>


                <div className='text-white'>

                    <h1 className="text-xl lg:text-6xl "> We Provide Best AC Repair <br /> Services </h1>

                    <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit <br /> clita duo justo erat amet</p>
                
                </div>

               
                    <button className='btn mt-10 text-white bg-orange-500 hover:bg-blue-800 '> Explore More </button>
             
            </div>

        </SwiperSlide>
             <SwiperSlide className='relative'  >

            <div>
                <img  className='rounded-lg' src={image2} alt="" />
            </div>

            <div className='absolute'>


                <div className='text-white'>

                    <h1 className="text-2xl lg:text-6xl "> We Provide Best AC Repair <br /> Services </h1>

                    <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit <br /> clita duo justo erat amet</p>
                
                </div>

               
                    <button className='btn mt-10 text-white bg-orange-500 hover:bg-blue-800 '> Explore More </button>
             
            </div>

        </SwiperSlide>
         

        


        </Swiper>
    );
};

export default Slider;