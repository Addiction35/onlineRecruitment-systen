import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Briefcase } from "lucide-react"

export default function FAQPage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about JobConnect
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">For Job Seekers</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {jobSeekerFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`seeker-item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">For Employers</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {employerFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`employer-item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Account & Billing</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {accountFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`account-item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
                <p className="text-muted-foreground mb-6">
                  If you couldn't find the answer to your question, please contact our support team.
                </p>
                <Link href="/contact">
                  <Button>Contact Support</Button>
                </Link>
              </div>
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

const jobSeekerFAQs = [
  {
    question: "How do I create an account on JobConnect?",
    answer:
      "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. Select 'Job Seeker' as your account type, fill in your personal information, and follow the prompts to complete your profile.",
  },
  {
    question: "Is it free to apply for jobs on JobConnect?",
    answer:
      "Yes, JobConnect is completely free for job seekers. You can create an account, browse job listings, and apply to as many positions as you'd like without any cost.",
  },
  {
    question: "How can I make my profile stand out to employers?",
    answer:
      "To make your profile stand out, make sure to complete all sections of your profile, upload a professional resume, list your skills and experience in detail, and keep your information up-to-date. Adding a professional photo and linking to relevant portfolios or projects can also help.",
  },
  {
    question: "Can I save jobs to apply later?",
    answer:
      "Yes, you can save jobs to apply later. When browsing job listings, click the 'Save' button on any job you're interested in. You can access your saved jobs from your dashboard under the 'Saved Jobs' section.",
  },
  {
    question: "How do I know if an employer has viewed my application?",
    answer:
      "You can track the status of your applications in your dashboard under the 'Applications' section. The status will update as employers review your application, and you'll receive email notifications for any status changes.",
  },
  {
    question: "Can I apply to multiple jobs at once?",
    answer:
      "No, each job application requires individual attention to ensure you're submitting the most relevant information for each position. However, your profile information and uploaded resume will be saved to make the application process faster for subsequent applications.",
  },
]

const employerFAQs = [
  {
    question: "How do I post a job on JobConnect?",
    answer:
      "To post a job, first create an employer account or log in to your existing account. From your dashboard, click on 'Post New Job', fill in the job details, review, and submit. Your job will be live after review, which typically takes less than 24 hours.",
  },
  {
    question: "What are the costs for posting jobs?",
    answer:
      "JobConnect offers various pricing plans for employers. You can view our pricing options on the Pricing page. We offer single job postings, monthly subscriptions with multiple postings, and enterprise plans for larger organizations.",
  },
  {
    question: "How long will my job posting remain active?",
    answer:
      "Standard job postings remain active for 30 days. You can extend the posting period, mark the position as filled, or remove the listing at any time from your employer dashboard.",
  },
  {
    question: "Can I edit my job posting after it's published?",
    answer:
      "Yes, you can edit your job posting at any time from your employer dashboard. Go to 'Jobs', find the listing you want to modify, and click 'Edit'. Your changes will be reviewed and updated within 24 hours.",
  },
  {
    question: "How do I review applications?",
    answer:
      "All applications for your job postings can be reviewed in your employer dashboard under the 'Applications' section. You can filter applications, view resumes, contact candidates, and update application statuses from this interface.",
  },
  {
    question: "Can I promote my job posting for more visibility?",
    answer:
      "Yes, JobConnect offers featured job postings and other promotional options to increase the visibility of your listings. These options are available during the job posting process or can be added later from your dashboard.",
  },
]

const accountFAQs = [
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, click on 'Log In', then select 'Forgot password?'. Enter the email address associated with your account, and we'll send you instructions to reset your password.",
  },
  {
    question: "Can I change my account type from job seeker to employer or vice versa?",
    answer:
      "No, you cannot change your account type after registration. If you need both types of accounts, you'll need to create separate accounts with different email addresses.",
  },
  {
    question: "How do I update my contact information?",
    answer:
      "You can update your contact information in your account settings. Log in to your account, go to 'Settings', and update your information in the 'Profile' or 'Contact Information' section.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "To cancel a subscription, go to 'Settings' in your dashboard, select 'Billing', and click on 'Cancel Subscription'. Follow the prompts to complete the cancellation process. Please note that cancellations take effect at the end of your current billing cycle.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, JobConnect takes data security seriously. We use industry-standard encryption and security measures to protect your personal information. You can review our Privacy Policy for more details on how we handle your data in accordance with UK data protection laws and GDPR.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "To delete your account, go to 'Settings' in your dashboard, scroll to the bottom, and select 'Delete Account'. Please note that this action is permanent and will remove all your data from our system in accordance with UK data protection regulations.",
  },
]

