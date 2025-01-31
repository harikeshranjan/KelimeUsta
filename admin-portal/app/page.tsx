"use client";

import { BookOpen, Book, Gamepad, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const { language } = useLanguage();
  const router = useRouter();

  return (
    <div className="ml-0 md:ml-64 mt-10 md:mt-10 p-4 md:p-8 max-w-7xl">
      {/* Hero Section */}
      <div className="mb-8 p-8 rounded-2xl">
        <div className="flex items-center gap-4 mb-6">
          <BookOpen size={40} className="text-purple-600 dark:text-purple-400" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
            {language === "en" ? "Welcome to KelimeUsta Admin Portal" : language === "tr" ? "KelimeUsta Yönetici Portalına Hoşgeldiniz" : "Hûn bi xêr hatin Portala Admin KelimeUsta"}
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          {language === "en" ? "KelimeUsta is a powerful and user-friendly platform that helps you learn new words and phrases in a fun and interactive way. Get started today and take your vocabulary to the next level!" : language === "tr" ? "KelimeUsta, yeni kelimeleri ve ifadeleri eğlenceli ve etkileşimli bir şekilde öğrenmenize yardımcı olan güçlü ve kullanıcı dostu bir platformdur. Bugün başlayın ve kelime dağarcığınızı bir üst seviyeye taşıyın!" : "KelimeUsta platformek hêzdar û bikarhêner-heval e ku ji we re dibe alîkar ku hûn peyv û hevokên nû bi rengek xweş û înteraktîf fêr bibin. Îro dest pê bikin û peyva xwe derxînin asta pêş!"}
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
                  {language === "en" ? "Flashcards" : language === "tr" ? "Kartlar" : "Kartên"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "en" ? "Create and study flashcards to memorize new words and phrases effectively." : language === "tr" ? "Yeni kelimeleri ve ifadeleri etkili bir şekilde ezberlemek için kartlar oluşturun ve çalışın." : "Peyv û hevokên nû bi awayek baş bînin û xweş bikin."}
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
                  {language === "en" ? "Interactive Games" : language === "tr" ? "Etkileşimli Oyunlar" : "Games Interaktif"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "en" ? "Play fun and engaging games to test your knowledge and improve your vocabulary." : language === "tr" ? "Bilginizi test etmek ve kelime dağarcığınızı geliştirmek için eğlenceli ve ilgi çekici oyunlar oynayın." : "Testê bikin û peyva xwe pêşve bixin."}
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
                  {language === "en" ? "Achievements" : language === "tr" ? "Başarılar" : "Serfirazî"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "en" ? "Unlock achievements and earn rewards as you progress through your learning journey." : language === "tr" ? "Öğrenme yolculuğunuz boyunca ilerledikçe başarıları açın ve ödüller kazanın." : "Gava ku hûn di rêwîtiya fêrbûna xwe de pêşve diçin, destkeftiyan vekin û xelatan bistînin."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="bg-white dark:bg-gray-950 rounded-xl py-4 px-5 md:px-0">
        <h2 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
          {language === "en" ? "How to Get Started?" : language === "tr" ? "Nasıl Başlayabilirim?" : "Çawa Dest Pê bikim?"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {language === "en" ? "Learn more about how to use KelimeUsta Admin Portal and its features by reading the documentation and watching the tutorial videos. Click the button below to get started!" : language === "tr" ? "Belgeleri okuyarak ve öğretici videoları izleyerek KelimeUsta Yönetici Portalı ve özelliklerini nasıl kullanacağınızı öğrenin. Başlamak için aşağıdaki düğmeye tıklayın!" : "Belgeyên bixwînin û vîdyoyên ferhengê bibînin û hûn dikarin bifikirin ku hûn çawa dikarin KelimeUsta Portalê û xizmetên wê bikar bînin. Ji bo destpêkirina jêrîn li jorê li pêşkêşiyê bikin!"}
        </p>
        <div className="flex gap-4">
          <Button
            className="px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md"
            onClick={() => router.push("/get-started")}
          >
            {language === "en" ? "Get Started" : language === "tr" ? "Başlayın" : "Destpêke"}
          </Button>

        </div>
      </div>
    </div>
  );
}