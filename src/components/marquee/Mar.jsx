import React from 'react';
import Marquee from 'react-fast-marquee';

const Mar = async () => {
    const response = await fetch("https://tiles-gallery-green.vercel.app/data.json");
    const data = await response.json();
    const featuredTiles = data.slice(0, 8);

    return (
        <div className="w-full">
            <div className="bg-[#F3F3F3] p-3 md:p-4">
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
                    <div className="w-full md:w-auto shrink-0 flex justify-center md:block">
                        <button className="bg-[#D72050] py-2 md:py-1 px-4 md:px-6 font-medium text-[16px] md:text-[20px] leading-7.5 tracking-[0%] text-[#FFFFFF] w-full md:w-auto">
                            Latest Products
                        </button>
                    </div>

                    <div className="w-full flex-1 overflow-hidden">
                        <Marquee pauseOnHover={true} speed={100} gradient={false}>
                            {featuredTiles.map((item) => {
                                return (
                                    <p 
                                        key={item.id} 
                                        className="font-semibold text-[14px] md:text-[18px] leading-6 md:leading-7.5 tracking-[0%] text-[#403F3F] px-4"
                                    >
                                        New Arrivals: {item.title} | Feature: {item.category} {item.material} | Join the Community..
                                    </p>
                                )
                            })}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mar;