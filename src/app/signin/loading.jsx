import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8 flex items-center justify-center bg-linear-to-b from-white to-gray-50">
            <div className="flex flex-col items-center gap-3 rounded-3xl border border-gray-200 bg-white/95 px-8 py-10 shadow-lg shadow-gray-200/60">
                <Spinner size="xl" />
                <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-500">
                    Loading tiles
                </p>
            </div>
        </main>
    );
};

export default loading;