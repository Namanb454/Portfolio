import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = (props) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navbarbg = {
        height: "10rem",
        width: "100%",
        top: "0"
    }
    const listitems = {
        marginRight: "33.5rem",
        // : "100%"
    }


    return (
        <div>
            <img style={navbarbg} src='navbar1.jpg' />

            <div className="flex items-center justify-between shadow-2xl md:py-4 py-2">
                <Link href="/" className=" flex title-font font-medium items-center text-white mb-1 md:mb-0 md:mx-5">
                    <img className='w-10 ' src='pic.jpg' />
                    <span className="ml- text-black font-semibold animate-pulse text-xl">Naman Bansal</span>

                </Link>
                <nav >
                    <section className="MOBILE-MENU flex lg:hidden shadow-2xl">
                        <div
                            className="HAMBURGER-ICON rounded bg-gray-800  space-y-2 px-1 py-1 mx-5"
                            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                        >
                            <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
                            <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
                            <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav bg-white my-40 shadow-2xl rounded-b-3xl " : "hideMenuNav"}>

                            <div
                                className="CROSS-ICON animate-pulse bg-white absolute top-0 right-0 py-2 px-5 "
                                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                            >

                                <svg
                                    className="h-8 w-8 text-gray-800 "
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center">
                                <li className="font-serif border-gray-400 my-2 uppercase">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="font-serif border-gray-400 my-2 uppercase">
                                    <Link href="/Skills">Skills</Link>
                                </li>
                                <li className="font-serif border-gray-400 my-2 uppercase">
                                    <Link href="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <ul className="DESKTOP-MENU hidden space-x-8 lg:flex font-serif" style={listitems}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/Skills">Skills</Link>
                        </li>
                        <li>
                            <Link href="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 30vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
            </div>


            

        </div>
    )
}

export default Navbar