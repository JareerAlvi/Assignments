"use client"
import React, { useState } from "react";
import { Button } from "../ui/button";
import { link } from "fs";
import Link from "next/link";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  
 

  return (
    <>
     
      <div className="relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <Button className="mx-32 rounded-lg bg-blue-100 text-blue-700 font-bold hover:bg-blue-700 hover:text-blue-100">Sale 70%</Button>
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl pt-16">
                  An Industrial Take on Streetwear
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                Dine Market, A vibrant cloth market pulsates with the essence of diverse fabrics, colors, and textures, creating a tapestry of choices for consumers.
                </p>
                <ul className="flex flex-wrap items-center mx-16 pt-8">
                  
                  <Button href="/all-products" className="bg-neutral-900 text-white px-6 py-6 gap-2 hover:bg-white hover:text-neutral-700"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</div>Start Shopping</Button>
                  
                
                </ul>
                <div className="clients pt-16">
               
                  <div className="flex items-center space-x-4">
                    <SingleImage
                      href="#"
                      imgSrc="./Hackathon-2/Featured1.webp"
                    />

                    <SingleImage
                      href="#"
                      imgSrc="./Hackathon-2/Featured2.webp"
                    />

                    <SingleImage
                      href="#"
                      imgSrc="./Hackathon-2/Featured3.webp"
                    />

                    <SingleImage
                      href="#"
                      imgSrc="./Hackathon-2/Featured4.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-0 lg:pt-0">
                <div className="group rounded-full bg-red-100 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
  <img
    width="800"
    height="600"
    src="./Hackathon-2/HeroPage.webp"
    alt="hero"
    className="max-w-full lg:ml-auto"
  />
</div>

                
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

const SingleImage = ({ href, imgSrc }:{href:string;imgSrc:string}) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};



const ListItem = ({ children, NavLink }:{children:React.ReactNode;NavLink:string}) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
