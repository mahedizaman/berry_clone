import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <Carousel className="w-full max-w-7xl  mx-auto mb-40">
      <CarouselContent className="flex-1 mx-auto ">
        <CarouselItem className="flex flex-col md:flex-row items-center justify-between border-2 rounded-xl gap-4 py-6">
          <div className="flex flex-col items-start justify-between gap-4">
            <h4 className="text-purple-400 font-semibold text-sm bg-gray-100 px-2 py-1 rounded-md">
              Flat sale 20% off
            </h4>
            <h2 className="text-4xl font-semibold">New Year Eve discount</h2>
            <p className="text-gray-500">
              Get discount in your most favorite brands and products.
            </p>
            <p>Use code: BERRY for 20% OFF</p>
            <Button>Shop Now</Button>
          </div>
          <div>
            <Image
              src="/assets/images/hero/eveDis.png"
              alt="eve_discount"
              width={700}
              height={700}
              className="object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </CarouselItem>

        <CarouselItem className="flex flex-col md:flex-row items-center justify-between border-2 rounded-xl gap-4 py-6">
          <div className="flex flex-col items-start justify-between gap-4">
            <h4 className="text-purple-400 font-semibold text-sm bg-gray-100 px-2 py-1 rounded-md">
              Flat sale 15% off
            </h4>
            <h2 className="text-4xl font-semibold">Ongoing Flash Sale</h2>
            <p className="text-gray-500">
              Get discount in your most favorite brands and products.
            </p>
            <p>Use code: BERRY for 15% OFF</p>
            <Button>Shop Now</Button>
          </div>
          <div>
            <Image
              src="/assets/images/hero/flashSale.png"
              alt="eve_discount"
              width={700}
              height={700}
              className="object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </CarouselItem>

        <CarouselItem className="flex flex-col md:flex-row items-center justify-between border-2 rounded-xl gap-4 py-6">
          <div className="flex flex-col items-start justify-between gap-4">
            <h4 className="text-purple-400 font-semibold text-sm bg-gray-100 px-2 py-1 rounded-md">
              Flat sale 35% off
            </h4>
            <h2 className="text-4xl font-semibold">New Year Eve offer</h2>
            <p className="text-gray-500">
              Get discount in your most favorite brands and products.
            </p>
            <p>Use code: BERRY for 35% OFF</p>
            <Button>Shop Now</Button>
          </div>
          <div>
            <Image
              src="/assets/images/hero/eveOffer.png"
              alt="eve_discount"
              width={700}
              height={700}
              className="object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext className="absolute right-4" />
      <CarouselPrevious className="absolute left-4" />
    </Carousel>
  );
};

export default Hero;
