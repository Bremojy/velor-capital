import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
return ( <footer className="bg-[#071632] text-white border-t border-white/10"> <div className="max-w-7xl mx-auto px-6 py-16">

```
    <div className="grid md:grid-cols-4 gap-10">

      {/* Brand */}
      <div>
        <h3 className="text-2xl font-bold text-[#D4A017]">
          Velor Capital
        </h3>

        <p className="mt-4 text-gray-300 leading-relaxed">
          Building long-term value through disciplined
          capital allocation, research-driven investing,
          and sustainable wealth creation.
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
              hover:scale-110
              hover:bg-gradient-to-r
              hover:from-pink-500
              hover:to-purple-600
              transition duration-300
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
              transition duration-300
            "
          >
            <FaWhatsapp size={22} />
          </a>

        </div>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-semibold text-white mb-4">
          Company
        </h4>

        <ul className="space-y-3 text-gray-300">
          <li>
            <Link href="/about" className="hover:text-[#D4A017] transition">
              About
            </Link>
          </li>

          <li>
            <Link href="/strategy" className="hover:text-[#D4A017] transition">
              Strategy
            </Link>
          </li>

          <li>
            <Link href="/portfolio" className="hover:text-[#D4A017] transition">
              Portfolio
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-[#D4A017] transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Research */}
      <div>
        <h4 className="font-semibold text-white mb-4">
          Research
        </h4>

        <ul className="space-y-3 text-gray-300">
          <li>
            <Link href="/research" className="hover:text-[#D4A017] transition">
              Research Hub
            </Link>
          </li>

          <li>
            <Link href="/investor-relations" className="hover:text-[#D4A017] transition">
              Investor Relations
            </Link>
          </li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h4 className="font-semibold text-white mb-4">
          Legal
        </h4>

        <ul className="space-y-3 text-gray-300">
          <li>
            <Link href="/privacy-policy" className="hover:text-[#D4A017] transition">
              Privacy Policy
            </Link>
          </li>

          <li>
            <Link href="/terms" className="hover:text-[#D4A017] transition">
              Terms of Service
            </Link>
          </li>

          <li>
            <Link href="/disclaimer" className="hover:text-[#D4A017] transition">
              Disclaimer
            </Link>
          </li>
        </ul>
      </div>

    </div>

    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

      <p className="text-gray-400 text-sm">
        © 2026 Velor Capital. All Rights Reserved.
      </p>

      <p className="text-gray-400 text-sm">
        Nairobi, Kenya
      </p>

    </div>

  </div>
</footer>

);
}
