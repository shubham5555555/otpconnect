"use client"

import Link from "next/link"
import { MessageSquare, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EnquiryPopup } from "./enquiry-popup"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/5 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-md animate-bounce delay-500"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,211,102,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,211,102,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">WhatsApp OTP</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Secure, reliable, and scalable WhatsApp API solutions for OTP delivery. Trusted by businesses worldwide
                for seamless customer authentication.
              </p>
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="text-slate-300 hover:text-primary hover:bg-primary/10">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-slate-300 hover:text-primary hover:bg-primary/10">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-slate-300 hover:text-primary hover:bg-primary/10">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-slate-300 hover:text-primary transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-300 hover:text-primary transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/benefits" className="text-slate-300 hover:text-primary transition-colors text-sm">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-slate-300 hover:text-primary transition-colors text-sm">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-300 hover:text-primary transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Services</h3>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">WhatsApp Business API</li>
                <li className="text-slate-300 text-sm">OTP Delivery</li>
                <li className="text-slate-300 text-sm">Two-Factor Authentication</li>
                <li className="text-slate-300 text-sm">Bulk Messaging</li>
                <li className="text-slate-300 text-sm">API Integration</li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>contact@whatsappotp.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-2 pt-4">
                <h4 className="font-medium text-primary">Stay Updated</h4>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter your email"
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 text-sm"
                  />
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-slate-700 bg-slate-800/50">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-primary">Ready to Get Started?</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Join thousands of businesses using our WhatsApp API for secure OTP delivery
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <EnquiryPopup
                  trigger={
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Start Free Trial
                    </Button>
                  }
                />
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <p className="text-slate-400 text-xs">© 2024 WhatsApp OTP Service. All rights reserved.</p>
              <div className="flex space-x-4 text-xs">
                <Link href="/privacy" className="text-slate-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-slate-400 hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
