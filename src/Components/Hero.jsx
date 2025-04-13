import React from 'react'
import photo from '../assets/my_photo.jpg'
import { Link } from 'react-scroll';
import { FaLinkedin, FaXTwitter, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='text-white py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#1f1f47] to-[#121212] min-h-screen flex flex-col items-center justify-center text-center'>
      {/* Profile Image */}
      <img
        className='mx-auto w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-full shadow-lg border-4 border-purple-500'
        src={photo}
        alt="Not Found"
      />

      {/* Hero Content */}
      <div className='mt-8 space-y-4'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight'>
          Hey, I'm <span className='text-purple-500'>Shivam</span>
        </h1>
        <span className='font-extrabold block text-4xl md:text-5xl text-purple-500'>
          Frontend Developer & BCA Student
        </span>
        <p className='text-sm md:text-base text-gray-400 max-w-xl mx-auto'>
          I’m a passionate programmer crafting beautiful, user-friendly websites. Currently mastering full stack development with Java and C# — let's build something impactful together!
        </p>

        {/* Buttons */}
        <div className='flex justify-center gap-4 pt-6 flex-wrap'>
        <Link to="contact" smooth={true} duration={500} offset={-70}>
  <button className='bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-200'>
    Hire Me
  </button>
</Link>
          <button className='border border-purple-600 hover:bg-purple-600 px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-200'>
            My Story
          </button>
        </div>
        <div className="flex justify-center md:justify-start space-x-6 pt-6 text-3xl text-white">
          <a
            href="https://www.linkedin.com/in/shad%C3%B8w-sh%C3%AEv%C3%A1m-01a9602a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.linkedin.com/in/shad%C3%B8w-sh%C3%AEv%C3%A1m-01a9602a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors duration-300"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/shadow_shivam?utm_source=qr&igsh=eTl3YnY4cnY1ajF3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors duration-300"
          >
            <FaSquareInstagram />
          </a>
          <a
            href="https://github.com/Shivam3410"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors duration-300"
          >
            <FaSquareGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero
