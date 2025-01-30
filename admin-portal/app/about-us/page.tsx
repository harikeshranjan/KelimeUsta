"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users,
  Github,
  Mail,
  Heart,
  Code,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Harikesh Ranjan Sinha",
      role: "Founder & Lead Developer",
      image: "/api/placeholder/400/400",
      bio: "Initiated the KelimeUsta project with the vision of making Turkish language learning accessible and enjoyable for everyone.",
      contributions: ["Project Architecture", "Core Development", "UI/UX Design"],
      skills: ["Full Stack Development", "UI/UX", "Turkish Language", "English Language"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "email@example.com"
    },
    {
      name: "Team Member 2",
      role: "Language Expert & Content Lead",
      image: "/api/placeholder/400/400",
      bio: "Brings extensive experience in Turkish language education and curriculum development.",
      contributions: ["Content Strategy", "Language Resources", "Educational Design"],
      skills: ["Turkish Language", "Content Creation", "Educational Design"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "email@example.com"
    },
    {
      name: "Team Member 2",
      role: "Language Expert & Content Lead",
      image: "/api/placeholder/400/400",
      bio: "Brings extensive experience in Turkish language education and curriculum development.",
      contributions: ["Content Strategy", "Language Resources", "Educational Design"],
      skills: ["Kurdish Language", "Content Creation", "Educational Design"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "email@example.com"
    },
  ];

  return (
    <div className="min-h-screen mt-16 ml-0 md:ml-64 flex flex-col p-4 md:p-8">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-8">
          <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">About Us</h1>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12 border-purple-100 dark:border-purple-900 bg-gradient-to-r from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-950">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Our Mission</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              KelimeUsta was born from a passion for making Turkish language learning accessible, enjoyable, and effective. 
              We believe in the power of interactive learning and community support to help learners master Turkish vocabulary and grammar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                  <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Modern Learning</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Interactive tools and modern technology for effective learning</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                  <BookOpen className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Expert Content</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Carefully curated content by language experts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                  <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Community Driven</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learning together with peer support and interaction</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-purple-100 dark:border-purple-900 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mb-4 bg-purple-100"
                  />
                  <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{member.role}</p>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Contributions:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.contributions.map((contribution, i) => (
                        <Badge key={i} variant="secondary" className="bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                          {contribution}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-purple-200 dark:border-purple-800">
                          {skill}
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
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Get Involved</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              We're always looking for passionate individuals to join our mission of making Turkish language learning accessible to everyone. 
              Whether you're a language expert, developer, or content creator, there are many ways to contribute to KelimeUsta.
            </p>
            <div className="flex gap-4">
              <Link href="/contact-us" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Mail className="h-4 w-4" />
                Contact Us
              </Link>
              <a href="https://github.com/harikeshranjan/KelimeUsta" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 border border-purple-200 dark:border-purple-800 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-colors text-purple-600 dark:text-purple-400">
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}