import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8 flex flex-wrap items-center justify-between">
        {/* Logo and About Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h1 className="text-2xl font-bold mb-2 text-yellow-500">Austech IO</h1>
          <p className="text-gray-400 text-sm">Providing the best services since 2020.</p>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-400 text-sm">Email: contact@yourcompany.com</p>
          <p className="text-gray-400 text-sm">Phone: +1 (234) 567-890</p>
          <p className="text-gray-400 text-sm">Address: 123 Main St, City, Country</p>
        </div>

        {/* Social Media Links Section */}
        <div className="w-full flex justify-center md:justify-start mt-4">
          <h2 className="text-lg font-semibold mr-4">Follow Us</h2>
          <div className="flex space-x-1 text-gray-400 text-x1">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
