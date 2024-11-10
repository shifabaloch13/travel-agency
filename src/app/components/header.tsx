"use client"

import Link from "next/link";
import "../style/header.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div>
               
             <Link href="/">
                <Image
                    src="/travellogo.png"
                    alt="logo"
                    width={150}
                    height={150}
                    className="logo"
                />
                </Link>
            </div>
            <nav className="nav">
              
                <button
                    className="menuIcon"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <ul className={`navBar ${menuOpen ? "active" : ""}`}>
                    <li className="li">
                        <Link className="link" href="/services">Services</Link> </li>
                    <li className="li">
                        <Link className="link" href="/destination">Destination</Link> </li>
                    <li className="li"> 
                     <Link className="link" href="/booking">Bookings</Link></li>
                    <li className="li">
                        <Link className="link" href="/testimonails">Testimonails</Link>
                    </li>
                    <li>
                    </li>
                </ul>
            </nav>
        </header>
    );
}