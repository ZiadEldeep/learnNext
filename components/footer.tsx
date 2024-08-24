// components/Footer.tsx

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* About Us Section */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-4">
              <Image
                src="/image/chefs-1.jpg" // Replace with your logo path
                alt="Company Logo"
                width={80} // Adjust width as needed
                height={80} // Adjust height as needed
                className="rounded-full shadow-xl"
              />
              <h2 className="text-2xl font-semibold ml-4">About Us</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We are a dedicated team of professionals committed to delivering quality service and making a positive impact on our community. Our focus is on excellence and client satisfaction.
            </p>
          </div>
          
          {/* Clinic Address Section */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-semibold mb-2">Our Clinic</h2>
            <p className="text-gray-300 mb-2">
              <strong className="text-gray-100">Address:</strong> 123 Medical St, Health City, HC 45678
            </p>
            <p className="text-gray-300">
              <strong className="text-gray-100">Phone:</strong> (123) 456-7890
            </p>
          </div>
          
          {/* Contact Us Section */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-300 mb-4">Email: <a href="mailto:contact@company.com" className="text-gray-100 hover:underline">contact@company.com</a></p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gray-100 transition duration-300">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-100 transition duration-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-100 transition duration-300">
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-100 transition duration-300">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>

      {/* Fixed Icon Buttons */}
      <a
        href="https://www.5amila.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-gray-800 text-white p-4 rounded-full shadow-xl hover:bg-gray-700 transition duration-300"
        aria-label="Visit our website"
      >
        <FaFacebookF className="text-2xl" />
      </a>

      <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-500 transition duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </footer>
  );
};

export default Footer;
