import React from 'react';
import { Mail, Github, Linkedin, Instagram, MapPin, Send, ArrowRight, Clock, MessagesSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactUs() {
  return (
    <div className="min-h-screen ml-0 md:ml-64 flex flex-col p-4 md:p-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/400')] opacity-10"></div>
        <div className="absolute inset-0 bg-purple-600/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">Let&apos;s Build Something Amazing Together</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Whether you have a question, want to start a project, or simply want to connect.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <MessagesSquare className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always available to help you with your queries</p>
            </CardContent>
          </Card>
          
          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Quick Response</h3>
              <p className="text-gray-600">Get response within 24 hours</p>
            </CardContent>
          </Card>
          
          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <Send className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Professional Service</h3>
              <p className="text-gray-600">Expert solutions for your needs</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                I&apos;m excited to hear from you. Let&apos;s discuss how we can work together to bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 dark:bg-purple-700/40 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-gray-600">New Delhi, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 dark:bg-purple-700/40 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">ranjansinhaharikesh@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <Button variant="outline" className="flex items-center space-x-2" asChild>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2" asChild>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2" asChild>
                  <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <Input placeholder="John" className="focus:ring-2 focus:ring-purple-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <Input placeholder="Doe" className="focus:ring-2 focus:ring-purple-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <Input type="email" placeholder="john@example.com" className="focus:ring-2 focus:ring-purple-500" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <Input placeholder="How can I help you?" className="focus:ring-2 focus:ring-purple-500" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  placeholder="Write your message here..." 
                  className="focus:ring-2 focus:ring-purple-500"
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}