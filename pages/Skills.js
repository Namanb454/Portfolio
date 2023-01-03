import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiDjango } from 'react-icons/si';
import { FaGitSquare } from 'react-icons/fa';

const Skills = () => {
    return (
        <div>
            <section className=" body-font">
                <div className="container px-5 py-24 mx-auto ">
                    <div className="flex flex-col text-start w-full mb-5">
                    <h3 className="m-auto sm:text-2xl text-2xl title-font font-semibold text-gray-700 mt-4 mb-4">Skill Set</h3>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    <div className="flex flex-wrap ">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full  ">
                            <div className="h-full flex justify-center bg-orange-500 items-center border-gray-200 border p-4 rounded-lg">


                                <AiFillHtml5 className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" />

                                <div className="">
                                    <h2 className="text-white font-semibold font-serif title-font">HTML</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex justify-center bg-blue-400 items-center border-gray-200 border p-4 rounded-lg">
                                <FaCss3Alt className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" />
                                <div className="">
                                    <h2 className="text-white font-semibold font-serif title-font">CSS</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex justify-center bg-yellow-400 items-center border-gray-200 border p-4 rounded-lg">
                                <IoLogoJavascript className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" />
                                <div className="">
                                    <h2 className="text-white font-semibold font-serif title-font">JavaScript</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex justify-center bg-purple-600 items-center border-gray-200 border p-4 rounded-lg">
                                <FaBootstrap className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" />
                                <div className="">
                                    <h2 className="text-white font-semibold font-serif title-font">Bootstrap</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex justify-center bg-blue-600 items-center border-gray-200 border p-4 rounded-lg">
                                <SiTailwindcss className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" />
                                <div className="">
                                    <h2 className="text-white font-semibold font-serif title-font">Tailwind</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex justify-center bg-blue-300 items-center border-gray-200 border p-4 rounded-lg">
                                <GrReactjs className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" />
                                <div className="">
                                    <h2 className="text-white font-semibold font-serif title-font">ReactJS</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex justify-center bg-gray-900 items-center border-gray-200 border p-4 rounded-lg">
                                <TbBrandNextjs className="w-16 h-16 bg-white object-cover object-center flex-shrink-0 rounded-full mr-4" />
                                <div className="">
                                    <h2 className="text-white font-semibold font-serif title-font">NextJS</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex justify-center bg-green-800 items-center border-gray-200 border p-4 rounded-lg">
                                <SiDjango className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" />
                                <div className="">
                                    <h2 className="text-white font-semibold font-serif title-font">Django</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex justify-center bg-orange-700 items-center border-gray-200 border p-4 rounded-lg">
                                <FaGitSquare className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4 " />
                                <div className="">
                                    <h2 className="text-white font-semibold font-serif title-font">Git</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
