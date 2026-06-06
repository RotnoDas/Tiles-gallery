import React from 'react';
import logo from "../../assets/images/mosaic.png";
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return (
        <div className="sticky top-0 z-50 bg-white text-stone-900 border-b px-4 sm:px-6">
            <nav className="flex flex-col md:flex-row justify-between items-center py-4 max-w-7xl mx-auto w-full gap-4 md:gap-0">
                <div className="flex gap-2 items-center w-full md:w-auto justify-center md:justify-start">
                    <Link href={"/"} className="flex gap-2 items-center">
                        <Image
                            src={logo}
                            alt="logo"
                            loading="eager"
                            width={30}
                            height={30}
                            className="object-cover h-auto w-auto"
                        />
                        <h3 className="font-black text-lg md:text-xl">Tiles Gallery</h3>
                    </Link>
                </div>

                <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm md:text-base w-full md:w-auto">
                    <li>
                        <Link className="hover:text-blue-600 transition-colors" href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-600 transition-colors" href={"/all-tiles"}>All Tiles</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-600 transition-colors" href={"/my-profile"}>My Profile</Link>
                    </li>
                </ul>

                <div className="flex gap-4 w-full md:w-auto justify-center md:justify-end">
                    <ul className="flex items-center gap-4 sm:gap-6 text-sm md:text-base">
                        <li>
                            <Link className="hover:text-blue-600 transition-colors" href={"/signup"}>SignUp</Link>
                        </li>
                        <li>
                            <Link className="hover:text-blue-600 transition-colors" href={"/signin"}>SignIn</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;