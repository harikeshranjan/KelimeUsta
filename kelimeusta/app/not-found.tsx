"use client";

import { useLanguage } from "@/hooks/useLanguage"
import Link from "next/link";

export default function Error() {
  const { language } = useLanguage()

  return (
    <div className="text-center mt-40 mb-20">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="mb-4 text-lg text-gray-600">
        { language === "en" ? "The page your are looking for is either under construction or doesn't exist" : "Aradığınız sayfa ya yapım aşamasında ya da mevcut değil" }
      </p>
      <div className="animate-bounce">
        <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
      </div>
      <p className="mt-4 text-gray-600">Let's get you back <Link href="/" className="text-blue-500">home</Link>.</p>
    </div>
  )
}