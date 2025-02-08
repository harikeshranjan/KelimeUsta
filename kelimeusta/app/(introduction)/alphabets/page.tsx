"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { turkish_alphabets } from "@/lib/alphabets";
import { Card, CardContent } from "@/components/ui/card";
import { Volume2 } from "lucide-react";

export default function Alphabets() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen container mx-auto px-4 mt-24 mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {language === "tr" ? "Türk Alfabesi" : "Turkish Alphabet"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "tr"
              ? "Modern Türk alfabesindeki 29 harfi, örnekler ve telaffuzlarıyla öğrenin."
              : "Learn all 29 letters of the modern Turkish alphabet with examples and pronunciations."}
          </p>
        </div>

        {/* Grid Layout for Alphabet Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
          {turkish_alphabets.map((alphabet) => (
            <Card
              key={alphabet.id}
              className="group hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-105 dark:bg-gray-900 dark:hover:bg-gray-950 dark:border dark:border-gray-700 dark:text-white dark:hover:shadow-xl dark:hover:border-gray-600 dark:hover:text-white overflow-hidden cursor-pointer"
            >
              <CardContent className="p-6">
                {/* Letter Display */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-bold text-purple-600 dark:text-purple-400">
                      {alphabet.capital}
                    </span>
                    <span className="text-4xl text-gray-400 dark:text-gray-500">
                      {alphabet.small}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5 rounded-full">
                    <Volume2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {alphabet.sound}
                    </span>
                  </div>
                </div>

                {/* Example Section */}
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    {language === "tr" ? "Örnek Kelime" : "Example Word"}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-lg font-semibold">
                      {alphabet.example}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {alphabet.exampleTranslation}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}