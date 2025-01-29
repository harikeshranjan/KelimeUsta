"use client";

import { useState } from 'react';
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
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { BookPlus } from "lucide-react";
import { useLanguage } from '@/hooks/useLanguage';

export default function AddWordsPage() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [wordType, setWordType] = useState('noun');
  const [example, setExample] = useState('');
  const [exampleTranslation, setExampleTranslation] = useState('');

  const { language } = useLanguage();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

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

  return (
    <div className="min-h-screen ml-0 md:ml-64 mt-12 md:mt-16 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <BookPlus className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {language === "en" ? "Add New Words" : "Yeni Kelimeler Ekle"}
          </h1>
        </div>

        <Card className="border-purple-100 dark:border-purple-900">
          <CardHeader>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {language === "en" ? "Fill out the form below to add a new word to your vocabulary list." : "Kelime listenize yeni bir kelime eklemek için aşağıdaki formu doldurun."}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wordType" className="text-sm font-medium">
                    {language === "en" ? "Word Type" : "Kelime Türü"}
                  </Label>
                  <Select value={wordType} onValueChange={setWordType}>
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder={language === "en" ? "Select a word type" : "Bir kelime türü seçin"}
                      />
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
                />
              </div>

              <div className='flex justify-end items-center gap-4'>
                <Button variant="outline" type="button">
                  {language === "en" ? "Manage Words" : "Kelimeleri Yönet"}
                </Button>
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {language === "en" ? "Add Word" : "Kelime Ekle"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}