import React from "react";
import photo1 from "../assets/my_photo2.png";
import { FaLinkedin, FaXTwitter, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";

const About = () => {
    return (
        <section id="about" className=" text-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 underline">
                    About Me
                </h2>
               <br />
            </div>

            {/* Left - Image */}
            <div className="flex flex-col md-flex-row justify-center items-center">
                <div className=" mb-8 md:mb-0 md:mr-8 flex justify-center">
                    <img
                        src={photo1}
                        alt="Shivam"
                        className="w-1/2 sm:w-2/5 md:w-2/6 "
                    />
                </div>
            </div>


            {/* Right - Description */}
            <div className="flex items-center justify-center text-center">
                <p className="md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl">
                    Hey there! I'm <span className="text-white font-semibold">Shivam</span>,
                    a passionate UI/UX designer armed with creativity and a love for problem-solving.
                    With a blend of design thinking and user-centric approach, I'm on a mission to create
                    digital experiences that leave a lasting impression. So let's collaborate and bring
                    your vision to life!
                </p>
            </div>


            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center max-w-4xl mx-auto">
                <div>
                    <h3 className="text-4xl font-bold text-purple-500">5+</h3>
                    <p className="text-gray-300 mt-2">Years of Design Experience</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-purple-500">50+</h3>
                    <p className="text-gray-300 mt-2">Overall Global Customers</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-purple-500">90+</h3>
                    <p className="text-gray-300 mt-2">Projects I have Made</p>
                </div>
            </div>
        </section >
    );
};

export default About;
