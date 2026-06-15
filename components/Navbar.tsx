"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Strategy", href: "/strategy" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Research", href: "/research" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#071632]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Velor Capital"
              width={44}
              height={44}
              className="rounded-lg"
            />

            <span className="text-xl font-bold text-white">
              Velor <span className="text-[#D4A017]">Capital</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  text-white/90
                  font-medium
                  hover:text-[#D4A017]
                  transition
                  duration-300
                "
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/investor-login"
              className="
                bg-[#D4A017]
                text-[#071632]
                px-6
                py-3
                rounded-xl
                font-semibold
                hover:scale-105
                transition
                duration-300
                shadow-lg
              "
            >
              Investor Login
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden py-6 border-t border-white/10 flex flex-col gap-5 bg-[#071632]">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#D4A017]"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/investor-login"
              className="
                bg-[#D4A017]
                text-[#071632]
                px-5
                py-3
                rounded-lg
                font-semibold
                text-center
              "
              onClick={() => setOpen(false)}
            >
              Investor Login
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
}