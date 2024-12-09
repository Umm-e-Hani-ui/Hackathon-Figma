import React from "react";
import Image from "next/image";
import Gray from "./../public/images/Gray.jpg"
import Chair from "./../public/images/Chair.jpg"
import Orange from "./../public/images/Orange.jpg"
import Whitetufted from "./../public/images/White tufted.jpg"
import Instagram1 from "./../public/images/Instagram1.jpg"
import Vintagewhite from "./../public/images/Vintage white.jpg"

const Instagram = () => {
  return (
    <div className="w-full h-auto bg-[#F0F2F3]">
      <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-6">
        <h2 className="font-bold text-[50px] mt-4">
          Or Subscribe to the Newsletter
        </h2>
        <div className="flex justify-center items-center gap-16">
          <div className="flex flex-col items-start mt-12">
            <span className="text-[#8F9499] text-[16px] font-semibold mb-2 ml-3">
              Email address...
            </span>
            <div className="w-[643px] h-[2px] bg-black"></div>
          </div>
          <div className="flex flex-col items-center mt-12">
            <span className="text-[16px] font-normal mb-2">SUBMIT</span>
            <div className="w-[91px] h-[2px] bg-black"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        <h2 className="text-[50px] font-bold text-center">
          Follow Products and Discounts on Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pb-24">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={Gray}
              alt="Instagram product 1"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={Chair}
              alt="Instagram product 2"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={Orange}
              alt="Instagram product 3"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={Whitetufted}
              alt="Instagram product 4"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={Instagram1}
              alt="Instagram product 5"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={Vintagewhite}
              alt="Instagram product 6"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;