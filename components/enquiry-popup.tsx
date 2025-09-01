"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, MessageSquare, ArrowRight, Phone, Mail, Building } from "lucide-react"

interface EnquiryPopupProps {
  trigger?: React.ReactNode
  className?: string
}

export function EnquiryPopup({ trigger, className }: EnquiryPopupProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    volume: "",
    message: "",
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsOpen(false)
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      industry: "",
      volume: "",
      message: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const defaultTrigger = (
    <Button size="lg" className={`text-lg px-8 ${className}`}>
      Get Started
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  )

  return (
    <>
      {/* Trigger Button */}
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {trigger || defaultTrigger}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 relative max-h-[90vh] overflow-hidden"
            style={{
              margin: "auto",
              transform: "none",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg border border-gray-300 dark:border-gray-600"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[85vh]">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold flex items-center mb-2 text-gray-900 dark:text-white">
                  <MessageSquare className="h-6 w-6 mr-2 text-green-600" />
                  Start Your WhatsApp API Journey
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out this form and we'll get back to you within 24 hours with a customized solution for your
                  business.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name *</label>
                    <Input
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name *</label>
                    <Input
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center text-gray-700 dark:text-gray-300">
                    <Mail className="h-4 w-4 mr-2" />
                    Business Email *
                  </label>
                  <Input
                    placeholder="john@company.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                  />
                </div>

                {/* Company & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center text-gray-700 dark:text-gray-300">
                      <Building className="h-4 w-4 mr-2" />
                      Company *
                    </label>
                    <Input
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      required
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center text-gray-700 dark:text-gray-300">
                      <Phone className="h-4 w-4 mr-2" />
                      Phone Number
                    </label>
                    <Input
                      placeholder="+1 (555) 123-4567"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    />
                  </div>
                </div>

                {/* Industry & Volume */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Industry</label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                      <SelectTrigger className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fintech">Fintech & Banking</SelectItem>
                        <SelectItem value="ecommerce">E-commerce & Retail</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="enterprise">Enterprise & SaaS</SelectItem>
                        <SelectItem value="transportation">Transportation & Logistics</SelectItem>
                        <SelectItem value="travel">Travel & Hospitality</SelectItem>
                        <SelectItem value="realestate">Real Estate</SelectItem>
                        <SelectItem value="gaming">Gaming</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Expected Monthly Volume
                    </label>
                    <Select value={formData.volume} onValueChange={(value) => handleInputChange("volume", value)}>
                      <SelectTrigger className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                        <SelectValue placeholder="Select expected volume" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Less than 10K OTPs/month</SelectItem>
                        <SelectItem value="medium">10K - 100K OTPs/month</SelectItem>
                        <SelectItem value="large">100K - 1M OTPs/month</SelectItem>
                        <SelectItem value="enterprise">1M+ OTPs/month</SelectItem>
                        <SelectItem value="unknown">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Tell us about your project
                  </label>
                  <Textarea
                    placeholder="Describe your use case, current challenges, or specific requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                  />
                </div>

                {/* What happens next */}
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold mb-3 text-green-800 dark:text-green-300 flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    What happens next?
                  </h4>
                  <ul className="text-sm text-green-700 dark:text-green-400 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                      We'll review your requirements within 24 hours
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                      Our team will prepare a customized demo
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                      You'll receive pricing tailored to your volume
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                      We'll schedule a technical consultation call
                    </li>
                  </ul>
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                    Send Enquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent border-gray-300 dark:border-gray-600"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Quick enquiry button component for easy placement
export function QuickEnquiryButton({ className }: { className?: string }) {
  return (
    <EnquiryPopup
      className={className}
      trigger={
        <Button size="sm" className={className}>
          Quick Enquiry
        </Button>
      }
    />
  )
}

// Demo request button component
export function DemoRequestButton({ className }: { className?: string }) {
  return (
    <EnquiryPopup
      className={className}
      trigger={
        <Button variant="outline" size="sm" className={`bg-transparent ${className}`}>
          Book Demo
        </Button>
      }
    />
  )
}
