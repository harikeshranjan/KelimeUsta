"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Plus, List, Languages, Users, BookOpen, CircleHelp } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useSidebar } from "@/hooks/useSidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";
import { useHotkeys } from "react-hotkeys-hook";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar, isDesktop } = useSidebar();
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  useHotkeys('ctrl+b', toggleSidebar);
  useHotkeys('shift+l', () => language === "en" ? setLanguage("tr") : language === "tr" ? setLanguage("ku") : setLanguage("en"));

  const isActiveLink = (path: string) => {
    return pathname === path;
  };

  return (
    <aside className={`fixed top-0 left-0 min-h-screen w-60 bg-white border-r shadow-sm dark:bg-gray-950 dark:border-gray-800 z-50 transition-all duration-200 ${isDesktop ? 'translate-x-0' : isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="relative px-4 py-2 md:py-0">
        <div className={`flex items-center gap-2 px-2 py-3 mb-6 dark:border-gray-700`}>
          <BookOpen size={28} className="text-purple-600" />
          <h2 className="text-xl font-semibold">
            KelimeUsta
          </h2>
        </div>

        {/* hamburger menu */}
        <div
          className={`absolute top-3 right-3 md:hidden z-50`}
          onClick={toggleSidebar}
        >
          <button className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={4} y1={6} x2={20} y2={6} />
              <line x1={4} y1={12} x2={20} y2={12} />
              <line x1={4} y1={18} x2={20} y2={18} />
            </svg>
          </button>
        </div>

        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200",
                  "border border-transparent",
                  "hover:border-purple-100 hover:bg-purple-50/50 hover:text-purple-700",
                  "dark:hover:border-purple-900 dark:hover:bg-purple-950/50 dark:hover:text-purple-400",
                  "hover:shadow-sm",
                  isActiveLink("/") && "bg-purple-50 text-purple-700 border-purple-100 shadow-sm dark:bg-purple-950/50 dark:text-purple-400 dark:border-purple-900"
                )}
              >
                <Home size={18} />
                <span className="font-medium">
                  { language === "en" ? "Home" : language === "tr" ? "Anasayfa" : language === "ku" ? "Malper" : "Home" }
                </span>
              </Link>
            </li>

            {/* Vocabularies Section */}
            <li className="mt-6">
              <div className="px-2">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
                  { language === "en" ? "Vocabularies" : language === "tr" ? "Kelimeler" : language === "ku" ? "Kelim" : "Vocabularies" }
                  <span className="w-full h-[1px] bg-gray-300 dark:bg-gray-700"></span>
                </p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/add-words"
                      className={cn(
                        "flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200",
                        "border border-transparent",
                        "hover:border-purple-100 hover:bg-purple-50/50 hover:text-purple-700",
                        "dark:hover:border-purple-900 dark:hover:bg-purple-950/50 dark:hover:text-purple-400",
                        "hover:shadow-sm",
                        isActiveLink("/add-words") && "bg-purple-50 text-purple-700 border-purple-100 shadow-sm dark:bg-purple-950/50 dark:text-purple-400 dark:border-purple-900"
                      )}
                    >
                      <Plus size={18} />
                      <span className="font-medium">
                        { language === "en" ? "Add Words" : language === "tr" ? "Kelimeler Ekle" : language === "ku" ? "Bibîne" : "Add Words" }
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/manage-words"
                      className={cn(
                        "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200",
                        "border border-transparent",
                        "hover:border-purple-100 hover:bg-purple-50/50 hover:text-purple-700",
                        "dark:hover:border-purple-900 dark:hover:bg-purple-950/50 dark:hover:text-purple-400",
                        "hover:shadow-sm",
                        isActiveLink("/manage-words") && "bg-purple-50 text-purple-700 border-purple-100 shadow-sm dark:bg-purple-950/50 dark:text-purple-400 dark:border-purple-900"
                      )}
                    >
                      <List size={18} />
                      <span className="font-medium">
                        { language === "en" ? "Manage Words" : language === "tr" ? "Kelimeleri Yönet" : language === "ku" ? "Rêvebirin" : "Manage Words" }
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Settings Section */}
            <li className="mt-6">
              <div className="px-2">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
                  { language === "en" ? "Settings" : language === "tr" ? "Ayarlar" : language === "ku" ? "Mîheng" : "Settings" }
                  <span className="w-full h-[1px] bg-gray-300 dark:bg-gray-700"></span>
                </p>
                <ul className="space-y-2">
                  <li className="px-2">
                    <ModeToggle />
                  </li>
                  <li className="flex items-center justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-[92%] justify-start gap-2"
                        >
                          { language === "en" ? (
                            <Image src="/en.png" width={20} height={20} alt="English" />
                          ) : language === "tr" ? (
                            <Image src="/tr.png" width={20} height={20} alt="Turkish" />
                          ) 
                          : (
                            <Image src="/tr.png" width={20} height={20} alt="Kurdish" />
                          )}
                          <span className="font-medium">
                            { language === "en" ? "English" : language === "tr" ? "Türkçe" : language === "ku" ? "Kurdî" : "English" }
                          </span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setLanguage("en")} className="flex items-center gap-3">
                          <Image src="/en.png" width={20} height={20} alt="English" />
                          { language === "en" ? "English" : language === "tr" ? "İngilizce" : language === "ku" ? "Îngilîzî" : "English" }
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLanguage("tr")} className="flex items-center gap-3">
                          <Image src="/tr.png" width={20} height={20} alt="Turkish" />
                          { language === "en" ? "Turkish" : language === "tr" ? "Türkçe" : language === "ku" ? "Tirkî" : "Turkish" }
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLanguage("ku")} className="flex items-center gap-3">
                          <Image src="/tr.png" width={20} height={20} alt="Kurdish" />
                          { language === "en" ? "Kurdish" : language === "tr" ? "Kürtçe" : language === "ku" ? "Kurdî" : "Kurdish" }
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                </ul>
              </div>
            </li>

            {/* Other Sections */}
            <li className="mt-6">
              <div className="px-2">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
                  { language === "en" ? "Other" : language === "tr" ? "Diğer" : "Other" }
                  <span className="w-full h-[1px] bg-gray-300 dark:bg-gray-700"></span>
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/get-started"
                      className={cn(
                        "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200",
                        "border border-transparent",
                        "hover:border-purple-100 hover:bg-purple-50/50 hover:text-purple-700",
                        "dark:hover:border-purple-900 dark:hover:bg-purple-950/50 dark:hover:text-purple-400",
                        "hover:shadow-sm",
                        isActiveLink("/get-started") && "bg-purple-50 text-purple-700 border-purple-100 shadow-sm dark:bg-purple-950/50 dark:text-purple-400 dark:border-purple-900"
                      )}
                    >
                      <Users size={18} />
                      <span className="font-medium">
                        { language === "en" ? "Get Started" : language === "tr" ? "Başlangıç" : language === "ku" ? "Destpêk" : "Get Started" }
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className={cn(
                        "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200",
                        "border border-transparent",
                        "hover:border-purple-100 hover:bg-purple-50/50 hover:text-purple-700",
                        "dark:hover:border-purple-900 dark:hover:bg-purple-950/50 dark:hover:text-purple-400",
                        "hover:shadow-sm",
                        isActiveLink("/about-us") && "bg-purple-50 text-purple-700 border-purple-100 shadow-sm dark:bg-purple-950/50 dark:text-purple-400 dark:border-purple-900"
                      )}
                    >
                      <Users size={18} />
                      <span className="font-medium">
                        { language === "en" ? "About Us" : language === "tr" ? "Hakkımızda" : language === "ku" ? "Me" : "About Us" }
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className={cn(
                        "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200",
                        "border border-transparent",
                        "hover:border-purple-100 hover:bg-purple-50/50 hover:text-purple-700",
                        "dark:hover:border-purple-900 dark:hover:bg-purple-950/50 dark:hover:text-purple-400",
                        "hover:shadow-sm",
                        isActiveLink("/contact-us") && "bg-purple-50 text-purple-700 border-purple-100 shadow-sm dark:bg-purple-950/50 dark:text-purple-400 dark:border-purple-900"
                      )}
                    >
                      <CircleHelp size={18} />
                      <span className="font-medium">
                        { language === "en" ? "Contact Us" : language === "tr" ? "İletişim" : language === "ku" ? "Pêwîst" : "Contact Us" }
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}