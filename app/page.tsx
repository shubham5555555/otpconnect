"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  MessageSquare,
  Shield,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Star,
  Users,
  Clock,
  TrendingUp,
  Award,
  Code,
  Database,
  Lock,
} from "lucide-react"
import Link from "next/link"
import { EnquiryPopup, DemoRequestButton } from "@/components/enquiry-popup"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const AnimatedCounter = ({
  value,
  suffix = "",
  duration = 2,
}: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = countRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start animation when element is visible
          gsap.to(
            { value: 0 },
            {
              value: value,
              duration: duration,
              ease: "power2.out",
              onUpdate: function () {
                const currentValue = this.targets()[0].value
                if (value === 99.9) {
                  setCount(Math.round(currentValue * 10) / 10)
                } else {
                  setCount(Math.round(currentValue))
                }
              },
            },
          )
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [value, duration])

  const formatValue = () => {
    if (value === 99.9) {
      return `${count.toFixed(1)}${suffix}`
    }
    return `${count}${suffix}`
  }

  return <span ref={countRef}>{formatValue()}</span>
}

export default function WhatsAppOTPService() {
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation - word by word reveal
      gsap.fromTo(
        ".hero-word",
        {
          y: 50,
          opacity: 0,
          rotationX: -90,
          transformOrigin: "50% 50% -50px",
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.5,
        },
      )

      // Subtitle typewriter effect
      gsap.fromTo(
        ".hero-subtitle",
        {
          clipPath: "inset(0 100% 0 0)",
        },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 2,
          delay: 1.5,
          ease: "power2.inOut",
        },
      )

      // Floating elements animation
      gsap.to(".floating-element", {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        rotation: "random(-10, 10)",
        duration: "random(4, 8)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          amount: 2,
          from: "random",
        },
      })

      // Service cards stagger animation
      gsap.fromTo(
        ".service-card",
        {
          y: 60,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".services-section",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Feature cards animation
      gsap.fromTo(
        ".feature-card",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const heroWords = "Secure OTP Delivery via WhatsApp API".split(" ")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-primary/5 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(37, 211, 102, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(37, 211, 102, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(37, 211, 102, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(37, 211, 102, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="absolute inset-0  hidden md:block pointer-events-none">
          {/* Geometric shapes */}
          <div className="floating-element  absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl backdrop-blur-sm border border-primary/30 shadow-lg flex items-center justify-center">
            <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382" />
            </svg>
          </div>
          <div className="floating-element absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full backdrop-blur-sm border border-primary/25 shadow-lg flex items-center justify-center">
            <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382" />
            </svg>
          </div>
          <div className="floating-element  absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-br from-primary/25 to-primary/10 rounded-xl backdrop-blur-sm border border-primary/35 shadow-lg flex items-center justify-center">
            <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382" />
            </svg>
          </div>
          {/* <div className="floating-element  absolute top-1/3 right-1/3 w-18 h-18 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full backdrop-blur-sm border border-primary/20 shadow-lg flex items-center justify-center">
            <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382" />
            </svg>
          </div>
          <div className="floating-element  absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl backdrop-blur-sm border border-primary/30 shadow-lg flex items-center justify-center">
            <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382" />
            </svg>
          </div>
          <div className="floating-element  absolute top-60 left-1/3 w-10 h-10 bg-gradient-to-br from-primary/30 to-primary/20 rounded-full backdrop-blur-sm border border-primary/40 shadow-lg flex items-center justify-center">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382" />
            </svg>
          </div> */}

          {/* Icon elements */}
          {/* <div className="floating-element  absolute top-32 right-1/4 p-4 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl backdrop-blur-sm border border-primary/25 shadow-lg flex items-center justify-center">
            <Phone className="h-6 w-6 text-primary" />
          </div> */}
          <div className="floating-element  absolute bottom-40 left-20 p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl backdrop-blur-sm border border-primary/30 shadow-lg flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div className="floating-element  absolute top-1/2 left-10 p-4 bg-gradient-to-br from-primary/25 to-primary/15 rounded-xl backdrop-blur-sm border border-primary/35 shadow-lg flex items-center justify-center">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <div className="floating-element  absolute bottom-60 right-1/4 p-4 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl backdrop-blur-sm border border-primary/25 shadow-lg flex items-center justify-center">
            <Star className="h-6 w-6 text-primary" />
          </div>
          {/* <div className="floating-element absolute top-1/4 left-1/2 p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full backdrop-blur-sm border border-primary/30 shadow-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-primary" />
          </div> */}
          {/* <div className="floating-element  absolute bottom-1/3 right-1/2 p-3 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full backdrop-blur-sm border border-primary/25 shadow-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-primary" />
          </div> */}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge variant="secondary" className="mb-8 text-lg px-6 py-3 bg-primary/10 border-primary/20">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                </motion.div>
                5+ Years of Expertise • Trusted by 500+ Companies
              </Badge>
            </motion.div>

            <div ref={textRef} className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
                {heroWords.map((word, index) => (
                  <span
                    key={index}
                    className="hero-word inline-block mr-4 mb-2"
                    style={{
                      background:
                        word === "WhatsApp" || word === "API"
                          ? "linear-gradient(135deg, #25D366, #128C7E, #075E54)"
                          : "inherit",
                      backgroundClip: word === "WhatsApp" || word === "API" ? "text" : "inherit",
                      WebkitBackgroundClip: word === "WhatsApp" || word === "API" ? "text" : "inherit",
                      color: word === "WhatsApp" || word === "API" ? "transparent" : "inherit",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </h1>
            </div>

            <div className="mb-12">
              <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground text-balance max-w-4xl mx-auto leading-relaxed">
                Transform your business communication with lightning-fast OTP delivery through WhatsApp. More reliable
                than SMS, more engaging than email, and trusted by industry leaders worldwide.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <EnquiryPopup
                  trigger={
                    <Button
                      size="lg"
                      className="relative text-lg px-12 py-4 bg-primary hover:bg-primary/90 shadow-lg text-black"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  }
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <DemoRequestButton className="text-lg px-12 py-4 border-2 hover:bg-primary/5 bg-transparent" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                { icon: CheckCircle, text: "99.9% Uptime Guaranteed", color: "text-green-500", bg: "bg-green-500/10" },
                { icon: Zap, text: "< 2 Second Delivery", color: "text-yellow-500", bg: "bg-yellow-500/10" },
                { icon: Shield, text: "Enterprise Security", color: "text-blue-500", bg: "bg-blue-500/10" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.7 + index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`flex flex-col items-center p-8 ${item.bg} backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                    className={`${item.color} mb-4`}
                  >
                    <item.icon className="h-10 w-10" />
                  </motion.div>
                  <span className="font-semibold text-lg text-center">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="stats-section py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Industry Leaders</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join thousands of businesses that rely on our WhatsApp API for secure, fast, and reliable OTP delivery
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { value: 500, suffix: "+", label: "Active Clients", icon: Users },
                { value: 10, suffix: "M+", label: "OTPs Delivered", icon: MessageSquare },
                { value: 99.9, suffix: "%", label: "Delivery Rate", icon: TrendingUp },
                { value: 24, suffix: "/7", label: "Support", icon: Clock },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center p-6 bg-background rounded-2xl shadow-lg border border-border/50"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4"
                  >
                    <stat.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-section py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive WhatsApp API solutions designed to meet your business communication needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: MessageSquare,
                  title: "OTP Delivery",
                  description: "Instant and secure one-time password delivery via WhatsApp with 99.9% success rate",
                  color: "text-green-500",
                  bg: "bg-green-500/10",
                },
                {
                  icon: Shield,
                  title: "Authentication API",
                  description: "Complete user verification system with multi-factor authentication support",
                  color: "text-blue-500",
                  bg: "bg-blue-500/10",
                },
                {
                  icon: Code,
                  title: "Easy Integration",
                  description: "Simple REST API with comprehensive documentation and SDK support",
                  color: "text-purple-500",
                  bg: "bg-purple-500/10",
                },
                {
                  icon: Database,
                  title: "Analytics Dashboard",
                  description: "Real-time delivery tracking, success rates, and detailed reporting",
                  color: "text-orange-500",
                  bg: "bg-orange-500/10",
                },
                {
                  icon: Lock,
                  title: "Enterprise Security",
                  description: "End-to-end encryption with compliance to international security standards",
                  color: "text-red-500",
                  bg: "bg-red-500/10",
                },
                {
                  icon: Award,
                  title: "24/7 Support",
                  description: "Dedicated technical support team available round the clock for assistance",
                  color: "text-indigo-500",
                  bg: "bg-indigo-500/10",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="service-card"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`h-full ${service.bg} border-border/50 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <CardContent className="p-8">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${service.bg}`}
                      >
                        <service.icon className={`h-7 w-7 ${service.color}`} />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="bg-transparent border-2 hover:bg-primary/5">
                    Explore All Services
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="features-section py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose WhatsApp Over SMS?</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
                Experience the next generation of OTP delivery with superior performance and user engagement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Higher Delivery Rates",
                  description: "99.9% delivery success vs 95% for SMS",
                  icon: TrendingUp,
                  color: "text-green-500",
                },
                {
                  title: "Faster Delivery",
                  description: "< 2 seconds vs 5-30 seconds for SMS",
                  icon: Zap,
                  color: "text-yellow-500",
                },
                {
                  title: "Better User Experience",
                  description: "Rich formatting and interactive elements",
                  icon: Star,
                  color: "text-purple-500",
                },
                {
                  title: "Cost Effective",
                  description: "Up to 70% cheaper than traditional SMS",
                  icon: Award,
                  color: "text-blue-500",
                },
              ].map((feature, index) => (
                <motion.div key={feature.title} className="feature-card" whileHover={{ scale: 1.02, y: -5 }}>
                  <Card className="h-full bg-background border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                          className={`flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center`}
                        >
                          <feature.icon className={`h-6 w-6 ${feature.color}`} />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your OTP Delivery?</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join hundreds of businesses already using our WhatsApp API for secure, fast, and reliable authentication
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
              
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="text-lg px-12 py-4 border-2 bg-transparent">
                      Contact Sales
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
