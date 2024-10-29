"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaChevronDown,
    FaEarthAsia,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa6";

export default function Help() {
    const [loading, setLoading] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const toggleFAQ = (index: number) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    const faqs = [
        {
            question: "How can I sign up for the service?",
            answer: "To sign up, simply click on the 'Sign Up' button on the main page, enter your details, and follow the instructions.",
        },
        {
            question: "How do I book a ride?",
            answer: "Once signed in, go to the 'Ride' section, enter your destination, and follow the prompts to book a ride.",
        },
        {
            question: "What payment options are available?",
            answer: "We offer multiple payment options, including credit/debit cards and Google Pay. Select your preferred option during checkout.",
        },
        {
            question: "How can I track my ride?",
            answer: "You can track your live ride location through the app on the 'Track My Ride' page.",
        },
    ];

    return (
        <>
            {loading && <Preloader />}
            {!loading && (
                <div className="flex flex-col items-center justify-center min-h-screen bg-black scale-85">
                    {/* Header */}
                    <header className="stickty top-0  bg-transparent z-10 flex justify-between items-center w-full px-3 py-6">
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/"
                                className="text-xl font-bold text-white ml-3 mr-4 tauri-font"
                            >
                                GoodRide
                            </Link>
                            <nav className="space-x-3 flex items-center">
                                <a
                                    href="/ride"
                                    className="text-white font-bold relative text-sm"
                                >
                                    Ride
                                    <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                                </a>
                                <a
                                    href="/drive"
                                    className="text-white font-bold relative text-sm"
                                >
                                    Drive
                                    <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                                </a>
                                <a
                                    href="#"
                                    className="text-white font-bold relative text-sm"
                                >
                                    Business
                                    <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                                </a>
                                <div className="relative">
                                    <button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="flex items-center text-white font-bold px-2 py-1 rounded text-sm"
                                    >
                                        About
                                        <FaChevronDown
                                            className={`ml-1 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {dropdownOpen && (
                                        <div className="absolute left-0 mt-2 w-40 bg-black text-white rounded-lg">
                                            <Link
                                                href="/about"
                                                className="block px-4 py-2 hover:bg-gray-700 text-sm"
                                            >
                                                About Us
                                            </Link>
                                            <Link
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-700 text-sm"
                                            >
                                                Our Story
                                            </Link>
                                            <Link
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-700 text-sm"
                                            >
                                                Careers
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </nav>
                        </div>
                        <div className="flex items-center space-x-3">
                            <a
                                href="#"
                                className="flex items-center text-white font-bold relative text-sm"
                            >
                                <FaEarthAsia className="mr-1 w-4 h-4 text-white" /> EN
                                <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                            </a>
                            <a
                                href="/help"
                                className="text-white font-bold relative text-sm"
                            >
                                Help
                                <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                            </a>
                            <a
                                href="/login"
                                className="text-white font-bold relative text-sm"
                            >
                                Log in
                                <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                            </a>
                            <Link href="/signup">
                                <button className="bg-black text-white font-bold px-3 py-1 rounded-md hover:bg-gray-700 transition text-sm">
                                    Sign up
                                </button>
                            </Link>
                        </div>
                    </header>

                    {/* Light Effect */}
                    <div className="absolute inset-0 top-0 left-0 bg-gradient-to-b from-white/30 to-transparent opacity-100"></div>

                    {/* Help Content */}
                    <div className="max-w-7xl w-full mx-auto px-4 py-10">
                        <main className="flex flex-col md:flex-row items-center">
                            <div className="text-left md:w-1/2 bg-black backdrop-blur-lg rounded-lg p-6 ">
                                <h2 className="text-6xl font-bold mb-6 text-white leading-tight">
                                    How can we help you?
                                </h2>
                                <p className="text-white mb-4">
                                    Find answers to common questions or contact our support team.
                                </p>
                                <div className="flex flex-col space-y-4">
                                    <Link
                                        href="/faq"
                                        className="relative text-white font-bold transition bg-black px-2 py-1 rounded-md group inline-block"
                                    >
                                        Frequently Asked Questions
                                        <span className="block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                    <Link
                                        href="/support"
                                        className="relative text-white font-bold transition bg-black px-2 py-1 rounded-md group inline-block"
                                    >
                                        Contact Support
                                        <span className="block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                    <Link
                                        href="/account-help"
                                        className="relative text-white font-bold transition bg-black px-2 py-1 rounded-md group inline-block"
                                    >
                                        Account and Billing Help
                                        <span className="block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </Link>


                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-end">
                                <div className="relative" style={{ width: '400px', height: '400px' }}>
                                    <video
                                        src="/help-video.mp4" // Replace with your video file path
                                        alt="Help and support video"
                                        className="rounded-lg object-cover w-full h-full" // Ensure video fills the box
                                        style={{ marginLeft: '-50px' }}
                                        autoPlay // Automatically play the video
                                        loop // Loop the video
                                        muted // Mute the video to avoid sound on autoplay
                                        playsInline // Optional: Ensure video plays inline on mobile devices
                                    />
                                </div>
                            </div>

                        </main>
                    </div>

                    {/* FAQ Section */}
                    <div className="max-w-7xl w-full mx-auto px-4 py-10">
                        <h3 className="text-4xl font-bold text-white mb-6">
                            Frequently Asked Questions
                        </h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="pb-2">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="flex items-center justify-between w-full text-left text-white font-semibold py-2 focus:outline-none"
                                    >
                                        {faq.question}
                                        <FaChevronDown
                                            className={`ml-1 transition-transform duration-300 ${faqOpen === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {faqOpen === index && (
                                        <p className="text-gray-400 mt-2 pl-4">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="w-full h-[0.5px] bg-[rgba(255,255,255,0.2)] my-4"></div>

                    {/* Footer Section */}
                    <footer className="w-full bg-black text-white py-20 mt-10">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="flex flex-col md:flex-row justify-between">
                                {/* Company Information Section */}
                                <div className="mb-6 md:mb-0 md:w-1/3">
                                    <h3 className="text-3xl font-bold">GoodRide</h3>
                                    <p className="text-gray-400 mt-2">
                                        Your trusted partner for hassle-free rides.
                                    </p>
                                </div>

                                {/* Follow Us Section */}
                                <div className="md:w-1/3">
                                    <h3 className="text-3xl font-bold">Follow Us</h3>
                                    <div className="flex space-x-4 mt-2">
                                        <a
                                            href="#"
                                            className="text-gray-400 transition relative"
                                        >
                                            <FaFacebookF />
                                            <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-400 transition relative"
                                        >
                                            <FaTwitter />
                                            <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-400 transition relative"
                                        >
                                            <FaInstagram />
                                            <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-400 transition relative"
                                        >
                                            <FaLinkedinIn />
                                            <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                                        </a>
                                    </div>
                                </div>

                                {/* Contact Section */}
                                <div className="md:w-1/3">
                                    <h3 className="text-3xl font-bold">Contact Us</h3>
                                    <p className="text-gray-400 mt-2">
                                        Have questions? Reach out to us at
                                    </p>
                                    <a href="mailto:support@goodride.com" className="text-gray-400 hover:text-white transition">
                                        support@goodride.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            )}
        </>
    );
}

const Preloader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
            <h1 className="text-white text-5xl">Help is Coming...</h1>
        </div>
    );
};
