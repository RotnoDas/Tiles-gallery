import React from 'react';
import logo from "../../assets/images/mosaic.png";
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return (
        <div className="border-b px-2">
            <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Link href={"/"} className="flex gap-2 items-center">
                        <Image
                            src={logo}
                            alt="logo"
                            loading="eager"
                            width={30}
                            height={30}
                            className="object-cover h-auto w-auto"
                        />
                        <h3 className="font-black text-lg">Tiles Gallery</h3>
                    </Link>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-tiles"}>All Tiles</Link>
                    </li>
                    <li>
                        <Link href={"/my-profile"}>My Profile</Link>
                    </li>
                </ul>

                <div className="flex gap-4">
                    <ul className="flex items-center gap-5 text-sm">
                        <li>
                            <Link href={"/signup"}>SignUp</Link>
                        </li>
                        <li>
                            <Link href={"/signin"}>SignIn</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;