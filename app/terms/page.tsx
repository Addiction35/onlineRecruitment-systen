import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"

export default function TermsOfServicePage() {
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
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

            <div className="prose max-w-none">
              <p>Last Updated: 15 March 2024</p>

              <h2>1. Introduction</h2>
              <p>
                Welcome to JobConnect. These Terms of Service ("Terms") govern your use of the JobConnect website and
                services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by
                these Terms. If you do not agree to these Terms, please do not use our Services.
              </p>
              <p>
                JobConnect is a recruitment platform that connects job seekers with employers in the United Kingdom. Our
                Services are provided by JobConnect Ltd, a company registered in England and Wales (Company No.
                12345678) with its registered office at 123 Recruitment Street, London, EC1A 1BB, United Kingdom.
              </p>

              <h2>2. Eligibility</h2>
              <p>
                To use our Services, you must be at least 16 years old and capable of forming a binding contract with
                JobConnect. If you are using our Services on behalf of a company or other legal entity, you represent
                that you have the authority to bind such entity to these Terms.
              </p>

              <h2>3. Accounts</h2>
              <h3>3.1 Account Creation</h3>
              <p>
                To access certain features of our Services, you must create an account. You agree to provide accurate,
                current, and complete information during the registration process and to update such information to keep
                it accurate, current, and complete.
              </p>

              <h3>3.2 Account Security</h3>
              <p>
                You are responsible for safeguarding your account credentials and for all activities that occur under
                your account. You agree to notify us immediately of any unauthorized use of your account or any other
                breach of security.
              </p>

              <h3>3.3 Account Types</h3>
              <p>
                We offer different types of accounts for job seekers and employers. Each account type has specific
                features and functionalities designed for its intended use.
              </p>

              <h2>4. User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use our Services in any way that violates any applicable law or regulation</li>
                <li>
                  Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or
                  entity
                </li>
                <li>Interfere with or disrupt the operation of our Services or servers</li>
                <li>Attempt to gain unauthorized access to any part of our Services</li>
                <li>
                  Use our Services to transmit any content that is unlawful, harmful, threatening, abusive, harassing,
                  defamatory, vulgar, obscene, or otherwise objectionable
                </li>
                <li>
                  Use our Services to discriminate against any individual based on race, gender, religion, nationality,
                  disability, sexual orientation, or age
                </li>
                <li>Use our Services to post false, inaccurate, or misleading information</li>
                <li>Collect or store personal data about other users without their consent</li>
              </ul>

              <h2>5. Content</h2>
              <h3>5.1 User Content</h3>
              <p>
                Our Services allow you to post, link, store, share, and otherwise make available certain information,
                text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post
                on or through our Services, including its legality, reliability, and appropriateness.
              </p>

              <h3>5.2 License to User Content</h3>
              <p>
                By posting Content on or through our Services, you grant us a non-exclusive, royalty-free, transferable,
                sub-licensable, worldwide license to use, display, reproduce, and distribute such Content on and through
                our Services. You represent and warrant that you have the right to grant such license.
              </p>

              <h3>5.3 Content Removal</h3>
              <p>
                We reserve the right to remove any Content that violates these Terms or is otherwise objectionable in
                our sole discretion.
              </p>

              <h2>6. Fees and Payment</h2>
              <h3>6.1 Fees</h3>
              <p>
                Some of our Services are offered on a fee basis. You agree to pay all fees associated with the Services
                you select. All fees are in British Pounds (GBP) and are exclusive of VAT, which will be added where
                applicable.
              </p>

              <h3>6.2 Payment</h3>
              <p>
                We use third-party payment processors to bill you through a payment account linked to your account.
                Payment processing is subject to the terms and conditions and privacy policies of these payment
                processors in addition to these Terms.
              </p>

              <h3>6.3 Refunds</h3>
              <p>All fees are non-refundable except as required by law or as explicitly stated in these Terms.</p>

              <h2>7. Intellectual Property</h2>
              <p>
                Our Services and their original content (excluding Content provided by users), features, and
                functionality are and will remain the exclusive property of JobConnect and its licensors. Our Services
                are protected by copyright, trademark, and other laws of the United Kingdom and foreign countries.
              </p>

              <h2>8. Termination</h2>
              <p>
                We may terminate or suspend your account and access to our Services immediately, without prior notice or
                liability, for any reason, including, without limitation, if you breach these Terms.
              </p>
              <p>
                Upon termination, your right to use the Services will immediately cease. If you wish to terminate your
                account, you may simply discontinue using the Services or contact us to request account deletion.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                In no event shall JobConnect, its directors, employees, partners, agents, suppliers, or affiliates be
                liable for any indirect, incidental, special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
                to or use of or inability to access or use the Services.
              </p>

              <h2>10. Disclaimer</h2>
              <p>
                Your use of the Services is at your sole risk. The Services are provided on an "AS IS" and "AS
                AVAILABLE" basis. The Services are provided without warranties of any kind, whether express or implied,
                including, but not limited to, implied warranties of merchantability, fitness for a particular purpose,
                non-infringement, or course of performance.
              </p>
              <p>
                JobConnect does not warrant that the Services will be uninterrupted, timely, secure, or error-free, or
                that any content or information you obtain through the Services will be accurate or reliable.
              </p>

              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of England and Wales, without
                regard to its conflict of law provisions. Any dispute arising from or relating to these Terms or your
                use of the Services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>

              <h2>12. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material
                change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Services after any revisions become effective, you agree to be bound
                by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the
                Services.
              </p>

              <h2>13. Severability</h2>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck
                and the remaining provisions shall be enforced.
              </p>

              <h2>14. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and
                JobConnect regarding our Services and supersede all prior agreements and understandings.
              </p>

              <h2>15. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                JobConnect Ltd
                <br />
                123 Recruitment Street
                <br />
                London, EC1A 1BB
                <br />
                United Kingdom
                <br />
                Email: legal@jobconnect.co.uk
                <br />
                Phone: +44 (0) 20 1234 5678
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
              © {new Date().getFullYear()} JobConnect Ltd. All rights reserved.
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

