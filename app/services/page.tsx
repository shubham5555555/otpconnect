import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Zap, Users, Shield, Code, Globe, Clock, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
  

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Complete WhatsApp API Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
              Comprehensive WhatsApp API solutions for secure, reliable, and cost-effective OTP delivery. Everything you
              need to enhance your authentication system.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end WhatsApp API solutions designed for modern businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>WhatsApp Business API</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Complete integration for OTP delivery via WhatsApp Business API with industry-leading delivery rates
                  and reliability
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 99.9% delivery rate</li>
                  <li>• Global coverage</li>
                  <li>• Real-time status updates</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Instant Messaging</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Lightning-fast OTP delivery with superior reliability compared to traditional SMS channels
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sub-second delivery</li>
                  <li>• Rich media support</li>
                  <li>• Interactive templates</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Scalable Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  From startups to enterprises - solutions that grow with your business needs and handle any volume
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Auto-scaling infrastructure</li>
                  <li>• Volume-based pricing</li>
                  <li>• Load balancing</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Enterprise-grade security and compliance to protect your users' data and maintain trust
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• End-to-end encryption</li>
                  <li>• GDPR compliant</li>
                  <li>• SOC 2 certified</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced capabilities that set us apart from the competition
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Easy Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Simple REST API with comprehensive documentation and SDKs for popular programming languages
                </CardDescription>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">
                    REST API
                  </Badge>
                  <Badge variant="outline" className="mr-2">
                    Node.js SDK
                  </Badge>
                  <Badge variant="outline" className="mr-2">
                    Python SDK
                  </Badge>
                  <Badge variant="outline" className="mr-2">
                    PHP SDK
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Global Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Worldwide coverage with local data centers ensuring low latency and high availability
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 99.99% uptime SLA</li>
                  <li>• Multi-region deployment</li>
                  <li>• CDN-powered delivery</li>
                  <li>• Local compliance</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive dashboards and reporting tools to monitor delivery rates and performance
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Live delivery tracking</li>
                  <li>• Performance metrics</li>
                  <li>• Custom reports</li>
                  <li>• API webhooks</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Advanced Routing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Intelligent message routing and failover systems to ensure maximum delivery success
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Smart routing algorithms</li>
                  <li>• Automatic failover</li>
                  <li>• Carrier optimization</li>
                  <li>• Rate limiting</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Fraud Prevention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Advanced security measures to prevent fraud and protect against malicious activities
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Rate limiting</li>
                  <li>• IP whitelisting</li>
                  <li>• Anomaly detection</li>
                  <li>• Blacklist management</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Round-the-clock technical support with dedicated account managers for enterprise clients
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 24/7 technical support</li>
                  <li>• Dedicated account managers</li>
                  <li>• Priority response</li>
                  <li>• Integration assistance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Service Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right package for your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for small businesses and startups</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">
                  $0.05<span className="text-sm text-muted-foreground">/OTP</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Up to 10K OTPs/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Basic analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Email support
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> API documentation
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle>Professional</CardTitle>
                <CardDescription>Ideal for growing businesses</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">
                  $0.03<span className="text-sm text-muted-foreground">/OTP</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Up to 100K OTPs/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Priority support
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Custom templates
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Webhooks
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large-scale operations</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">Custom</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Unlimited OTPs
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Custom analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Dedicated support
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> SLA guarantees
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Custom integration
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of businesses already using our WhatsApp API for secure authentication
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
