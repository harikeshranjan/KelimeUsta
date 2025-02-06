"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { GraduationCap, BookOpen, Languages } from "lucide-react";

export default function Home() {
  const { language} = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 mt-4">
      {/* Hero Section */}
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-6xl pt-20 pb-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              KelimeUsta
              <span className="block text-purple-600 dark:text-purple-400">
                {language === "en" ? "Master Turkish Words" : "Türkçe Kelimeleri Öğrenin"}
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {language === "en" ? "Enhance your Turkish vocabulary through immersive paragraph-based learning. Practice translations at your own pace and level." : "Türkçe kelime dağarcığınızı, içerik odaklı öğrenme ile geliştirin. Kendi hızınızda ve seviyenizde çeviri pratiği yapın."}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-purple-500 dark:hover:bg-purple-400">
                {language === "en" ? "Start Learning" : "Öğrenmeye Başla"}
              </button>
              <button className="text-lg font-semibold leading-6 text-gray-900 hover:text-purple-600 dark:text-gray-100 dark:hover:text-purple-400">
                {language === "en" ? "Learn More →" : "Daha Fazla Bilgi →"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800 border-t-4 border-purple-600 dark:border-purple-400 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="mb-4 inline-block rounded-lg bg-purple-100 p-3 dark:bg-purple-900">
              <Languages className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              {language === "en" ? "Level-Based Learning" : "Seviyeye Göre Öğrenme"}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {language === "en" ? "Progress through carefully curated content tailored to your proficiency level." : "Seviyenize uygun olarak hazırlanmış içeriklerle ilerleyin."}
            </p>
          </div>
          
          <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800 border-t-4 border-purple-600 dark:border-purple-400 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="mb-4 inline-block rounded-lg bg-purple-100 p-3 dark:bg-purple-900">
              <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              {language === "en" ? "Contextual Learning" : "Bağlamsal Öğrenme"}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {language === "en" ? "Learn words in context through real-world paragraphs and scenarios." : "Gerçek hayattan paragraflar ve senaryolar aracılığıyla kelimeleri bağlamında öğrenin."}
            </p>
          </div>
          
          <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800 border-t-4 border-purple-600 dark:border-purple-400 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="mb-4 inline-block rounded-lg bg-purple-100 p-3 dark:bg-purple-900">
              <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              {language === "en" ? "Translation Exercises" : "Çeviri Egzersizleri"}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {language === "en" ? "Improve your skills with interactive translation practices and feedback." : "Etkileşimli çeviri pratiği ve geri bildirimlerle becerilerinizi geliştirin."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}