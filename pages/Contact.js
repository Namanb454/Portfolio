import React from 'react'
import { GrInstagram } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';
import { SiTelegram } from 'react-icons/si';
import { IoMdMail } from 'react-icons/io';

const Contact = () => {
    return (
        <div>



            <section className="text-gray-600 w-full body-font">
                <div className="container mx-auto  flex  py-24 md:flex-row flex-col items-center">

                    <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center">

                        <h3 className="m-auto  sm:text-2xl text-2xl title-font font-semibold text-gray-700 mt-4 mb-4">Contact Me</h3>
                        
                        <p className="leading-relaxed mb-8 md:mx-32  text-slate-800"> To discuss anything. <br />
                            You can either mail me, send a text on telegram, or can DM on instagram:</p>
                        <div className="flex justify-start">

                            <div className="lg:max-w-lg mx-32 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <div className="container mx-auto flex items-start sm:flex-row flex-col">
                                    <span className="  sm:m-auto sm:mt-0  mt-4 justify-start sm:justify-start">
                                        <a href='mailto: namanb454@gmail.com' className="text-gray-700 my-2 mr-5 hover:text-red-400 flex">
                                            <IoMdMail className="w-5 h-5 mx-3 object-cover object-center flex-shrink-0  " />E-mail
                                        </a>
                                        <a href='https://github.com/Namanb454?tab=repositories' className="text-gray-700 my-2 mr-5 hover:text-red-400 flex">
                                            <SiTelegram className="w-5 h-5 mx-3 object-cover object-center flex-shrink-0  " />Telegram
                                        </a>
                                        <a href='https://www.instagram.com/namanbansal95/' className="text-gray-700 mr-5 my-2 hover:text-red-400 flex">
                                            <GrInstagram className="w-5 h-5 mx-3 object-cover object-center flex-shrink-0  " /> Instagram
                                        </a>

                                        <a href='https://www.linkedin.com/in/naman-bansal-9585nb' className="text-gray-700 mr-5 hover:text-red-400 my-2 flex">
                                            <BsLinkedin className="w-5 h-5 mx-3 object-cover object-center flex-shrink-0  " />Linked In
                                        </a>
                                    </span>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact
