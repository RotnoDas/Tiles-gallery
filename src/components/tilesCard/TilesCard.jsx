import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesCard = ({ tiles }) => {
    // Destructure data
    const {
        title,
        description,
        image,
        category,
        price,
        currency,
        dimensions,
        material,
        inStock
    } = tiles;

    return (
        <Card className="
            group 
            w-full 
            max-w-sm sm:max-w-none mx-auto
            border 
            border-gray-100
            shadow-lg 
            rounded-3xl 
            overflow-hidden 
            bg-white
            transition-all 
            duration-500 
            ease-out-quad
            hover:shadow-2xl 
            hover:border-gray-200
            hover:-translate-y-2
        ">

            {/* Image Container */}
            <div className="relative w-full h-56 sm:h-48 md:h-64 lg:h-56 overflow-hidden bg-gray-50 p-2">
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="
                            object-cover 
                            transition-transform 
                            duration-700 
                            ease-out
                            group-hover:scale-105
                        "
                        sizes="(max-width: 768px) 100vw, 360px"
                    />
                </div>

                {/* Top-Left: Category */}
                <div className="absolute top-4 left-4 z-10">
                    <Chip
                        size="sm"
                        variant="faded"
                        color="secondary"
                        className="capitalize backdrop-blur-md bg-white/70 font-semibold shadow-sm text-secondary-700"
                    >
                        {category}
                    </Chip>
                </div>

                {/* Top-Right: Stock Status */}
                <div className="absolute top-4 right-4 z-10">
                    {inStock ? (
                        <div className="flex items-center gap-1.5 backdrop-blur-md bg-green-100/70 py-1 px-3 rounded-full border border-green-200">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-bold text-green-900 uppercase">Available</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1.5 backdrop-blur-md bg-red-100/70 py-1 px-3 rounded-full border border-red-200">
                            <span className="relative flex h-2 w-2">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="text-xs font-bold text-red-900 uppercase">Unavailable</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <Card.Content className="px-4 flex flex-col gap-1">
                <div className="space-y-1">
                    {/* Title size reduced to text-lg and font-bold */}
                    <h2 className="text-lg font-bold tracking-tight text-gray-950 truncate transition-colors group-hover:text-primary-600" title={title}>
                        {title}
                    </h2>

                    <p className="text-sm text-gray-500 line-clamp-2 min-h-10 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Architectural Specs */}
                <div className="flex flex-wrap items-center gap-2 mt-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold bg-slate-100 border border-slate-200 py-1.5 px-3 rounded-lg flex-1 sm:flex-none justify-center">
                        <span className="text-sm text-slate-500">⛶</span> <span className="truncate">{dimensions}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-amber-900 font-semibold bg-amber-50 border border-amber-200 py-1.5 px-3 rounded-lg flex-1 sm:flex-none justify-center">
                        <span className="text-sm">🧱</span> <span className="truncate">{material}</span>
                    </div>
                </div>
            </Card.Content>

            {/* Footer Section */}
            <Card.Footer className="px-4 sm:px-6 py-4 flex flex-wrap gap-3 justify-between items-center bg-gray-50/50 border-t border-gray-100 mt-2">
                {/* Simplified Price Display */}
                <div className="flex flex-col">
                    <span className="text-[11px] text-slate-500 font-bold uppercase tracking-widest leading-none mb-1">
                        Price
                    </span>
                    <span className="text-lg font-bold text-slate-900">
                        ${price.toFixed(2)}
                    </span>
                </div>

                {/* View Details Button */}
                <Link href={`/all-tiles/${tiles.id}`}>
                    <Button
                        radius="full"
                        size="sm"
                        className="bg-black text-white font-semibold px-4 shadow-md hover:bg-gray-800"
                    >
                        View Details
                    </Button>
                </Link>
            </Card.Footer>

        </Card>
    );
};

export default TilesCard;