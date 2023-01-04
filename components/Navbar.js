import React from 'react'
import Link from 'next/link'

const Navbar = (props) => {
    const navbarbg = {
        height: "5rem",
        width: "100%",
        top: "0"
    }
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

    return (
        <div>
            <img style={navbarbg} src='navbar1.jpg' />

            <header className="bg-red-500 text-gray-600 body-font shadow-2xl">
                <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className=" flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img className='w-14 ' src='pic.jpg' />
                        <span className="ml- text-white font-semibold text-xl">Naman Bansal</span>
                        
                    </Link>
                    
                    <nav className=" text-white md:ml-96 ml-7 flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 font-serif hover:text-red-100"> Home </Link>
                        <Link href="/Skills" className="mr-5 font-serif hover:text-red-100">Skills</Link>
                        <Link href="/Contact" className="mr-5 font-serif hover:text-red-100">Contact</Link>
                 
                    </nav>
                    

                </div>
            </header>

        </div>
    )
}

export default Navbar
