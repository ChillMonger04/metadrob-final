import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white mt-20">
      {/* Newsletter Section */}
      <div className="bg-[#1a1a1a] py-6 px-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-left">
            <h2 className="text-2xl font-semibold">Join Our Newsletter</h2>
            <p className="text-gray-400 text-xs">
              We'll send you weekly updates for your better tool management.
            </p>
          </div>
          <div className="flex w-auto mt-0 h-[3vw]">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full lg:w-96 p-3 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-[#00e1e1] hover:bg-[#00cccc] text-black px-6 py-3 rounded-r-md flex items-center justify-center">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#000000] py-12">
        <div className="px-16 flex flex-row justify-between">
          {/* Logo and Company Info */}
          <div className="flex w-[83%]">
            <div className="mb-0 mr-8">
              {/* Placeholder for the logo */}
              <div className="w-16 h-16 bg-gradient-to-r from-[#00e1e1] to-[#be00e1] rounded-md mb-4"></div>
            </div>
            <p className="text-white leading">
              Metadrob is your ultimate Virtual Retail Partner, offering a
              comprehensive suite of virtual store tools to build, customize,
              and launch your virtual retail showroom with ease. Elevate your
              e-commerce game and turn your vision into a digital shopping
              reality.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Full-Width Divider */}
        <div className="border-t border-gray-600 my-8 mx-16"></div>

        {/* Footer Links */}
        <div className="px-16 flex flex-row justify-between space-y-0">
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold">Reach us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>📞 +91-950 961 9057</li>
              <li>✉️ Info@metadrob.com</li>
              <li>
                📍 Sanghi Building, Mirza Ismail Rd, C Scheme, Ashok Nagar,
                Jaipur, Rajasthan 302001
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>About us</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold">Industries</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Fashion</li>
              <li>Automobile</li>
              <li>Furniture</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold">Others</h3>
            <ul className="text-gray-400 space-y-2">
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
        <div className="px-16 flex flex-row items-center justify-between text-white text-xs">
          <div className="flex space-x-6">
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
          <p className="text-center lg:text-right mt-4 lg:mt-0">
            © COPYRIGHT 2023 ALL RIGHTS RESERVED BY METADROB
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
