// import TilesCard from '@/components/tilesCard/TilesCard';
// import React from 'react';

// const AllTilesPage = async() => {
//     const response = await fetch("https://tiles-gallery-green.vercel.app/data.json");
//     const data = await response.json();
//     return (
//         <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
//             <section className="mb-8 md:mb-10 text-center md:text-left">
//                 <p className="mb-2 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-gray-500">
//                     Explore the full catalog
//                 </p>
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950">
//                     Our Collection
//                 </h1>
//                 <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base md:text-lg text-gray-600 md:mx-0">
//                     Find the perfect foundation for your space. Dive into our full catalog of beautifully crafted ceramics, marbles, and mosaics in one easy-to-navigate gallery.
//                 </p>
//             </section>

//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {data.map((tiles) => {
//                     return (
//                         <TilesCard key={tiles.id} tiles={tiles}></TilesCard>
//                     )
//                 })}
//             </div>
//         </main>
//     );
// };

// export default AllTilesPage;


"use client";

import TilesCard from '@/components/tilesCard/TilesCard';
import React, { useState, useEffect } from 'react';
import { Input } from "@heroui/react";

const AllTilesPage = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const fetchTiles = async () => {
            const response = await fetch("https://tiles-gallery-green.vercel.app/data.json");
            const result = await response.json();
            setData(result);
        };
        fetchTiles();
    }, []);
    const filteredTiles = data.filter((tiles) =>
        tiles.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <section className="mb-8 md:mb-10 text-center md:text-left">
                <p className="mb-2 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Explore the full catalog
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950">
                    Our Collection
                </h1>
                <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base md:text-lg text-gray-600 md:mx-0">
                    Find the perfect foundation for your space. Dive into our full catalog of beautifully crafted ceramics, marbles, and mosaics in one easy-to-navigate gallery.
                </p>
            </section>

            <div className="mb-8 max-w-md">
                <Input
                    isClearable
                    type="text"
                    variant="bordered"
                    placeholder="Search tiles by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onClear={() => setSearchTerm("")}
                    className="w-full"
                />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredTiles.length > 0 ? (
                    filteredTiles.map((tiles) => {
                        return (
                            <TilesCard key={tiles.id} tiles={tiles}></TilesCard>
                        )
                    })
                ) : (
                    <div className="col-span-full py-10 text-center text-gray-500">
                        <p>No tiles found.</p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default AllTilesPage;