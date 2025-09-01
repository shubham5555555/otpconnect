"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"
import { EnquiryPopup, DemoRequestButton } from "@/components/enquiry-popup"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center"
            >
              <MessageSquare className="h-8 w-8 text-primary" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
            <span className="text-xl font-bold text-foreground">OTPConnect</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Services", "Benefits", "Industries", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {item}
                  <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center space-x-4"
          >
            <DemoRequestButton className="bg-transparent" />
          
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
