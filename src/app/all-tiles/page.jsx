import React from 'react';

const AllTilesPage = async() => {
    const response = await fetch("https://tiles-gallery-green.vercel.app/data.json");
    const data = await response.json();
    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-6">Our Collection</h1>
        </div>
    );
};

export default AllTilesPage;