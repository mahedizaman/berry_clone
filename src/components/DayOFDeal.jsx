import React from 'react'
import Container from './Container'
import cartData from '@/data/cartData';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { Eye, Heart, Share, ShoppingCart } from 'lucide-react';

const DayOFDeal = () => {
    return (
        <Container className="mb-20">
            <div className="mb-6">
                <h3 className="text-gray-700 font-semibold text-2xl">
                    Day of the <span className="text-purple-500">Deal</span>
                </h3>
                <p className="text-gray-500 text-sm">
                    Don’t wait. The time will never be just right.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cartData.map((item, index) => (
                    <div
                        key={item.id || index}
                        className="border rounded-lg overflow-hidden group"
                    >
                        <div className="relative overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.heading}
                                width={320}
                                height={450}
                                className="w-full h-auto cursor-pointer object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 "
                            />

                            <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-3 
    opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
    transition-all duration-300 ease-in-out">

                                <Link href={`/wishlist/${item.id}`} className="bg-purple-100 p-2 rounded-xl hover:bg-purple-500 hover:text-white transition transform hover:scale-110">
                                    <Heart size={20} />
                                </Link>
                                <Link href={`/product/${item.id}`} className="bg-purple-100 p-2 rounded-xl hover:bg-purple-500 hover:text-white transition transform hover:scale-110">
                                    <Eye size={20} />
                                </Link>
                                <Link href={`/share/${item.id}`} className="bg-purple-100 p-2 rounded-xl hover:bg-purple-500 hover:text-white transition transform hover:scale-110">
                                    <Share size={20} />
                                </Link>
                                <Link href={`/cart/add/${item.id}`} className="bg-purple-100 p-2 rounded-xl hover:bg-purple-500 hover:text-white transition transform hover:scale-110">
                                    <ShoppingCart size={20} />
                                </Link>
                            </div>

                        </div>

                        <div className="p-4 flex flex-col gap-2 border-t-2 py-8">
                            <div className="flex justify-between text-gray-500 text-sm">
                                <p>{item.category}</p>
                                <p>{item.rating}</p>
                            </div>
                            <h4 className="font-medium text-gray-500">{item.heading}</h4>
                            <p className='font-semibold text-gray-500'>{`$${item.price}`}</p>
                            <Button className="bg-purple-50 border text-gray-600 hover:bg-purple-400 transition duration-300 ease-in">
                                Add to cart
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default DayOFDeal;
