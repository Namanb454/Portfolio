import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
 

const Footer = () => {
  return (
    <div>
      <footer  className="text-gray-600 body-font bottom-0">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <span className="inline-flex  sm:m-auto sm:mt-0  mt-4 justify-center sm:justify-center">
      <a href='https://twitter.com/NamanBa17703402' className="text-gray-700 mr-5 hover:text-red-400">
      <BsTwitter className="w-5 h-5  object-cover object-center flex-shrink-0  " />
      </a>
      <a href='https://www.linkedin.com/in/naman-bansal-9585nb' className="text-gray-700 mr-5 hover:text-red-400">
      <BsLinkedin className="w-5 h-5  object-cover object-center flex-shrink-0  " />
      </a>
      <a href='https://github.com/Namanb454?tab=repositories' className="text-gray-700 mr-5 hover:text-red-400">
      <BsGithub className="w-5 h-5  object-cover object-center flex-shrink-0  " />
      </a>
      <a href='mailto: namanb454@gmail.com' className="text-gray-700 mr-5 hover:text-red-400">
      <IoMdMail className="w-5 h-5  object-cover object-center flex-shrink-0  " />
      </a>
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer
