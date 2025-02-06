import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { LangaugeProvider } from "@/hooks/useLanguage";
import Footer from "@/components/footer";
import { FlashcardReportProvider } from "@/hooks/useFlashcardReport";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KelimeUsta",
  description: "KelimeUsta is a platform to learn Turkish vocabulary. It provides flashcards, paragraph translations, and more. Start learning Turkish now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LangaugeProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <FlashcardReportProvider>
              <Navbar />
              {children}
              <Toaster />
              <Footer />
            </FlashcardReportProvider>
          </ThemeProvider>
        </LangaugeProvider>
      </body>
    </html>
  );
}
