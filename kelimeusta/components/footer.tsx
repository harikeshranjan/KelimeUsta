"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Loader2, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { useToast } from '@/hooks/use-toast';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contributors/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        toast({
          title: language === "en" ? 'Success' : 'Başarılı',
          description: language === "en" ? 'You have successfully filled the form.' : 'Formu başarıyla doldurdunuz.',
          variant: 'default',
          duration: 5000,
        })
        setEmail('');
        setName('');
      } else {
        toast({
          title: language === "en" ? 'Error' : 'Hata',
          description: language === "en" ? 'Something went wrong. Please try again.' : 'Bir şeyler yanlış gitti. Lütfen tekrar deneyin.',
          variant: 'destructive',
          duration: 5000,
        })
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const navLinks = [
    { href: '/', label: 'Home', trLabel: 'Anasayfa' },
    { href: '/flashcards', label: 'Flashcards', trLabel: 'Kartlar' },
    { href: '/paragraph', label: 'Paragraphs', trLabel: 'Paragraflar' },
    { href: '/alphabets', label: 'Alphabets', trLabel: 'Alfabeler' },
    { href: '/tenses', label: 'Tenses', trLabel: 'Zamanlar' },
    { href: '/about-us', label: 'About Us', trLabel: 'Hakkımızda' },
  ];

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto flex flex-col justify-evenly md:flex-row gap-8 px-6 lg:px-8">
        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-1 text-center">
            {language === "en" ? "Quick Links" : "Hızlı Bağlantılar"}
          </h4>
          <nav className='flex flex-row flex-wrap justify-center items-start md:flex-col gap-6 md:gap-0'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-muted-foreground hover:text-foreground py-1"
              >
                {language === "en" ? link.label : link.trLabel}
              </Link>
            ))}
          </nav>
        </div>

        {/* Subscription Form */}
        <div className="flex flex-col w-full md:w-1/3">
          <h4 className="text-lg font-semibold mb-4">
            {language === "en" ? "Contribute to our website" : "Web sitemize katkıda bulunun"}
          </h4>
          <form onSubmit={handleSubscribe} className="space-y-4">
            <Input
              type="text"
              placeholder={language === "en" ? "Your Name" : "Adınız"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
            />
            <Input
              type="email"
              placeholder={language === "en" ? "Your Email" : "E-posta Adresiniz"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin mr-2" />
                  {language === "en" ? "Subscribing" : "Abone olunuyor"}
                </>
              ) : (
                language === "en" ? "Subscribe" : "Abone Ol"
              )}
            </Button>
          </form>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-center">
            {language === "en" ? "Follow Us" : "Bizi Takip Edin"}
          </h4>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            © {new Date().getFullYear()} KelimeUsta. {language === "en" ? "All rights reserved." : "Tüm hakları saklıdır."}
          </p>
        </div>
      </div>
    </footer>
  );
}