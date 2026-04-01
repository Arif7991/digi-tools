
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-6">
        {/* 5-column grid with equal height/width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">DigiTools</h2>
            <p className="text-sm leading-relaxed">
              Premium digital tools for creators,
              <br />
              professionals, and businesses. Work smarter
              <br />
              with our suite of powerful tools.
            </p>
          </div>

          {/* Product column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links column with icons */}
          <div>
            <h3 className="font-semibold text-white mb-4">Social Links</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaSquareXTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
              
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-6 mt-2 sm:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;