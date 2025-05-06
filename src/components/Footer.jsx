import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="bg-primary text-white pt-12 pb-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <a href="#" className="inline-block mb-4">
              <Image
                src="/assets/logo/logo.png"
                alt="Masjid Logo"
                width={120}
                height={60}
              />
            </a>
            <p className="text-sm text-gray-100">
              Join our community and stay updated with the latest events, news,
              and activities from the Masjid.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm text-gray-100">
              {["Home", "About Us", "Activities", "Contact"].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="hover:text-yellow-400 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-4 text-sm text-gray-100">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <span>123 Masjid St, City, Country</span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhone className="text-yellow-400 mt-1" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="text-yellow-400 mt-1" />
                <span>info@masjid.com</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Stay Connected</h5>
            <div className="flex flex-wrap gap-3 mb-4">
              {[
                FaFacebookF,
                FaTwitter,
                FaInstagram,
                FaLinkedinIn,
                FaWhatsapp,
                FaTelegramPlane,
              ].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-600 transition"
                  aria-label={`Social ${idx}`}
                >
                  <Icon className="text-white text-sm" />
                </a>
              ))}
            </div>

            <form className="flex items-center gap-2">
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 text-sm"
                placeholder="Subscribe to our newsletter"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-sm text-white rounded-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10 border-t border-gray-700 pt-4 text-sm text-gray-400">
          &copy; 2024 Masjid Community. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
