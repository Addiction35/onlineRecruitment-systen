import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Briefcase className="h-6 w-6" />
            <span>JobConnect</span>
          </Link>
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
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
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
        <div className="container py-12 md:py-16 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose max-w-none">
              <p>Last Updated: 15 March 2024</p>

              <h2>1. Introduction</h2>
              <p>
                JobConnect ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              <p>
                We are based in the United Kingdom and comply with the UK Data Protection Act 2018, the UK GDPR, and
                other applicable data protection laws.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <h3>2.1 Personal Information</h3>
              <ul>
                <li>Contact information (name, email address, phone number, postal address)</li>
                <li>Account credentials (username, password)</li>
                <li>Professional information (CV/resume, work history, education, skills)</li>
                <li>Profile information (profile picture, job preferences)</li>
                <li>For employers: company information, billing details</li>
              </ul>

              <h3>2.2 Usage Information</h3>
              <ul>
                <li>Log data (IP address, browser type, pages visited, time spent)</li>
                <li>Device information (device type, operating system)</li>
                <li>Location information</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process job applications and facilitate recruitment</li>
                <li>Create and manage your account</li>
                <li>Communicate with you about our services, updates, and promotions</li>
                <li>Process payments and billing</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and enforce our terms of service</li>
              </ul>

              <h2>4. Legal Basis for Processing</h2>
              <p>We process your personal information based on the following legal grounds:</p>
              <ul>
                <li>Performance of a contract when we provide you with our services</li>
                <li>Your consent, where you have given it</li>
                <li>Our legitimate interests, which do not override your fundamental rights and freedoms</li>
                <li>Compliance with legal obligations</li>
              </ul>

              <h2>5. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Employers or job seekers (as relevant to the service)</li>
                <li>Service providers and business partners who help us deliver our services</li>
                <li>Legal and regulatory authorities when required by law</li>
                <li>Potential buyers in the event of a business transaction (e.g., merger or acquisition)</li>
              </ul>

              <h2>6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law. When determining
                retention periods, we consider the amount, nature, and sensitivity of the information, the potential
                risk of harm from unauthorized use or disclosure, and applicable legal requirements.
              </p>

              <h2>7. Your Rights</h2>
              <p>Under UK data protection laws, you have the following rights:</p>
              <ul>
                <li>Right to access your personal information</li>
                <li>Right to rectification of inaccurate information</li>
                <li>Right to erasure ('right to be forgotten')</li>
                <li>Right to restriction of processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Rights related to automated decision-making and profiling</li>
              </ul>
              <p>To exercise these rights, please contact us using the details provided in the "Contact Us" section.</p>

              <h2>8. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method
                of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute
                security.
              </p>

              <h2>9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than the UK. These countries may
                have data protection laws that are different from those in the UK. We have taken appropriate safeguards
                to ensure that your personal information remains protected in accordance with this Privacy Policy and
                applicable law.
              </p>

              <h2>10. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal
                information from children. If you believe we have collected information from a child, please contact us
                immediately.
              </p>

              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
                "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2>12. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us
                at:
              </p>
              <p>
                JobConnect
                <br />
                123 Recruitment Street
                <br />
                London, EC1A 1BB
                <br />
                United Kingdom
                <br />
                Email: privacy@jobconnect.co.uk
                <br />
                Phone: +44 (0) 20 1234 5678
              </p>

              <h2>13. Complaints</h2>
              <p>
                If you are not satisfied with our response to your concern, you have the right to lodge a complaint with
                the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues
                (www.ico.org.uk).
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Briefcase className="h-6 w-6" />
              <span>JobConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting talented professionals with great companies across the UK.
            </p>
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

