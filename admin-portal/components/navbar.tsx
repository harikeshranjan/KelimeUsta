"use client";

import { useSidebar } from "@/hooks/useSidebar";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b shadow-sm dark:bg-gray-950 dark:border-gray-800 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href={'/'} className="flex items-center gap-2 mr-5">
            <Image src="/kelimeusta-logo.png" width={40} height={40} alt="KelimeUsta Logo" />
            <h2 className="text-xl font-semibold">
              KelimeUsta
            </h2>
          </Link>

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