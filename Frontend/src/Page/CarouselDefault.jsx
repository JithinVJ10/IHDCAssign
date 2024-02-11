import React, { useState } from 'react'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const CarouselDefault = () => {
    const Image = [
        {
            imgURL:img1,
            text : <p>Lower <br/> Interest Rate</p>

        },
        {
            imgURL:img2,
            text : <p>Interest <br/> Fee payments</p>
        },
        {
            imgURL:img3,
            text : <p>Discount on <br/> Materials</p>
        }
        
    ]
    const [ImgIndex,setImgIndex]= useState(0)
  return (
    <>
      <div style={{maxWidth:"1200px",width:"100%",margin:'0 auto'}}>
        <div className='flex'>
            {
                Image.map((item,index)=>{
                    return (
                        <>
                            <div key={index} className='px-4'>
                                <img src={item.imgURL} alt="" className='img-slider-img' width={300}/>
                                <p>{item.text}</p>
                            </div>
                        </>
                    )
                })
            }
        </div>
        <button>
        <FaArrowLeft/>
        </button>
        <button>
        <FaArrowRight/>
            
        </button>
      </div>
    </>
  )
}

export default CarouselDefault
