"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', trLabel: 'Anasayfa' },
    { href: '/flashcards', label: 'Flashcards', trLabel: 'Kartlar' },
    { href: '/paragraph', label: 'Paragraph', trLabel: 'Paragraf' },
    { href: '/about-us', label: 'About Us', trLabel: 'Hakkımızda' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Main navbar */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo section */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative w-10 h-10 transform transition-transform group-hover:scale-105">
                  <Image
                    src="/kelimeusta-logo.png"
                    alt="KelimeUsta"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  KelimeUsta
                </span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 font-medium text-gray-600 dark:text-gray-300 group"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    {item.label}
                  </span>
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  <span className="absolute inset-0 rounded-lg -z-10 bg-purple-100 dark:bg-purple-900/30 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                  >
                    <Image src="/en.png" alt="English" width={20} height={20} />
                    English
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32">
                  <DropdownMenuItem className="cursor-pointer">
                    <Image src="/en.png" alt="English" width={20} height={20} className='mr-2' />
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Image src="/tr.png" alt="Türkçe" width={20} height={20} className='mr-2' />
                    Turkish
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <ModeToggle />

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'
          } bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;