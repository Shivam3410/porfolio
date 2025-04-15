import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
import { Link } from "react-scroll";





const Navbar = () => {
    const variants = {
        open: {
            clipPath: "circle(1200px at 43px 43px)",
            transition: {
                type: "spring",
                stiffness: 20,
            },
        },
        closed: {
            clipPath: "circle(25px at 43px 37px)",
            transition: {
                type: "spring",
                duration: 1,
            },
        },
    };


    const items = [
        { id: 4, text: "Home", to: "home" },
        { id: 1, text: "About", to: "about" },
        { id: 3, text: "Skills", to: "skills" },
        { id: 4, text: "Contact", to: "contact" },
        
    ]
    const [menu, setMenu] = useState(false)
    return (
        <nav>
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className='container mx-auto hidden md:flex justify-between items-center py-6 '>
                {/* this is showing my name  */}
                <div className='text-xl lg:text-2xl font-bold flex items-center gap-1'>
                    <span className='text-white'>SHIVAM</span>
                    <span className='text-purple-500'>KUMAR</span>
                </div>
                {/* this is navbar list  */}
                <div>
                    <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white'>
                        {items.map(({ id, text, to }) => (
                            <li key={id}>
                                <Link to={to} smooth={true} duration={500} offset={-70}>
                                    {text}
                                </Link>
                            </li>
                        ))}
                        <a href='https://drive.google.com/file/d/1c9y2Hl2y4ulUl5pkmWIS8M2Hr2QL5rOC/view?usp=drive_link' className='md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full'>Download CV</a>

                    </ul>
                </div>

            </motion.div>
            <div className='flex md:hidden justify-between'>
                <motion.div
                    animate={menu ? "open" : "closed"}>
                    <motion.div
                        className="bg-white w-2/3 h-screen text-black fixed top-0 left-0 z-50"
                        variants={variants}
                    >
                        {/* Toggle Menu Button */}
                        <div onClick={() => setMenu((prev) => !prev)} className="px-7 py-6">
                            {menu ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                        </div>

                        {/* Menu for Medium Devices */}
                        {menu && (
                            <div className="flex flex-col  items-center">
                                <ul className="space-y-6 text-black text-lg">
                                    {items.map(({ id, text, to }) => (
                                        <li
                                            key={id}
                                            className="hover:text-purple-500 duration-200 cursor-pointer"
                                        >
                                            <Link
                                                to={to}
                                                smooth={true}
                                                duration={500}
                                                offset={-128} // Match with navbar height/scroll-mt
                                                onClick={() => setMenu(false)} // optional: close menu on click
                                            >
                                                {text}
                                            </Link>
                                        </li>
                                    ))}
                                    <button>
                                        <a
                                            href="https://drive.google.com/file/d/1c9y2Hl2y4ulUl5pkmWIS8M2Hr2QL5rOC/view?usp=drive_link"
                                            target="_blank"
                                            className="text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-6 rounded-full"
                                            rel="noreferrer"
                                        >
                                            Download CV
                                        </a>
                                    </button>
                                </ul>
                            </div>
                        )}
                    </motion.div>

                </motion.div>
                <motion.div
                    className='text-xl font-bold flex items-center gap-2 py-6'
                >
                    <span className='text-white'>SHIVAM</span>
                    <span className='text-purple-500'>KUMAR</span>
                </motion.div>

            </div>
        </nav>
    )
}

export default Navbar