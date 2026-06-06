"use client";
import { UserUpdate } from '@/components/user_update/UserUpdate';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData?.data?.user;

    if (!user) {
        return (
            <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8 flex items-center justify-center bg-linear-to-b from-white to-gray-50">
                <Card className="w-full max-w-lg border border-gray-200 bg-white/95 px-6 py-10 text-center shadow-lg shadow-gray-200/60 sm:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Profile</p>
                    <h1 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-gray-950">
                        Sign in to view your profile
                    </h1>
                    <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600">
                        Your account details, avatar, and activity will appear here once you are signed in.
                    </p>
                </Card>
            </main>
        );
    }

    return (
        <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
            <section className="mx-auto w-full max-w-5xl">
                <div className="mb-8 text-center lg:text-left">
                    <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                        My account
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950">
                        Profile Overview
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-6 lg:gap-8 items-start">
                    <Card className="border border-gray-200 bg-white/95 p-6 sm:p-8 shadow-lg shadow-gray-200/60">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="rounded-full bg-linear-to-b from-gray-950 to-gray-700 p-1 shadow-xl shadow-gray-300/50">
                                <Avatar className="h-24 w-24 sm:h-28 sm:w-28 border-4 border-white">
                                    <Avatar.Image alt={user.name} src={user.image} referrerPolicy="no-referrer" />
                                    <Avatar.Fallback>{user.name?.[0]}</Avatar.Fallback>
                                </Avatar>
                            </div>

                            <div className="space-y-1">
                                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-950">
                                    {user.name}
                                </h2>
                                <p className="text-sm sm:text-base text-gray-600">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                    </Card>

                    <Card className="border border-gray-200 bg-white/95 p-6 sm:p-8 shadow-lg shadow-gray-200/60">
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Profile Details</p>
                                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-gray-950">
                                    Welcome back, {user.name}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Name</p>
                                    <p className="mt-2 text-base sm:text-lg font-semibold text-gray-950 wrap-break-word">
                                        {user.name}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Email</p>
                                    <p className="mt-2 text-base sm:text-lg font-semibold text-gray-950 wrap-break-word">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <UserUpdate></UserUpdate>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    );
};

export default ProfilePage;