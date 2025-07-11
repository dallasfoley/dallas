"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center text-2xl font-bold group tracking-tight"
        >
          <div className="flex items-baseline">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={32}
              height={32}
              className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
            />
          </div>
          <span className="tracking-normal translate-y-[4px] bg-gradient-to-r from-red-600 via-yellow-500 to-pink-500 bg-clip-text text-transparent transition-all duration-500 group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-purple-500">
            allas Foley
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md py-4">
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
