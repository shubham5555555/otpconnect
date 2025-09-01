import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  MessageSquare,
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
  

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              Superior Performance
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Why Choose <span className="text-primary">WhatsApp API</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
              Experience the advantages of WhatsApp API over traditional SMS. Faster delivery, higher reliability, and
              significant cost savings for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how WhatsApp API transforms your authentication experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Faster & More Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  WhatsApp delivers messages instantly with 99.9% delivery rates, compared to SMS which can take minutes
                  and has lower reliability
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Sub-second delivery</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>99.9% delivery rate</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Real-time status updates</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Lower Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Significant cost savings on bulk OTP delivery operations, especially for high-volume businesses
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Up to 60% cost reduction</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Volume-based pricing</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>No hidden fees</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Enhanced Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  End-to-end encryption and advanced security features protect your users' authentication data
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>End-to-end encryption</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Two-factor authentication</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Fraud prevention</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Better User Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Users prefer WhatsApp over SMS, leading to higher engagement and satisfaction rates
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Rich media support</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Interactive templates</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Familiar interface</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Worldwide coverage with local compliance standards and multi-language support
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>180+ countries</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Local compliance</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Multi-language support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Easy Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Simple API integration with comprehensive documentation and dedicated support
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>RESTful API</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Multiple SDKs</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>24/7 support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">WhatsApp API vs SMS</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how WhatsApp API outperforms traditional SMS in every metric that matters
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-6 font-semibold">Feature</th>
                        <th className="text-center p-6 font-semibold text-primary">WhatsApp API</th>
                        <th className="text-center p-6 font-semibold text-muted-foreground">Traditional SMS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-6 font-medium">Delivery Rate</td>
                        <td className="p-6 text-center text-primary font-semibold">99.9%</td>
                        <td className="p-6 text-center text-muted-foreground">85-95%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-6 font-medium">Delivery Speed</td>
                        <td className="p-6 text-center text-primary font-semibold">Instant</td>
                        <td className="p-6 text-center text-muted-foreground">1-5 minutes</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-6 font-medium">Cost per Message</td>
                        <td className="p-6 text-center text-primary font-semibold">$0.03-0.05</td>
                        <td className="p-6 text-center text-muted-foreground">$0.05-0.10</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-6 font-medium">Rich Media Support</td>
                        <td className="p-6 text-center">
                          <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                        </td>
                        <td className="p-6 text-center">
                          <span className="text-muted-foreground">✗</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-6 font-medium">Interactive Templates</td>
                        <td className="p-6 text-center">
                          <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                        </td>
                        <td className="p-6 text-center">
                          <span className="text-muted-foreground">✗</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-6 font-medium">End-to-End Encryption</td>
                        <td className="p-6 text-center">
                          <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                        </td>
                        <td className="p-6 text-center">
                          <span className="text-muted-foreground">✗</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-6 font-medium">Global Coverage</td>
                        <td className="p-6 text-center text-primary font-semibold">180+ countries</td>
                        <td className="p-6 text-center text-muted-foreground">Limited</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Return on Investment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the tangible benefits our clients experience after switching to WhatsApp API
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <CardTitle className="text-lg">Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Average savings on OTP delivery costs compared to SMS</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <CardTitle className="text-lg">User Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Users prefer WhatsApp over SMS for receiving OTPs</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <CardTitle className="text-lg">Faster Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Reduction in authentication time for end users</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <CardTitle className="text-lg">Uptime Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Service availability with enterprise SLA</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Benefits</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of businesses already enjoying the advantages of WhatsApp API for OTP delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Calculate Your Savings
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
