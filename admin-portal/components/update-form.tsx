"use client";

import React, { useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useToast } from "@/hooks/use-toast";
import { Loader2, X } from "lucide-react";
import { useUpdateForm } from "@/hooks/useUpdateForm";

export default function UpdateForm({ onClose }: { onClose: () => void }) {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [wordType, setWordType] = useState('');  // Initialize as empty string
  const [example, setExample] = useState('');
  const [exampleTranslation, setExampleTranslation] = useState('');
  const [isLoading] = useState(false);
  const { language } = useLanguage();
  const { toast } = useToast();
  const { isUpdateFormOpen, toggleUpdateForm, sId, sWord, sMeaning, sWordType, sExample, sExampleTranslation } = useUpdateForm();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Update form values when data is available
  useEffect(() => {
    if (isUpdateFormOpen) {
      setWord(sWord);
      setMeaning(sMeaning);
      setWordType(sWordType || '');  // Ensure we handle null/undefined
      setExample(sExample);
      setExampleTranslation(sExampleTranslation);
    }
  }, [isUpdateFormOpen, sWord, sMeaning, sWordType, sExample, sExampleTranslation]);

  const wordTypes = [
    { value: 'noun', enLabel: 'Noun', trLabel: 'İsim', krLabel: 'Nav' },
    { value: 'verb', enLabel: 'Verb', trLabel: 'Fiil', krLabel: 'Dongsa' },
    { value: 'adjective', enLabel: 'Adjective', trLabel: 'Sıfat', krLabel: 'Hyongsa' },
    { value: 'adverb', enLabel: 'Adverb', trLabel: 'Zarf', krLabel: 'Pomunsa' },
    { value: 'pronoun', enLabel: 'Pronoun', trLabel: 'Zamir', krLabel: 'Taeyongsa' },
    { value: 'preposition', enLabel: 'Preposition', trLabel: 'Edat', krLabel: 'Josa' },
    { value: 'conjunction', enLabel: 'Conjunction', trLabel: 'Bağlaç', krLabel: 'Gwaham' },
    { value: 'interjection', enLabel: 'Interjection', trLabel: 'Ünlem', krLabel: 'Ganada' },
  ];

  // Function to get label for word type
  const getWordTypeLabel = (value: string) => {
    const wordType = wordTypes.find(type => type.value === value);
    return wordType ? (language === "en" ? wordType.enLabel : wordType.trLabel) : '';
  };

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/vocabs/update/${sId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          word,
          meaning,
          type: wordType,
          example,
          exampleMeaning: exampleTranslation,
        }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: language === "en" ? "Word updated successfully" : "Kelime başarıyla güncellendi",
          variant: "default",
          duration: 5000,
        });
        onClose();
        toggleUpdateForm();
      }

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <Card className="w-full h-[95%] max-w-2xl relative border-purple-100 dark:border-purple-900 animate-in slide-in-from-bottom-4 overflow-y-auto">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-2"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        
        <CardHeader>
          <h2 className="text-xl font-semibold mt-4">
            {language === "en" ? "Update Word" : "Kelime Güncelle"}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {language === "en" 
              ? "Update the word details in your vocabulary list" 
              : "Kelime listenizde kelime detaylarını güncelleyin"}
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleUpdate} className="space-y-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="word" className="text-sm font-medium">
                  {language === "en" ? "Turkish Word" : "Türkçe Kelime"}
                </Label>
                <Input
                  id="word"
                  type="text"
                  placeholder={language === "en" ? "Enter the Turkish word" : "Türkçe kelimeyi girin"}
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  className="focus:ring-2 focus:ring-purple-500"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="wordType" className="text-sm font-medium">
                  {language === "en" ? "Word Type" : "Kelime Türü"}
                </Label>
                <Select 
                  value={wordType} 
                  onValueChange={setWordType} 
                  disabled={isLoading}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue>
                      {wordType ? getWordTypeLabel(wordType) : (
                        language === "en" ? "Select a word type" : "Bir kelime türü seçin"
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {wordTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {language === "en" ? type.enLabel : type.trLabel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Rest of the form remains the same */}
            <div className="space-y-2">
              <Label htmlFor="meaning" className="text-sm font-medium">
                {language === "en" ? "Meaning" : "Anlam"}
              </Label>
              <Textarea
                id="meaning"
                placeholder={language === "en" ? "Enter the meaning of the word" : "Kelimenin anlamını girin"}
                value={meaning}
                onChange={(e) => setMeaning(e.target.value)}
                className="min-h-[100px] focus:ring-2 focus:ring-purple-500"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="example" className="text-sm font-medium">
                {language === "en" ? "Example Sentence (Turkish)" : "Örnek Cümle (Türkçe)"}
              </Label>
              <Textarea
                id="example"
                placeholder={language === "en" ? "Enter an example sentence in Turkish" : "Türkçe'de bir örnek cümle girin"}
                value={example}
                onChange={(e) => setExample(e.target.value)}
                className="min-h-[100px] focus:ring-2 focus:ring-purple-500"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="exampleTranslation" className="text-sm font-medium">
                {language === "en" ? "Example Translation (English)" : "Örnek Çeviri (İngilizce)"}
              </Label>
              <Textarea
                id="exampleTranslation"
                placeholder={language === "en" ? "Enter the translation of the example sentence in English" : "Örnek cümlenin İngilizce çevirisini girin"}
                value={exampleTranslation}
                onChange={(e) => setExampleTranslation(e.target.value)}
                className="min-h-[100px] focus:ring-2 focus:ring-purple-500"
                disabled={isLoading}
              />
            </div>

            <div className="flex justify-end items-center gap-4">
              <Button 
                variant="outline" 
                type="button" 
                disabled={isLoading}
                onClick={onClose}
              >
                {language === "en" ? "Cancel" : "İptal"}
              </Button>
              <Button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {language === "en" ? "Updating..." : "Güncelleniyor..."}
                  </>
                ) : (
                  language === "en" ? "Update Word" : "Kelimeyi Güncelle"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}