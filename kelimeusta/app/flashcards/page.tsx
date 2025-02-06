"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bug, Shuffle, Loader2, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useFlashcardReport } from "@/hooks/useFlashcardReport";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Flashcard {
  _id: string;
  word: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
}

interface FlashcardReport {
  word: string;
  type: "spelling" | "meaning" | "example" | "exampleMeaning" | "none";
}

const ReportModal = ({
  word,
  onClose,
  onReport,
  language
}: {
  word: string,
  onClose: () => void,
  onReport: (type: string) => void,
  language: string
}) => {
  const [selectedType, setSelectedType] = useState<string>("none");

  const reportTypes = [
    { value: "spelling", label: language === "en" ? "Spelling Issue" : "Yazım Hatası" },
    { value: "meaning", label: language === "en" ? "Meaning Issue" : "Anlam Hatası" },
    { value: "example", label: language === "en" ? "Example Issue" : "Örnek Hatası" },
    { value: "exampleMeaning", label: language === "en" ? "Example Meaning Issue" : "Örnek Anlamı Hatası" }
  ];

  const handleSubmit = () => {
    onReport(selectedType);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-80 relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>

        <h2 className="text-lg font-semibold mb-4">
          {language === "en" ? "Report Issue" : "Sorun Bildir"}
        </h2>

        <div className="space-y-3">
          {reportTypes.map((type) => (
            <div key={type.value} className="flex items-center space-x-2">
              <Checkbox
                id={type.value}
                checked={selectedType === type.value}
                onCheckedChange={() => setSelectedType(type.value)}
              />
              <Label htmlFor={type.value}>{type.label}</Label>
            </div>
          ))}
        </div>

        <Button
          className="w-full mt-4"
          onClick={handleSubmit}
          disabled={selectedType === "none"}
        >
          {language === "en" ? "Submit Report" : "Raporu Gönder"}
        </Button>
      </div>
    </div>
  );
};

export default function Flashcards() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);
  const [showReportModal, setShowReportModal] = useState(false);
  const { setReport } = useFlashcardReport();
  const { language } = useLanguage();
  const { toast } = useToast();

  const fetchRandomFlashcard = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/vocabs/random`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      return Array.isArray(data) ? data : [data];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const initializeCards = async () => {
      const data = await fetchRandomFlashcard();
      setFlashcards(data);
      setLoading(false);
    };

    initializeCards();
  }, []);

  const shuffleCards = async () => {
    setLoading(true);
    setIsFlipped(false);

    try {
      const newCards = await fetchRandomFlashcard();
      setFlashcards(newCards);
    } catch (error) {
      console.error("Error shuffling cards:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && flashcards.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center mt-16">
        <h1 className="text-4xl font-bold mb-4">
          {language === "en" ? "Flashcards" : "Kartlar"}
        </h1>
        <div className="flex items-center justify-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin text-purple-600" />
          <p>
            {language === "en" ? "Loading flashcards..." : "Kartlar yükleniyor..."}
          </p>
        </div>
      </div>
    );
  }

  const handleReport = async (type: string) => {
    const word = flashcards[0]?.word;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/flashcards/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ word, type }),
      });

      if (response.ok) {
        toast({
          title: language === "en" ? "Report submitted" : "Rapor gönderildi",
          description:
            language === "en"
              ? "Thank you for helping us improve the flashcards."
              : "Kartları iyileştirmemize yardımcı olduğunuz için teşekkür ederiz.",
          variant: "default",
          duration: 5000,
        });

        setReport({ word: "", type: "none" });
      }

      if (!response.ok) {
        toast({
          title: language === "en" ? "Error" : "Hata",
          description:
            language === "en"
              ? "Failed to submit report. Please try again later."
              : "Rapor gönderilemedi. Lütfen daha sonra tekrar deneyin.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error reporting flashcard:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold text-center mb-4">{language === "en" ? "Flashcards" : "Kartlar"}</h1>
      <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
        {language === "en" ? "Test your knowledge with these interactive flashcards. Click on a card to reveal the answer with examples and usage. Tap the shuffle button to get a new card." : "Bu interaktif kartlarla bilginizi test edin. Bir kartın üzerine tıklayarak cevabı, örnekler ve kullanımı görebilirsiniz. Yeniden karıştır butonuna tıklayarak yeni bir kart alabilirsiniz."}
      </p>

      <div className="max-w-sm mx-auto mb-8">
        <div
          className="perspective-1000 cursor-pointer"
          onClick={() => !loading && setIsFlipped(!isFlipped)}
        >
          <div
            className={`relative transition-transform duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""
              }`}
          >
            {/* Front of card */}
            <Card className="p-8 min-h-[300px] backface-hidden flex items-center justify-center rounded-3xl bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-purple-200 dark:border-gray-700/50 shadow-lg">
              <div className="flex flex-col items-center justify-center space-y-4">
                {loading ? (
                  <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
                ) : (
                  <>
                    <span className="text-sm text-gray-400 dark:text-gray-300 animate-pulse">
                      {language === "en" ? "Click to flip" : "Çevirmek için tıklayın"}
                    </span>
                    <p className="text-4xl font-semibold text-center text-purple-700 dark:text-purple-100">
                      {flashcards[0]?.word}
                    </p>
                  </>
                )}
              </div>
            </Card>

            {/* Back of card */}
            <Card className="p-8 min-h-[300px] absolute inset-0 rotate-y-180 backface-hidden rounded-3xl bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-purple-200 dark:border-gray-700/50 shadow-lg">
              <div className="flex flex-col h-full">
                {/* report button */}
                <div className="absolute top-4 right-4">
                  <Button
                    variant={"ghost"}
                    className="text-xs text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none hover:bg-transparent"
                    onClick={() => setShowReportModal(true)}
                  >
                    <Bug className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                  {loading ? (
                    <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
                  ) : (
                    <>
                      <p className="text-4xl text-center text-purple-700 dark:text-purple-100 font-bold">
                        {flashcards[0]?.meaning}
                      </p>

                      <div className="w-full flex flex-col items-center justify-center gap-1">
                        <div>
                          <p className="text-lg text-purple-600 dark:text-purple-100">
                            {flashcards[0]?.example}
                          </p>
                        </div>
                        <p className="text-xs text-gray-400 dark:text-gray-300 text-center">
                          &#40;{flashcards[0]?.exampleMeaning}&#41;
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <ReportModal
          word={flashcards[0]?.word || ""}
          onClose={() => setShowReportModal(false)}
          onReport={handleReport}
          language={language}
        />
      )}

      <div className="text-center">
        <Button
          onClick={shuffleCards}
          className="gap-2"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              {language === "en" ? "Shuffling..." : "Karıştırılıyor..."}
            </>
          ) : (
            <>
              <Shuffle className="w-4 h-4" />
              {language === "en" ? "Shuffle" : "Karıştır"}
            </>
          )}
        </Button>
      </div>
    </div>
  );
}