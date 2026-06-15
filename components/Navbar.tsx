"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "/about" },
    { name: "Strategy", href: "/strategy" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Research", href: "/research" },
    { name: "Investor Relations", href: "/investor-relations" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
  src="/logo.jpeg"
  alt="Velor Capital"
  width={40}
  height={40}
/>
            <span className="text-xl font-bold text-[#0B1F4D]">
              Velor Capital
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#D4A017] transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="bg-[#D4A017] text-black px-5 py-3 rounded-lg font-semibold"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Button */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}