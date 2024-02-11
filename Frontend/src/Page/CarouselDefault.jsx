import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const CarouselDefault = () => {
    const Images = [
        [
            { imgURL: img1, text: <p>Lower <br/> Interest Rate</p> },
            { imgURL: img2, text: <p>Interest <br/> Fee payments</p> },
            { imgURL: img3, text: <p>Discount on <br/> Materials</p> }
        ],
        [
            { imgURL: img1, text: <p>Lower <br/> Interest Rate</p> },
            { imgURL: img2, text: <p>Interest <br/> Fee payments</p> },
            { imgURL: img3, text: <p>Discount on <br/> Materials2</p> }
        ],
        [
            { imgURL: img1, text: <p>Lower <br/> Interest Rate</p> },
            { imgURL: img2, text: <p>Interest <br/> Fee payments</p> },
            { imgURL: img3, text: <p>Discount on <br/> Materials3</p> }
        ],
    ];

    const [imgIndex, setImgIndex] = useState(0);

    const nextSlide = () => {
        setImgIndex((prevIndex) => (prevIndex + 1) % Images.length);
    };

    const prevSlide = () => {
        setImgIndex((prevIndex) => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
    };

    return (
        <div style={{ maxWidth: "1200px", width: "100%", margin: '0 auto', position: "relative" }}>
            <div className='flex'>
                {Images[imgIndex].map((item, index) => (
                    <div key={index} className='px-4'>
                        <img src={item.imgURL} alt="" className='img-slider-img' width={300}/>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className='img-slider-btn left absolute top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 cursor-pointer text-white'>
                <FaArrowLeft />
            </button>
            <button onClick={nextSlide} className='img-slider-btn right-0 absolute top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 cursor-pointer text-white' >
                <FaArrowRight />
            </button>
        </div>
    );
};

export default CarouselDefault;
