import React from "react";
import photo1 from "../assets/my_photo2.png";
import { FaLinkedin, FaXTwitter, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";

const About = () => {
    return (
        <section id="about" className=" bg-[#0E0C1E] text-white py-20 font-[Poppins]">
            <div className=" mx-auto px-6">
                <h2 className="text-center text-4xl sm:text-5xl font-bold mb-12">
                    About <span className="text-purple-500">Me</span>
                </h2>

                {/* Flex Layout: Image Left - Text Right */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left - Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={photo1}
                            alt="Shivam"
                            className="w-45 sm:w-30 md:w-70 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Right - Text */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                            Hey there! I'm <span className="text-purple-500">Shivam</span>, a passionate
                            UI/UX designer armed with creativity and a love for problem-solving. With a blend
                            of design thinking and a user-centric approach, I'm on a mission to create digital
                            experiences that leave a lasting impression. Let's collaborate and bring your
                            vision to life!
                        </p>

                    </div>
                </div>

                {/* Stats */}

            </div>
        </section>
    );
};

export default About;
