import slider1 from '../../../assets/banner/slider-1.jpg';
import slider2 from '../../../assets/banner/slider-2.jpg';
import slider3 from '../../../assets/banner/slider-3.jpg';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={slider1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="text-[#003366] text-3xl md:text-4xl"> <FaArrowAltCircleLeft /> </a>
                <a href="#slide2" className="text-[#003366] text-3xl md:text-4xl"> <FaArrowAltCircleRight /> </a>
            </div>
            <div className='absolute left-1/4 md:left-1/2 md:bottom-24 space-y-4 lg:space-y-7 mr-16 md:mr-20'>
                <h2 className='text-3xl md:text-5xl font-bold tracking-wide lg:leading-tight text-[#2396DC]'>Pick The Best Toy <br /> For Your Kid</h2>
                <p className='md:tracking-wide lg:leading-7 capitalize text-sm md:text-[18px] md:font-medium text-gray-600'>Enhance Your Child Development with Our Top-Pick Educational Toys, Sparking Curiosity and Joyful Learning Every Step of the Way</p>
                <button className='my-btn'>Read More</button>
            </div>                
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            <img src={slider2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="text-[#003366] text-3xl md:text-4xl"> <FaArrowAltCircleLeft /> </a>
                <a href="#slide3" className="text-[#003366] text-3xl md:text-4xl"> <FaArrowAltCircleRight /> </a>
            </div>
            <div className='absolute left-1/4 md:left-1/2 md:bottom-24 space-y-4 lg:space-y-7 mr-16 md:mr-20'>
                <h2 className='text-3xl md:text-5xl font-bold tracking-wide lg:leading-tight text-[#2396DC]'>Pick The Best Toy <br /> For Your Kid</h2>
                <p className='md:tracking-wide lg:leading-7 capitalize text-sm md:text-[18px] md:font-medium text-gray-600'>Enhance Your Child Development with Our Top-Pick Educational Toys, Sparking Curiosity and Joyful Learning Every Step of the Way</p>
                <button className='my-btn'>Read More</button>
            </div> 
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <img src={slider3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="text-[#003366] text-3xl md:text-4xl"> <FaArrowAltCircleLeft /> </a>
                <a href="#slide1" className="text-[#003366] text-3xl md:text-4xl"> <FaArrowAltCircleRight /> </a>
            </div>
            <div className='absolute left-1/4 md:left-1/2 md:bottom-24 space-y-4 lg:space-y-7 mr-16 md:mr-20'>
                <h2 className='text-3xl md:text-5xl font-bold tracking-wide lg:leading-tight text-[#2396DC]'>Pick The Best Toy <br /> For Your Kid</h2>
                <p className='md:tracking-wide lg:leading-7 capitalize text-sm md:text-[18px] md:font-medium text-gray-600'>Enhance Your Child Development with Our Top-Pick Educational Toys, Sparking Curiosity and Joyful Learning Every Step of the Way</p>
                <button className='my-btn'>Read More</button>
            </div> 
        </div> 
        </div>
    );
};

export default Banner;