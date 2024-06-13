import React, { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Image from "next/image";

interface Image {
    src: string;
    alt: string;
    width: number;
    height: number;
}

interface SliderModalProps {
    images: Image[];
    index: number;
    onClose: () => void;
}

const SliderModal = ({ images, index, onClose } : SliderModalProps) => {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
      <div className="relative w-full h-full">
        <Swiper initialSlide={index} className="w-full h-full">
          {images.map((image, i) => (
            <SwiperSlide key={i} className="w-full h-full flex justify-center items-center">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="contain"
                className="w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute w-2 h-2 z-50 top-5 right-5 text-white"
          onClick={onClose}
        >
           <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block rounded-full absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  "rotate-45 -translate-y-1.5"
                }`}
              ></span>
              <span
                className={`block rounded-full absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  "-rotate-45 -translate-y-1.5"
                }`}
              ></span>
            </div>
        </button>
      </div>
    </div>
  );
};

export default SliderModal;
