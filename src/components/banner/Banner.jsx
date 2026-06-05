import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
            {/* Overlay */}
            <div className="w-full h-full rounded-lg bg-black/60 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white w-full">
                    
                    {/* Store Identity */}
                    <p className="text-sm md:text-base font-semibold uppercase tracking-widest text-stone-300 mb-2">
                        Tiles Gallery
                    </p>
                    
                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl leading-tight">
                        Discover Your Perfect Aesthetic
                    </h1>
                    
                    {/* Supporting Text */}
                    <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                        Explore our premium collection of floor and wall tiles designed to elevate every room in your home.
                    </p>

                    {/* Call to Action */}
                    <div className="flex gap-4">
                        <Link href="/all-tiles">
                            <Button className="bg-stone-100 text-stone-900 font-semibold hover:bg-white px-8">
                                Browse Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;