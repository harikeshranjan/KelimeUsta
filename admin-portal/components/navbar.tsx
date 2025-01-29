"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useSidebar } from "@/hooks/useSidebar";
import { BookOpen } from "lucide-react";

export default function Navbar() {
  const { toggleSidebar } = useSidebar();
  const { language } = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b shadow-sm dark:bg-gray-950 dark:border-gray-800 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center">
          <div className="flex items-center gap-2 mr-5">
            <BookOpen size={28} className="text-purple-600" />
            <h2 className="text-xl font-semibold">
              KelimeUsta
            </h2>
          </div>

          <div className="relative mx-auto">
            <input
              type="text"
              className="w-[90%] md:w-[30rem] h-[2.6rem] pl-10 pr-4 tracking-wider border border-gray-400 rounded-lg dark:bg-gray-950 dark:border-gray-500 dark:text-gray-100 active:ring-1 active:ring-purple-600 dark:active:ring-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-600"
              placeholder={ language === "tr" ? "Kelime ara" : "Search word" }
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2.5 left-3 text-gray-400 dark:text-gray-500"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={10} cy={10} r={7} />
              <line x1={21} y1={21} x2={15} y2={15} />
            </svg>
          </div>

          <div
            className={`md:hidden z-50`}
            onClick={toggleSidebar}
          >
            <button className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2"
                width={20}
                height={20}
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
        </div>
      </div>
    </header>
  );
}