"use client";

import { BookOpen, Book, Gamepad, Users, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="ml-0 md:ml-64 mt-10 md:mt-10 p-4 md:p-8 max-w-7xl">
      {/* Hero Section */}
      <div className="mb-8 p-8 rounded-2xl">
        <div className="flex items-center gap-4 mb-6">
          <BookOpen size={40} className="text-purple-600 dark:text-purple-400" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
            Welcome to KelimeUsta
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          {language === "en" ? "This is the admin portal of your dedicated platform for mastering the Turkish language through engaging and interactive methods. From here you can add new words, manage the words and create quizzes. Get started by exploring the features below!" : "Bu, Türkçe dilini etkileşimli ve eğlenceli yöntemlerle ustalaşmanız için özel platformunuzun yönetici portalıdır. Buradan yeni kelimeler ekleyebilir, kelimeleri yönetebilir ve testler oluşturabilirsiniz. Aşağıdaki özellikleri keşfederek başlayın!"}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 border-purple-100 dark:border-purple-900 hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50">
                <Book className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Intelligent Flashcards" : "Akıllı Kartlar"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "en" ? "Create and manage your own flashcards to memorize new words and phrases with ease and efficiency." : "Yeni kelimeleri ve ifadeleri kolaylık ve verimlilikle ezberlemek için kendi kartlarınızı oluşturun ve yönetin."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 border-purple-100 dark:border-purple-900 hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50">
                <Gamepad className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Interactive Games" : "Etkileşimli Oyunlar"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "en" ? "Play fun and engaging games to test your knowledge and reinforce your learning experience." : "Bilginizi test etmek ve öğrenme deneyiminizi pekiştirmek için eğlenceli ve etkileşimli oyunlar oynayın."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 border-purple-100 dark:border-purple-900 hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/50">
                <Trophy className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Progress Tracking" : "İlerleme Takibi"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "en" ? "Monitor your progress and track your learning journey with detailed statistics and analytics." : "Detaylı istatistikler ve analizlerle ilerlemenizi izleyin ve öğrenme yolculuğunuzu takip edin."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="bg-white dark:bg-gray-950 rounded-xl py-4 px-5 md:px-0">
        <h2 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
          {language === "en" ? "How to Get Started?" : "Nasıl Başlayabilirim?"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {language === "en" ? "Learn more about how to use KelimeUsta Admin Portal and its features by reading the documentation and watching the tutorial videos. Click the button below to get started!" : "Belgeleri okuyarak ve öğretici videoları izleyerek KelimeUsta Yönetici Portalı ve özelliklerini nasıl kullanacağınızı öğrenin. Başlamak için aşağıdaki düğmeye tıklayın!"}
        </p>
        <div className="flex gap-4">
          <Button className="px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md">
            {language === "en" ? "Get Started" : "Başlayın"}
          </Button>

        </div>
      </div>
    </div>
  );
}