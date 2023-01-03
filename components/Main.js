import React from 'react'

const Main = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="profile.jpg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h2 className="sm:text-4xl text-2xl title-font font-sans font-semibold text-red-600 mt-4 mb-4">Hi There!</h2>
    <h3 className="sm:text-2xl text-2xl title-font font-medium text-gray-700 mt-4 mb-4">I'm Naman Bansal</h3>
    <p className="leading-relaxed mb-8 text-slate-800"> I'm a 2nd Year Informational Technology Engineering undergraduate at Dr. Akhilesh Das Gupta Institute Of Technology and Management (GGSIPU), Delhi. My expertise lies within front-end web apps, and the main languages in my tech stack are JavaScript, ReactJS and of course HTML/CSS. I'm a lifelong learner and currently focusing on Back-end, Databases & Data Structure Algorithms .
                                <br />
                                <br />

                                Seeking for an potential internship opportunity. I'm currently developing a healthcare project that helps to get all medical services at one platform. 
                                <br />
                                <br />

                                You can reach me through my handles given at the bottom.</p>
      <div className="flex justify-center">
      <a href='NamanResume.pdf'>
                                <button className="text-white bg-red-500 border-red-400 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg">Resume</button>
                            </a>

      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Main
