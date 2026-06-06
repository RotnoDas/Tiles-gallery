import React from 'react';
import TilesCard from '../tilesCard/TilesCard';

const Feature = async() => {
    const response = await fetch("https://tiles-gallery-green.vercel.app/data.json");
    const data = await response.json();
    const featuredTiles = data.slice(0, 8);
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-6">Featured Tiles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate__zoomIn">
                {
                    featuredTiles.map((tiles) => {
                        return (
                            <TilesCard key={tiles.id} tiles={tiles}></TilesCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Feature;