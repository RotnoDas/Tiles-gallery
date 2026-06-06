import Image from 'next/image';
import React from 'react';

const DetailsPage = async({ params }) => {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const response = await fetch("https://tiles-gallery-green.vercel.app/data.json");
    const data = await response.json();
    const specificTiles = data.find((tiles) => {
        return tiles.id === id;
    })

    if (!specificTiles) {
        return (
            <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="rounded-3xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Tile not found</p>
                    <h1 className="mt-3 text-2xl sm:text-3xl font-black text-gray-950">This tile is no longer available.</h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-600">
                        Please return to the collection and choose another tile.
                    </p>
                </div>
            </main>
        );
    }

    const tags = [
        specificTiles.category,
        specificTiles.material,
        specificTiles.inStock ? 'In Stock' : 'Out of Stock',
        specificTiles.title.toLowerCase().includes('blue') ? 'Blue' : null,
        specificTiles.title.toLowerCase().includes('minimal') || specificTiles.description.toLowerCase().includes('minimal') ? 'Minimalist' : null,
    ].filter(Boolean);

    return (
        <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <section className="mb-8 md:mb-10 text-center lg:text-left">
                <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                    Tile details
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950">
                    {specificTiles.title}
                </h1>
                <p className="mt-3 max-w-3xl text-sm sm:text-base md:text-lg text-gray-600 mx-auto lg:mx-0">
                    Explore this tiles unique finish and character. Review detailed images, design notes, and precise material specs to help bring your vision to life.
                </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
                    <div className="relative aspect-4/3 w-full bg-gray-50">
                        <Image
                            src={specificTiles.image}
                            alt={specificTiles.title}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 bg-white px-4 sm:px-6 py-4">
                        <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                            {specificTiles.category}
                        </span>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                            {specificTiles.currency}
                        </span>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${specificTiles.inStock ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                            {specificTiles.inStock ? 'Available' : 'Unavailable'}
                        </span>
                    </div>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 md:p-8 shadow-lg">
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Creator</p>
                            <p className="mt-2 text-lg sm:text-xl font-bold text-gray-950">Tiles Gallery Studio</p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Style Description</p>
                            <p className="mt-2 text-sm sm:text-base leading-7 text-gray-600">
                                {specificTiles.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Price</p>
                                <p className="mt-2 text-2xl font-black text-gray-950">
                                    {specificTiles.currency} {specificTiles.price.toFixed(2)}
                                </p>
                            </div>
                            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Dimensions</p>
                                <p className="mt-2 text-2xl font-black text-gray-950">{specificTiles.dimensions}</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Tags</p>
                            <div className="mt-3 flex flex-wrap gap-3">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl bg-linear-to-r from-gray-950 to-gray-800 px-5 py-4 text-white">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Details</p>
                            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                <p><span className="font-semibold text-white/80">Category:</span> {specificTiles.category}</p>
                                <p><span className="font-semibold text-white/80">Material:</span> {specificTiles.material}</p>
                                <p><span className="font-semibold text-white/80">Stock:</span> {specificTiles.inStock ? 'Yes' : 'No'}</p>
                                <p><span className="font-semibold text-white/80">ID:</span> {specificTiles.id}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DetailsPage;