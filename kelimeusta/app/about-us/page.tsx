"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Github, Mail, Heart, Code, BookOpen, } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";

export default function AboutUs() {
  const { language } = useLanguage();

  const teamMembers = [
    {
      name: "Harikesh Ranjan Sinha",
      role: "Founder & Lead Developer",
      trRole: "Kurucu & Baş Geliştirici",
      image: "/me.jpeg",
      bio: "Initiated the KelimeUsta project with the vision of making Turkish language learning accessible and enjoyable for everyone.",
      trBio: "Türkçe dil öğrenimini herkes için erişilebilir ve keyifli hale getirme vizyonuyla KelimeUsta projesini başlattı.",
      contributions: ["Project Architecture", "Core Development", "UI/UX Design"],
      trContributions: ["Proje Mimarisi", "Temel Geliştirme", "UI/UX Tasarımı"],
      skills: ["Full Stack Development", "UI/UX", "Turkish Language", "English Language"],
      trSkills: ["Full Stack Geliştirme", "UI/UX", "Türkçe Dil", "İngilizce Dil"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "email@example.com"
    },
    {
      name: "Duygu",
      role: "Language Expert & Content Lead",
      trRole: "Dil Uzmanı & İçerik Lideri",
      image: "/female-avatar.png",
      bio: "Brings extensive experience in Turkish language education and curriculum development.",
      trBio: "Türkçe dil eğitimi ve müfredat geliştirme konusunda geniş deneyim sunar.",
      contributions: ["Content Strategy", "Language Resources", "Educational Design"],
      trContributions: ["İçerik Stratejisi", "Dil Kaynakları", "Eğitim Tasarımı"],
      skills: ["Turkish Language", "Content Creation", "Educational Design"],
      trSkills: ["Türkçe Dil", "İçerik Oluşturma", "Eğitim Tasarımı"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "email@example.com"
    },
    // {
    //   name: "Team Member 2",
    //   role: "Language Expert & Content Lead",
    //   trRole: "Dil Uzmanı & İçerik Lideri",
    //   image: "/api/placeholder/400/400",
    //   bio: "Brings extensive experience in Turkish language education and curriculum development.",
    //   trBio: "Türkçe dil eğitimi ve müfredat geliştirme konusunda geniş deneyim sunar.",
    //   contributions: ["Content Strategy", "Language Resources", "Educational Design"],
    //   trContributions: ["İçerik Stratejisi", "Dil Kaynakları", "Eğitim Tasarımı"],
    //   skills: ["Kurdish Language", "Content Creation", "Educational Design"],
    //   trSkills: ["Kürtçe Dil", "İçerik Oluşturma", "Eğitim Tasarımı"],
    //   github: "https://github.com",
    //   linkedin: "https://linkedin.com",
    //   email: "email@example.com"
    // },
  ];

  return (
    <div className="min-h-screen md:w-[70rem] mx-auto mt-16 flex flex-col px-5 py-10 md:p-8">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-8">
          <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            { language === "tr" ? "Hakkımızda" : "About Us" }
          </h1>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12 border-purple-100 dark:border-purple-900 bg-gradient-to-r from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-950">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                { language === "tr" ? "Misyonumuz" : "Our Mission" }
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              { language === "tr" ? "KelimeUsta, herkes için Türkçe dil öğrenimini erişilebilir ve keyifli hale getirme vizyonuyla başlatılan bir projedir." : "KelimeUsta is a project initiated with the vision of making Turkish language learning accessible and enjoyable for everyone." }
              { language === "tr" ? "Türkçe dilini öğrenmek isteyenler için modern araçlar ve teknolojiler sunarak etkili bir öğrenme deneyimi sağlamayı hedefliyoruz." : "We believe in the power of interactive learning and community support to help learners master Turkish vocabulary and grammar." }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                  <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    { language === "tr" ? "Modern Teknoloji" : "Modern Technology" }
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    { language === "en" ? "Interactive tools and modern technology for effective learning" : "Etkili öğrenme için interaktif araçlar ve modern teknoloji" }
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                  <BookOpen className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    { language === "en" ? "Expert Content" : "Uzman İçerik" }
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    { language === "en" ? "Carefully curated content by language experts" : "Dil uzmanları tarafından özenle hazırlanan içerik" }
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                  <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    { language === "en" ? "Community Support" : "Topluluk Desteği" }
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    { language === "en" ? "Engagement and support from a global community of learners" : "Dünya çapındaki öğrenci topluluğundan katılım ve destek" }
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          { language === "tr" ? "Ekibimiz" : "Our Team" }
        </h2>
        {/* centering the cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-purple-100 dark:border-purple-900 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <Image
                    width={96}
                    height={48}
                    src={member.image}
                    alt={member.name}
                    className="rounded-full mb-4 bg-purple-100 dark:bg-purple-900/50 border-2 border-purple-200 dark:border-purple-800 object-cover aspect-square select-none"
                  />
                  <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    { language === "tr" ? member.trRole : member.role }
                  </p>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-4">
                    { language === "tr" ? member.trBio : member.bio }
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">
                      { language === "tr" ? "Katkılar:" : "Contributions: " }
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.contributions.map((contribution, i) => (
                        <Badge key={i} variant="secondary" className="bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                          { language === "tr" ? member.trContributions[i] : contribution }
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">
                      { language === "tr" ? "Yetenekler:" : "Skills:" }
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-purple-200 dark:border-purple-800">
                          { language === "tr" ? member.trSkills[i] : skill }
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Get Involved Section */}
        <Card className="border-purple-100 dark:border-purple-900">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                { language === "tr" ? "Katılın" : "Get Involved" }
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              { language === "en" ? "We're always looking for passionate individuals to join our mission of making Turkish language learning accessible to everyone." : "Türkçe dil öğrenimini herkes için erişilebilir hale getirme misyonumuza katılmak isteyen tutkulu bireyleri arıyoruz." } {" "}
              { language === "en" ? "If you're interested in contributing to the project, feel free to reach out to us." : "Projeye katkıda bulunmak isterseniz, bizimle iletişime geçmekten çekinmeyin." }
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link href="/contact-us" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Mail className="h-4 w-4" />
                { language === "tr" ? "Bize Ulaşın" : "Contact Us" }
              </Link>
              <a href="https://github.com/harikeshranjan/KelimeUsta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 border border-purple-200 dark:border-purple-800 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-colors text-purple-600 dark:text-purple-400">
                <Github className="h-4 w-4" />
                { language === "tr" ? "Projeyi Ziyaret Edin" : "Visit Project" }
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}