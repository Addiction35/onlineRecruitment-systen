import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Briefcase, ChevronLeft } from "lucide-react"

export default function NewJobPage() {
  return (
    <div className="flex min-h-screen flex-col">
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
            <Button variant="ghost" size="sm">
              Employer Dashboard
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6 md:py-12">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/employer/dashboard"
            className="inline-flex items-center text-sm font-medium mb-6 hover:underline"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>

          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-bold">Post a New Job</h1>
              <p className="text-muted-foreground">Fill in the details below to create a new job listing</p>
            </div>

            <form className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Basic Information</h2>
                <div className="space-y-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input id="job-title" placeholder="e.g. Frontend Developer" required />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="job-type">Job Type</Label>
                    <Select>
                      <SelectTrigger id="job-type">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="temporary">Temporary</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience-level">Experience Level</Label>
                    <Select>
                      <SelectTrigger id="experience-level">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level</SelectItem>
                        <SelectItem value="mid">Mid Level</SelectItem>
                        <SelectItem value="senior">Senior Level</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="executive">Executive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="e.g. San Francisco, CA" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="remote-option">Remote Option</Label>
                    <Select>
                      <SelectTrigger id="remote-option">
                        <SelectValue placeholder="Select remote option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="on-site">On-site only</SelectItem>
                        <SelectItem value="remote">Remote only</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="salary-min">Salary Range (Min) in £</Label>
                    <Input id="salary-min" type="number" placeholder="e.g. 30000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary-max">Salary Range (Max) in £</Label>
                    <Input id="salary-max" type="number" placeholder="e.g. 50000" />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="hide-salary" />
                  <Label htmlFor="hide-salary">Hide salary range from job listing</Label>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Job Description</h2>
                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the role, responsibilities, and ideal candidate..."
                    className="min-h-[200px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="List the skills, qualifications, and experience required..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefits">Benefits</Label>
                  <Textarea
                    id="benefits"
                    placeholder="Describe the benefits, perks, and company culture..."
                    className="min-h-[150px]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Application Settings</h2>
                <div className="space-y-2">
                  <Label htmlFor="application-deadline">Application Deadline</Label>
                  <Input id="application-deadline" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="application-url">External Application URL (Optional)</Label>
                  <Input
                    id="application-url"
                    type="url"
                    placeholder="https://your-company-careers.com/job-application"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Application Method</Label>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="apply-email" defaultChecked />
                      <Label htmlFor="apply-email">Apply via Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="apply-website" />
                      <Label htmlFor="apply-website">Apply via External Website</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="apply-platform" defaultChecked />
                      <Label htmlFor="apply-platform">Apply via JobConnect Platform</Label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="urgent-hiring" />
                  <Label htmlFor="urgent-hiring">Mark as "Urgent Hiring"</Label>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline" type="button">
                  Save as Draft
                </Button>
                <Button type="submit">Post Job</Button>
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

