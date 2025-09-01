import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Building2,
  ShoppingCart,
  Heart,
  GraduationCap,
  Briefcase,
  Car,
  Plane,
  Home,
  Gamepad2,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
   

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Building2 className="h-4 w-4 mr-2" />
              Trusted Across Industries
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Industries We <span className="text-primary">Serve</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
              From fintech to healthcare, our WhatsApp API solutions are trusted across multiple sectors for secure
              authentication and user verification.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Industry Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions tailored to meet the unique needs of different industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Fintech & Banking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Secure authentication for financial transactions, account verification, and fraud prevention with
                  regulatory compliance
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>PCI DSS compliant</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Multi-factor authentication</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Transaction verification</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-primary mb-4" />
                <CardTitle>E-commerce & Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Streamline customer onboarding, order confirmations, and account security for online marketplaces
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Order confirmations</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Account verification</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Password resets</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  HIPAA-compliant patient verification, appointment confirmations, and secure medical record access
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>HIPAA compliant</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Patient verification</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Appointment reminders</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Student verification, exam authentication, and secure access to educational platforms and resources
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Student verification</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Exam authentication</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Course access</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Enterprise & SaaS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Employee authentication, secure access to corporate systems, and multi-tenant application security
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>SSO integration</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Employee verification</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Multi-tenant security</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Car className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Transportation & Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Driver verification, delivery confirmations, and secure access to logistics platforms
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Driver verification</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Delivery confirmations</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Fleet management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">More Industries</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We serve many more sectors with customized solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Plane className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Travel & Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Booking confirmations and guest verification</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Real Estate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Property viewing verification and client authentication</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Gamepad2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Gaming</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Player verification and account security</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Government</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Citizen services and secure document access</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from businesses across different industries
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Fintech
                </Badge>
                <CardTitle>Digital Bank</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Reduced authentication time by 60% and improved user satisfaction scores by implementing WhatsApp OTP
                  for account verification
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-semibold text-primary">60%</span> faster authentication
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-primary">40%</span> cost reduction
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-primary">95%</span> user satisfaction
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  E-commerce
                </Badge>
                <CardTitle>Online Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Increased conversion rates by 25% by streamlining the checkout process with instant WhatsApp OTP
                  verification
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-semibold text-primary">25%</span> higher conversion
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-primary">50%</span> fewer cart abandonments
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-primary">99.9%</span> delivery rate
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Healthcare
                </Badge>
                <CardTitle>Telemedicine Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Enhanced patient security and reduced no-shows by 30% with reliable appointment confirmations via
                  WhatsApp
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-semibold text-primary">30%</span> fewer no-shows
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-primary">100%</span> HIPAA compliant
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-primary">85%</span> patient preference
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Industry?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a customized solution tailored to your industry's specific needs and compliance requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Industry Solution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
