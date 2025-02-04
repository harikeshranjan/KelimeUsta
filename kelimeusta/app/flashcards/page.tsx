"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shuffle } from "lucide-react";

interface Flashcard {
  _id: string;
  word: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
}

export default function Flashcards() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);

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
    fetchRandomFlashcard().then((data) => {
      setFlashcards(data);
    });
  }, [isShuffling]);

  const shuffleCards = () => {
    setIsShuffling(true);
    setIsFlipped(false);
    setIsShuffling(false);
    fetchRandomFlashcard().then((data) => {
      setFlashcards(data);
    });
  };

  if (flashcards.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Flashcards</h1>
        <p>Loading flashcards...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Flashcards</h1>
      <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
        Test your knowledge with these interactive flashcards. Click on a card
        to reveal the answer, and use the shuffle button to practice with
        different questions.
      </p>

      <div className="max-w-sm mx-auto mb-8">
        <div
          className="perspective-1000 cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className={`relative transition-transform duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""
              }`}
          >
            {/* Front of card */}
            <Card className="p-8 min-h-[300px] backface-hidden border-2">
              <div className="flex flex-col items-center justify-center h-full">
                <span className="text-sm text-muted-foreground mb-6">tap to flip</span>
                <p className="text-4xl font-semibold text-center">
                  {flashcards[0].word}
                </p>
              </div>
            </Card>

            {/* Back of card */}
            <Card className="p-8 min-h-[300px] absolute inset-0 rotate-y-180 backface-hidden border-2">
              <div className="flex flex-col h-full">
                <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                  <p className="text-xl font-medium text-center">
                    {flashcards[0].meaning}
                  </p>

                  <div className="w-full space-y-3">
                    <p className="text-sm italic text-muted-foreground text-center border-l-2 border-primary pl-4">
                      {flashcards[0].example}
                    </p>
                    <p className="text-sm text-muted-foreground text-center">
                      {flashcards[0].exampleMeaning}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button onClick={shuffleCards} className="gap-2">
          <Shuffle className="w-4 h-4" />
          Shuffle
        </Button>
      </div>
    </div>
  );
}
