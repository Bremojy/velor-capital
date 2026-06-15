import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#071632] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#D4A017]">
              Velor Capital
            </h3>

            <p className="mt-4 text-gray-400">
              Building long-term value through disciplined
              capital allocation and research-driven investing.
            </p>

            {/* Social Icons */}
<div className="flex items-center gap-4 mt-6">

  <a
    href="https://www.instagram.com/tradershadrack?igsh=bG82ODJyaDc1c2I="
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="
      h-12 w-12
      rounded-full
      bg-white/10
      flex items-center justify-center
      hover:bg-gradient-to-r
      hover:from-pink-500
      hover:to-purple-600
      hover:scale-110
      transition-all duration-300
    "
  >
    <FaInstagram size={22} />
  </a>

  <a
    href="https://wa.me/254758083853"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="
      h-12 w-12
      rounded-full
      bg-white/10
      flex items-center justify-center
      hover:bg-green-500
      hover:scale-110
      transition-all duration-300
    "
  >
    <FaWhatsapp size={22} />
  </a>

</div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/strategy">Strategy</Link>
              </li>

              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Research */}
          <div>
            <h4 className="font-semibold mb-4">
              Research
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/research">
                  Research Hub
                </Link>
              </li>

              <li>
                <Link href="/investor-relations">
                  Investor Relations
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">
              Legal
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms">
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link href="/disclaimer">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Velor Capital. All Rights Reserved.
          </p>

          <div className="text-gray-500 text-sm">
            Nairobi, Kenya
          </div>

        </div>

      </div>
    </footer>
  );
}