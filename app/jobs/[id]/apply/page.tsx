import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Briefcase, ChevronLeft } from "lucide-react"
import { CVUpload } from "@/components/cv-upload"
import { MobileMenu } from "@/components/mobile-menu"

export default function JobApplicationPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the job details from an API or database
  const job = jobs.find((job) => job.id === params.id) || jobs[0]

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
                { href: "/contact", label: "Contact" },
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
      <main className="flex-1 container py-6 md:py-12">
        <div className="mx-auto max-w-2xl">
          <Link
            href={`/jobs/${params.id}`}
            className="inline-flex items-center text-sm font-medium mb-6 hover:underline"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to job details
          </Link>

          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-bold">Apply for {job.title}</h1>
              <p className="text-muted-foreground">at {job.company}</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Personal Information</h2>
                <div className="grid gap-4 md:grid-cols-2">
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
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Current Location</Label>
                  <Input id="location" placeholder="City, State, Country" required />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Professional Information</h2>
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume/CV</Label>
                  <CVUpload
                    onUploadComplete={(file) => console.log("File uploaded:", file.name)}
                    maxSize={5}
                    allowedTypes={[".pdf", ".doc", ".docx"]}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                  <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio/Website (Optional)</Label>
                  <Input id="portfolio" type="url" placeholder="https://yourwebsite.com" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Additional Information</h2>
                <div className="space-y-2">
                  <Label htmlFor="cover-letter">Cover Letter</Label>
                  <Textarea
                    id="cover-letter"
                    placeholder="Tell us why you're interested in this position and why you'd be a good fit..."
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Salary Expectations (Optional)</Label>
                  <Input id="salary" placeholder="e.g. $80,000 - $100,000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start-date">Earliest Start Date</Label>
                  <Input id="start-date" type="date" required />
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full">
                  Submit Application
                </Button>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  By submitting this application, you agree to our{" "}
                  <Link href="/terms" className="underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer className="border-t">
        <div className="container py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} JobConnect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

const jobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
  },
]

