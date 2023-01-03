import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    const navbarbg = {
        height: "5rem",
        width: "100%",
        top: "0"
    }

    return (
        <div>
            <img style={navbarbg} src='navbarbg.jpg' />

            <header className="bg-red-500 text-gray-600 body-font shadow-2xl">
                <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className=" flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img className='w-14 ' src='pic.jpg' />
                        <span className="ml- text-white font-semibold text-xl">Naman Bansal</span>
                    </a>
                    <nav className=" text-white md:ml-96 ml-7 flex flex-wrap items-center text-base justify-center">
                        <a href="/" className="mr-5 font-serif hover:text-red-100">Home</a>
                        <a href="/Skills" className="mr-5 font-serif hover:text-red-100">Skills</a>
                        <a href="/Contact" className="mr-5 font-serif hover:text-red-100">Contact</a>
                        {/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
                    </nav>
                    

                </div>
            </header>

        </div>
    )
}

export default Navbar
