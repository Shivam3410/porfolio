import React, { useRef} from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLinkedin, FaXTwitter, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const captchaRef = useRef(null);

    const serviceKey = import.meta.env.VITE_APP_SERVICE_KEY
    const tempelateKey = import.meta.env.VITE_APP_TEMPLATE_KEY
    const publicProductKey = import.meta.env.VITE_APP_PUBLIC_PRODUCT_KEY

    const handleSubmit = (e) => {
        e.preventDefault();



        emailjs
            .sendForm(
                serviceKey,
                tempelateKey,
                formRef.current,
                publicProductKey
            )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    alert('Message sent successfully!');
                    formRef.current.reset();
                    setCaptchaToken(null);
                    captchaRef.current.resetCaptcha();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <section id="contact" className=" text-white py-16 px-6 md:px-12 lg:px-20 font-[Poppins]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Let's Discuss Your <span className="text-purple-400">Project</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                        Let’s make something new, different, and more meaningful or make things more visual or conceptual.
                    </p>
                </div>

                {/* Contact Info + Form */}
                <div className="flex flex-col lg:flex-row gap-10 justify-between">
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-col-2 gap-8'>
                        <div className='space-y-6'>
                            <div className='flex items-center space-x-4'>
                                <div className='bg-purple-500 p-4 rounded-full'>
                                    <FaPhoneAlt className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <p className='text-lg font-medium text-purple-500'>Call Me</p>
                                    <p className='text-white'>‪+91 7050023729‬</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <div className='flex items-center space-x-4'>
                                <div className='bg-purple-500 p-4 rounded-full'>
                                    <FaEnvelope className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <p className='text-lg font-medium text-purple-500'>Email</p>
                                    <p className='text-white'>krshivam3410@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <div className='flex items-center space-x-4'>
                                <div className='bg-purple-500 p-4 rounded-full'>
                                    <FaMapMarkerAlt className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <p className='text-lg font-medium text-purple-500'>Address</p>
                                    <p className='text-white'>Hazaribag Jharkhand</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" name="full_name" placeholder="Full name" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full" />
                            <input type="email" name="email" placeholder="Your email" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="text" name="phoneNo" placeholder="Phone number" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full" />
                            <input type="text" name="subject" placeholder="Subject" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full" />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows={5}
                            className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
                        />
                        <button
                            type="submit"
                            className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-200"
                        >
                            Submit Message
                        </button>
                    </form>
                </div>
            </div>
            <div className='mt-48 flex justify-between items-center p-5 text-white border-t-2 border-purple-500'>
                <p className='hidden md:flex justify-between items-center'>2025 All Right Reserved</p>
                <p className='hidden md:flex justify-between items-center'>Shivam Kumar</p>
                <div className='flex space-x-4'>
                    <a href="https://www.linkedin.com/in/shad%C3%B8w-sh%C3%AEv%C3%A1m-01a9602a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='hover:text-purple-500'> <FaLinkedin className='w-6 h-6' /></a>
                    <a href="https://github.com/Shivam3410" className='hover:text-purple-500'><FaSquareGithub className='w-6 h-6' /></a>
                    <a href="https://www.instagram.com/shadow_shivam?utm_source=qr&igsh=eTl3YnY4cnY1ajF3" className='hover:text-purple-500'><FaSquareInstagram className='w-6 h-6' /></a>
                    <a href="https://www.linkedin.com/in/shad%C3%B8w-sh%C3%AEv%C3%A1m-01a9602a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='hover:text-purple-500'><FaXTwitter className='w-6 h-6' /></a>

                </div>
            </div>
        </section>
    );
};

export default Contact;
