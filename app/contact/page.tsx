import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Mail, Phone, MapPin } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <MobileMenu
              links={[
                { href: "/", label: "Home" },
                { href: "/jobs", label: "Jobs" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact", active: true },
              ]}
            />
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Briefcase className="h-6 w-6" />
              <span>JobConnect</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/jobs" className="text-sm font-medium hover:underline underline-offset-4">
              Jobs
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We'd love to hear from you. Get in touch with our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Have a question, feedback, or need assistance? Fill out the form and our team will get back to you
                    as soon as possible.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 mt-1 text-primary" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">support@jobconnect.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 mt-1 text-primary" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+44 (0) 20 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 mt-1 text-primary" />
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-muted-foreground">
                        123 Recruitment Street
                        <br />
                        London, EC1A 1BB
                        <br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Office Hours</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium">Monday - Friday</p>
                      <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-muted-foreground">10:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Sunday</p>
                      <p className="text-muted-foreground">Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg border bg-card p-6">
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="Enter your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Enter your last name" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select>
                          <SelectTrigger id="subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="billing">Billing Question</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Enter your message here..."
                          className="min-h-[150px]"
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find quick answers to common questions
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link href="/faq">
                <Button variant="outline" className="w-full">
                  View FAQ
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Briefcase className="h-6 w-6" />
              <span>JobConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">Connecting talented professionals with great companies.</p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">For Job Seekers</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/jobs" className="text-muted-foreground hover:underline">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-muted-foreground hover:underline">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">For Employers</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/employer/post" className="text-muted-foreground hover:underline">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link href="/employer/pricing" className="text-muted-foreground hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/employer/resources" className="text-muted-foreground hover:underline">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} JobConnect. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

