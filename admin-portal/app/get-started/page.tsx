"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Keyboard, FileSpreadsheet, Globe, Layout, ChevronRight, Book, Settings, Zap } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function GetStarted() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen mt-5 ml-0 md:ml-64 flex flex-col p-4 md:p-8">
      {/* Background with animated gradient */}
      <div className="fixed inset-0 -z-10"></div>

      {/* Hero Section */}
      <div className="relative space-y-4 mb-12 p-8 rounded-2xl">
        <div className="absolute top-0 right-0 w-64 h-64"></div>
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent dark:from-purple-300 dark:to-indigo-200">
          Get Started
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Welcome to the Admin Portal! Discover powerful tools and features to manage your dictionary efficiently.
        </p>
        <div className="flex gap-4 mt-6">
          <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-300">
            <Zap className="h-4 w-4" />
            Quick Setup
          </div>
          <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-300">
            <Settings className="h-4 w-4" />
            Easy Configuration
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        {/* Adding Words Section */}
        <Card 
          className={`relative overflow-hidden border-purple-200/50 dark:border-purple-800/50 transition-all duration-300 ${
            hoveredCard === 'words' ? 'shadow-2xl shadow-purple-200/20 dark:shadow-purple-900/20 scale-[1.02]' : 'shadow-lg'
          }`}
          onMouseEnter={() => setHoveredCard('words')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-600 rounded-full blur-3xl opacity-10 -z-10 transition-transform duration-500"
            style={{
              transform: hoveredCard === 'words' ? 'translate(20%, -20%)' : 'translate(40%, -40%)',
            }}
          ></div>
          
          <CardHeader className="border-b border-purple-100 dark:border-purple-900/50 pb-6">
            <div className="flex items-center gap-4">
              <span className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-lg">
                <Book className="h-6 w-6" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 opacity-50 blur-lg -z-10"></div>
              </span>
              <div>
                <CardTitle className="text-2xl">Adding New Words</CardTitle>
                <CardDescription className="text-purple-600/70 dark:text-purple-300/70">
                  Learn how to add new words to the dictionary
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <p className="text-lg">To add new words to the database:</p>
            <div className="grid gap-4">
              {['Navigate to "Add Word"', 'Fill the form', 'Submit'].map((step, index) => (
                <div 
                  key={step}
                  className="flex items-center gap-4 p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/50 transition-colors duration-300 hover:bg-purple-100 dark:hover:bg-purple-900/30"
                >
                  <span className="h-8 w-8 rounded-lg bg-purple-200 dark:bg-purple-800 flex items-center justify-center text-purple-700 dark:text-purple-200 font-semibold">
                    {index + 1}
                  </span>
                  <span className="flex-1 text-purple-900 dark:text-purple-100">{step}</span>
                  <ChevronRight className="h-5 w-5 text-purple-400" />
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-100 dark:border-purple-800/50">
              <h3 className="font-semibold mb-3 text-purple-900 dark:text-purple-100">Required Fields:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Word', 'Meaning', 'Type', 'Example', 'Translation'].map((field) => (
                  <div key={field} className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                    {field}
                  </div>
                ))}
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-purple-200 dark:border-purple-800">
              <AlertDescription className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                <Zap className="h-4 w-4" />
                You'll receive instant feedback when your word is added successfully.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Managing Words Section */}
        <Card 
          className={`relative overflow-hidden border-purple-200/50 dark:border-purple-800/50 transition-all duration-300 ${
            hoveredCard === 'manage' ? 'shadow-2xl shadow-purple-200/20 dark:shadow-purple-900/20 scale-[1.02]' : 'shadow-lg'
          }`}
          onMouseEnter={() => setHoveredCard('manage')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-600 rounded-full blur-3xl opacity-10 -z-10 transition-transform duration-500"
            style={{
              transform: hoveredCard === 'manage' ? 'translate(-20%, -20%)' : 'translate(-40%, -40%)',
            }}
          ></div>

          <CardHeader className="border-b border-purple-100 dark:border-purple-900/50 pb-6">
            <div className="flex items-center gap-4">
              <span className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                <Settings className="h-6 w-6" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 opacity-50 blur-lg -z-10"></div>
              </span>
              <div>
                <CardTitle className="text-2xl">Managing Words</CardTitle>
                <CardDescription className="text-purple-600/70 dark:text-purple-300/70">
                  Powerful tools to manage your word database
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-100 dark:border-purple-800/50">
                <h3 className="font-semibold mb-3 flex items-center gap-2 text-purple-900 dark:text-purple-100">
                  <Globe className="h-5 w-5" />
                  View & Filter
                </h3>
                <p className="text-muted-foreground">
                  Access all words in an intuitive table format with powerful filtering options.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-100 dark:border-purple-800/50">
                <h3 className="font-semibold mb-3 flex items-center gap-2 text-purple-900 dark:text-purple-100">
                  <FileSpreadsheet className="h-5 w-5" />
                  Export Data
                </h3>
                <p className="text-muted-foreground">
                  Export your word database to CSV format for backup or analysis.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language Support Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card 
            className={`relative overflow-hidden border-purple-200/50 dark:border-purple-800/50 transition-all duration-300 ${
              hoveredCard === 'language' ? 'shadow-2xl shadow-purple-200/20 dark:shadow-purple-900/20 scale-[1.02]' : 'shadow-lg'
            }`}
            onMouseEnter={() => setHoveredCard('language')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-600 rounded-full blur-3xl opacity-10 -z-10 transition-transform duration-500"
              style={{
                transform: hoveredCard === 'language' ? 'translate(20%, -20%)' : 'translate(40%, -40%)',
              }}
            ></div>

            <CardHeader className="border-b border-purple-100 dark:border-purple-900/50 pb-6">
              <div className="flex items-center gap-4">
                <span className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-lg">
                  <Globe className="h-6 w-6" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 opacity-50 blur-lg -z-10"></div>
                </span>
                <div>
                  <CardTitle className="text-2xl">Language Support</CardTitle>
                  <CardDescription className="text-purple-600/70 dark:text-purple-300/70">
                    Available languages and switching
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-3 gap-3">
                {['English', 'Turkish', 'Kurdish'].map((lang) => (
                  <div key={lang} className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-100 dark:border-purple-800/50 text-center font-medium text-purple-900 dark:text-purple-100 hover:scale-105 transition-transform">
                    {lang}
                  </div>
                ))}
              </div>

              <Alert className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-purple-200 dark:border-purple-800">
                <AlertDescription className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                  <Keyboard className="h-4 w-4" />
                  Quick Switch: Press Shift + L
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Keyboard Shortcuts Section */}
          <Card 
            className={`relative overflow-hidden border-purple-200/50 dark:border-purple-800/50 transition-all duration-300 ${
              hoveredCard === 'shortcuts' ? 'shadow-2xl shadow-purple-200/20 dark:shadow-purple-900/20 scale-[1.02]' : 'shadow-lg'
            }`}
            onMouseEnter={() => setHoveredCard('shortcuts')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-600 rounded-full blur-3xl opacity-10 -z-10 transition-transform duration-500"
              style={{
                transform: hoveredCard === 'shortcuts' ? 'translate(-20%, -20%)' : 'translate(-40%, -40%)',
              }}
            ></div>

            <CardHeader className="border-b border-purple-100 dark:border-purple-900/50 pb-6">
              <div className="flex items-center gap-4">
                <span className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                  <Keyboard className="h-6 w-6" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 opacity-50 blur-lg -z-10"></div>
                </span>
                <div>
                  <CardTitle className="text-2xl">Keyboard Shortcuts</CardTitle>
                  <CardDescription className="text-purple-600/70 dark:text-purple-300/70">
                    Speed up your workflow with handy shortcuts
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-100 dark:border-purple-800/50">
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-purple-900 dark:text-purple-100">
                    <Keyboard className="h-5 w-5" />
                    Navigation
                  </h3>
                  <p className="text-muted-foreground">
                    Use arrow keys to navigate through the words.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-100 dark:border-purple-800/50">
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-purple-900 dark:text-purple-100">
                    <Keyboard className="h-5 w-5" />
                    Quick Actions
                  </h3>
                  <p className="text-muted-foreground">
                    Press Enter to view details or Esc to close the modal.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}