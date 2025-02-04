"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CircleHelp, Home, LucideIcon, Rows4, Sticker } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface NavItem {
  href: string;
  icon: LucideIcon;
  label: string;
  trLabel: string;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathaname = usePathname();
  const { language, setLanguage } = useLanguage();

  const navItems: NavItem[] = [
    { href: '/', label: 'Home', icon: Home, trLabel: 'Anasayfa' },
    { href: '/flashcards', icon: Sticker, label: 'Flashcards', trLabel: 'Kartlar' },
    { href: '/paragraph', icon: Rows4, label: 'Paragraph', trLabel: 'Paragraf' },
    { href: '/about-us', icon: CircleHelp, label: 'About Us', trLabel: 'Hakkımızda' },
  ];

  const isActiveLink = (href: string) => pathaname === href;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  }

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
                  <span className={`flex gap-2 items-center relative z-10 transition-colors duration-300 ${isActiveLink(item.href)
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'group-hover:text-purple-600 dark:group-hover:text-purple-400'
                    }`}>
                    <item.icon size={20} />
                    {language === 'en' ? item.label : item.trLabel}
                  </span>
                  <span className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-purple-500 transition-transform duration-300 ease-out ${isActiveLink(item.href)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  <span className={`absolute inset-0 rounded-lg -z-10 bg-purple-100 dark:bg-purple-900/30 transition-all duration-300 ${isActiveLink(item.href)
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                    }`} />
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
                    { language === "en" ? (
                      <>
                        <Image src="/en.png" alt="English" width={20} height={20} />
                        English
                      </>
                    ) : (
                      <>
                        <Image src="/tr.png" alt="Türkçe" width={20} height={20} />
                        Türkçe
                      </>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32">
                  <DropdownMenuItem className="cursor-pointer" onClick={toggleLanguage}>
                    <Image src="/en.png" alt="English" width={20} height={20} className='mr-2' />
                    { language === 'en' ? 'English' : 'İngilizce' }
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" onClick={toggleLanguage}>
                    <Image src="/tr.png" alt="Türkçe" width={20} height={20} className='mr-2' />
                    { language === 'en' ? 'Turkish' : 'Türkçe' }
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
        className={`md:hidden ${isMobileMenuOpen ? 'animate-in slide-in-from-top' : 'animate-out slide-out-to-top hidden'
          } bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-lg`}
      >
        <div className="px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center px-4 py-3 rounded transition-all duration-200 ${isActiveLink(item.href)
                ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative flex items-center">
                <span className={`flex items-center justify-center gap-2 text-base font-medium transition-transform group-hover:translate-x-1 ${isActiveLink(item.href)
                  ? 'text-purple-600 dark:text-purple-400'
                  : 'group-hover:text-purple-600 dark:group-hover:text-purple-400'
                  }`}>
                  <item.icon size={20} />
                  {item.label}
                </span>
              </div>
              <div className={`ml-auto transform transition-transform ${isActiveLink(item.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                <svg
                  className="w-4 h-4 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;