

import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import icon from '../../assets/icon-02-primary.png'

const Navbar = () => {

    const navLinks = <>

        <li className='text-orange-400 text-xl'><a>Home</a></li>
        <li className='text-xl hover:text-orange-400' ><a>About Us</a></li>
        <li className='text-xl hover:text-orange-400'><a>Our Services</a></li>
        <li>
            <details>
                <summary className='text-xl hover:text-orange-400'>Pages</summary>
                <ul className="p-2 text-xl">
                    <li><a>Feature</a></li>
                    <li><a> Free Qoute</a></li>
                    <li><a> Our Team </a></li>
                    <li><a> Testimonial </a></li>
                    <li><a> 404 Page</a></li>
                </ul>
            </details>
        </li>
        <li className='text-xl hover:text-orange-400'><a>Contact Us</a></li>

    </>


    return (
        <div className='mx-6'>

            <div className="navbar bg-base-100">
                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-96 p-2 shadow">

                            {navLinks}



                        </ul>
                    </div>

                    <div className="flex flex-row gap-4 items-center"> <img src={icon} alt="" /> <p className=' text-2xl lg:text-4xl font-bold'> AirCon </p> </div>

                </div>
                <div className="navbar-center hidden lg:flex bg-gray-50">
                    <ul className="menu menu-horizontal px-1 z-[50]">
                        

                        {navLinks}


                    </ul>
                </div>
                <div className="navbar-end invisible lg:visible">   

                    <div className='flex flex-row gap-4 '>
                        <p className='bg-gray-200 rounded-full' > < FaFacebookF className='w-8 h-8 p-2 text-orange-600' /></p>
                        <p className='bg-gray-200 rounded-full' > < FaTwitter className='w-8 h-8 p-2 text-orange-600'></FaTwitter  > </p>
                        <p className='bg-gray-200 rounded-full'> < FaLinkedin className='w-8 h-8 p-2 text-orange-600'></FaLinkedin> </p>
                        <p className='bg-gray-200 rounded-full'> < FaInstagram className='w-8 h-8 p-2 text-orange-600'></FaInstagram> </p>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Navbar;