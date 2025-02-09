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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { CircleHelp, Home, LucideIcon, Rows4, Sticker, BookOpen, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { useHotkeys } from "react-hotkeys-hook";
import { Badge } from './ui/badge';

interface DropdownItem {
  href: string;
  label: string;
  trLabel: string;
  isNew?: boolean;
  isUnderBuild?: boolean;
}

interface NavItem {
  href: string;
  icon: LucideIcon;
  label: string;
  trLabel: string;
  isNew?: boolean;
  isUnderBuild?: boolean;
  dropdown?: DropdownItem[];
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  useHotkeys("shift+l", () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  });

  const navItems: NavItem[] = [
    { href: '/', label: 'Home', icon: Home, trLabel: 'Anasayfa' },
    {
      href: '/introduction',
      icon: BookOpen,
      label: 'Introduction',
      trLabel: 'Giriş',
      dropdown: [
        { href: '/alphabets', label: 'Alphabets', trLabel: 'Alfabeler', isNew: true },
        { href: '/tense', label: 'Tense', trLabel: 'Zaman', isNew: true },
        { href: '/vowel-harmony', label: 'Vowel Harmony', trLabel: 'Ünlü Uyumu', isNew: true },
      ]
    },
    { href: '/flashcards', icon: Sticker, label: 'Flashcards', trLabel: 'Kartlar' },
    { href: '/paragraph', icon: Rows4, label: 'Paragraphs', trLabel: 'Paragraflar', isUnderBuild: true },
    { href: '/about-us', icon: CircleHelp, label: 'About Us', trLabel: 'Hakkımızda' },
  ];

  const isActiveLink = (href: string) => pathname === href || pathname.startsWith(href + '/');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  }

  const ListItem = React.forwardRef<
    React.ComponentRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/30 dark:hover:text-purple-400",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  const NavLink = ({ item }: { item: NavItem }) => {
    if (item.dropdown) {
      return (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/30 dark:hover:text-purple-400",
                  isActiveLink(item.href) && "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                )}
              >
                <item.icon size={20} className="mr-2" />
                {language === 'en' ? item.label : item.trLabel}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2">
                  {item.dropdown.map((dropdownItem) => (
                    <ListItem
                      key={dropdownItem.href}
                      href={dropdownItem.href}
                      title={language === 'en' ? dropdownItem.label : dropdownItem.trLabel}
                    >
                      {language === 'en'
                        ? `Learn about ${dropdownItem.label.toLowerCase()} in Turkish language`
                        : `Türk dilindeki ${dropdownItem.trLabel.toLowerCase()} hakkında bilgi edinin`
                      }
                      {dropdownItem.isNew && (
                        <Badge className="absolute top-1 right-1 transform translate-x-1 -translate-y-1">
                          {language === 'en' ? 'New' : 'Yeni'}
                        </Badge>
                      )}
                      {dropdownItem.isUnderBuild && (
                        <Badge className="absolute top-1 right-1 transform translate-x-1 -translate-y-1">
                          {language === 'en' ? 'Soon' : 'Yakında'}
                        </Badge>
                      )}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
    }

    return (
      <Link
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
        {item.isNew && (
          <Badge className="absolute -top-2 -right-4">
            {language === 'en' ? 'New' : 'Yeni'}
          </Badge>
        )}
        {item.isUnderBuild && (
          <Badge className="absolute -top-2 -right-4">
            {language === 'en' ? 'Soon' : 'Yakında'}
          </Badge>
        )}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
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
                <NavLink key={item.href} item={item} />
              ))}
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    {language === "en" ? (
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
                    {language === 'en' ? 'English' : 'İngilizce'}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" onClick={toggleLanguage}>
                    <Image src="/tr.png" alt="Türkçe" width={20} height={20} className='mr-2' />
                    {language === 'en' ? 'Turkish' : 'Türkçe'}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <ModeToggle />

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
            <div key={item.href}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => { }}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded ${isActiveLink(item.href)
                      ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }`}
                  >
                    <span className="flex items-center gap-2">
                      <item.icon size={20} />
                      {language === 'en' ? item.label : item.trLabel}
                    </span>
                    <ChevronDown size={16} />
                  </button>
                  <div className="pl-6 ml-4 border-l border-gray-200 dark:border-gray-700">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className={`block px-4 py-2 rounded ${isActiveLink(dropdownItem.href)
                          ? 'text-purple-600 dark:text-purple-400'
                          : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                          }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {language === 'en' ? dropdownItem.label : dropdownItem.trLabel}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
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
                      {language === 'en' ? item.label : item.trLabel}
                    </span>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;