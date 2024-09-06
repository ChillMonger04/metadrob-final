import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const CustomFooter = () => {
  return (
    <div className="bg-[#0d0d0d] text-white mt-20">
      {/* Newsletter Section */}
      <div className="bg-[#1a1a1a] py-6 px-8">
        <div className="px-8 flex items-center justify-between">
          <div className="text-left">
            <h2 className="text-2xl font-bold">Join Our Newsletter</h2>
            <p className="text-gray-400 text-sm">
              We'll send you weekly updates for your better tool management.
            </p>
          </div>
          <div className="flex w-auto mt-4 lg:mt-0">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full lg:w-96 p-2.5 text-black rounded-l-md focus:outline-none" // Increased width and decreased height
            />
            <button className="bg-[#00e1e1] hover:bg-[#00cccc] text-black px-6 py-3 rounded-r-md flex items-center justify-center">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#000000] py-4">
        <div className="px-16 flex flex-col">
          {/* Logo, Company Info, and Social Icons */}
          <div className="flex relative">
            <div className="flex justify-between items-center w-[88%]">
              <div className="companyLogo mr-16">
                {/* Placeholder for the logo */}
                <img src="/metaLogo.png" className="w-44" />
              </div>
              <p className="text-white text-sm leading-relaxed w-[80%]">
                Metadrob is your ultimate Virtual Retail Partner, offering a
                comprehensive suite of virtual store tools to build, customize,
                and launch your virtual retail showroom with ease. Elevate your
                e-commerce game and turn your vision into a digital shopping
                reality.
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-4 absolute bottom-0 right-0">
              <a
                href="#"
                className="text-white hover:text-white border rounded-full p-1.5"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white border rounded-full p-1.5"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white border rounded-full p-1.5"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Full-Width Divider */}
        <div className="border-t border-gray-600 my-8 mx-16"></div>

        {/* Footer Links */}
        <div className="px-16 flex items-start justify-between pb-6">
          <div className="flex flex-col gap-2 w-[30%]">
            <h3 className="text-white font-semibold mb-2">Reach us</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaPhone /> +91-950 961 9057
              </li>
              <li className="flex items-center gap-2">
                <IoMail /> Info@metadrob.com
              </li>
              <li className="flex items-start gap-2">
                <FaLocationDot className="mt-1" />
                Address: 3rd Floor, Katewa bhawan, M.I. Road, Jaipur, Rajasthan
                302001
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Home</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>About us</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-semibold mb-2">Industries</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Fashion</li>
              <li>Automobile</li>
              <li>Furniture</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-semibold mb-2">Others</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Collaborate / Partner</li>
              <li>Blogs</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mx-16"></div>

      {/* Bottom Copyright Section */}
      <div className="bg-black py-6">
        <div className="px-16 flex flex-col lg:flex-row items-center justify-between text-gray-400 text-xs">
          <div className="flex space-x-6 mb-4 lg:mb-0">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Refund & Cancellation Policy
            </a>
          </div>
          <p className="text-center lg:text-right">
            COPYRIGHT © 2023 ALL RIGHTS RESERVED BY METADROB
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomFooter;
