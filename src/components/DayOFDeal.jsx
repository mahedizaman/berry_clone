"use client";

import React from 'react';
import Container from './Container';
import cartData from '@/data/cartData';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, Heart, Share, ShoppingCart } from 'lucide-react';

const DayOFDeal = () => {
    const router = useRouter();

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
                {cartData.map((item) => (
                    <div key={item.id} className="border rounded-lg overflow-hidden group">
                        <Link
                            href={`/product/${item.id}`}
                            key={item.id}

                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.heading}
                                    width={320}
                                    height={450}
                                    className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                                />

                                <div
                                    className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-3 
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-300 ease-in-out"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {[
                                        { icon: Heart, link: `/wishlist/${item.id}` },
                                        { icon: Eye, link: `/product/${item.id}` },
                                        { icon: Share, link: `/share/${item.id}` },
                                        { icon: ShoppingCart, link: `/cart/add/${item.id}` },
                                    ].map((btn, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-purple-100 p-2 rounded-xl hover:bg-purple-500 hover:text-white transition transform hover:scale-110"
                                            onClick={() => router.push(btn.link)}
                                        >
                                            <btn.icon size={20} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Link>
                        <div className="p-4 flex flex-col gap-2 border-t-2 py-8">
                            <div className="flex justify-between text-gray-500 text-sm">
                                <p>{item.category}</p>
                                <p>{item.rating}</p>
                            </div>
                            <h4 className="font-medium text-gray-500">{item.heading}</h4>
                            <p className='font-semibold text-gray-500'>{`$${item.price}`}</p>
                            <Button
                                disabled={item.available === 0}
                                className={`
    border transition ease-in
    ${item.available === 0
                                        ? "bg-gray-400 text-gray-500 cursor-not-allowed"
                                        : "bg-purple-50 text-gray-600 hover:bg-purple-400 cursor-pointer"
                                    }
  `}
                            >
                                Add to cart
                            </Button>

                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default DayOFDeal;
