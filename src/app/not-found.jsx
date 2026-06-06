import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8 flex items-center justify-center bg-linear-to-b from-white to-gray-50">
            <section className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-white/95 px-6 py-10 text-center shadow-lg shadow-gray-200/60 sm:px-8 sm:py-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Page not found</p>
                <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-950">
                    404
                </h1>
                <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-950">
                    The page you are looking for does not exist.
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base md:text-lg leading-7 text-gray-600">
                    Return to the gallery and continue exploring our tile collection, featured designs, and account pages.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/"
                        className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/all-tiles"
                        className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
                    >
                        Browse Tiles
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default NotFound;