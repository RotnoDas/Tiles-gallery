import React from 'react';
import Marquee from 'react-fast-marquee';

const Mar = async() => {
    const response = await fetch("https://tiles-gallery-green.vercel.app/data.json");
    const data = await response.json();
    const featuredTiles = data.slice(0, 8);
    return (
        <div>
            <div className='bg-[#F3F3F3] p-4'>
                <div className='flex items-center gap-5'>
                    <div>
                        <button className='bg-[#D72050] py-2.25 px-6 font-medium text-[20px] leading-7.5 tracking-[0%] text-[#FFFFFF]'>Latest Products</button>
                    </div>
                    <div>
                        <Marquee pauseOnHover={true} speed={100} gradient={false}>
                            {
                                featuredTiles.map((item) => {
                                    return(
                                        <p key={item.id} className='font-semibold text-[18px] leading-7.5 tracking-[0%] text-[#403F3F] px-4'>New Arrivals: {item.title} | Feature: {item.category} {item.material} | Join the Community..</p>
                                    )
                                })
                            }
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mar;