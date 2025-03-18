import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Briefcase, Building, MapPin, Search, Filter } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export default function JobsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <MobileMenu
              links={[
                { href: "/", label: "Home" },
                { href: "/jobs", label: "Jobs", active: true },
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
            <Link href="/jobs" className="text-sm font-medium underline underline-offset-4">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Your Perfect Job</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Browse through thousands of job opportunities that match your skills and experience.
                </p>
              </div>
              <div className="w-full max-w-2xl space-y-2">
                <form className="flex w-full items-center space-x-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Job title, keywords, or company"
                      className="w-full bg-background pl-8 rounded-lg border"
                    />
                  </div>
                  <Button type="submit">Search</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-4">
              {/* Filters Sidebar */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-4">Filters</h2>
                  <Button variant="outline" size="sm" className="w-full justify-start mb-4">
                    <Filter className="mr-2 h-4 w-4" />
                    Clear All Filters
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Job Type</h3>
                    <div className="space-y-2">
                      {jobTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={`job-type-${type.toLowerCase()}`} />
                          <Label htmlFor={`job-type-${type.toLowerCase()}`}>{type}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Experience Level</h3>
                    <div className="space-y-2">
                      {experienceLevels.map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox id={`exp-${level.toLowerCase().replace(/\s+/g, "-")}`} />
                          <Label htmlFor={`exp-${level.toLowerCase().replace(/\s+/g, "-")}`}>{level}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <div className="space-y-2">
                      {locations.map((location) => (
                        <div key={location} className="flex items-center space-x-2">
                          <Checkbox id={`loc-${location.toLowerCase().replace(/\s+/g, "-")}`} />
                          <Label htmlFor={`loc-${location.toLowerCase().replace(/\s+/g, "-")}`}>{location}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Salary Range</h3>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="0-50k">$0 - $50,000</SelectItem>
                        <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                        <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                        <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                        <SelectItem value="150k+">$150,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Job Listings */}
              <div className="md:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-muted-foreground">
                      Showing <span className="font-medium">{allJobs.length}</span> jobs
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Sort by:</span>
                    <Select defaultValue="relevance">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="salary-high">Salary (High to Low)</SelectItem>
                        <SelectItem value="salary-low">Salary (Low to High)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  {allJobs.map((job) => (
                    <Link href={`/jobs/${job.id}`} key={job.id} className="group">
                      <div className="border rounded-lg p-6 transition-all hover:shadow-md">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded bg-muted flex items-center justify-center">
                              <Building className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="font-semibold group-hover:underline">{job.title}</h3>
                              <p className="text-sm text-muted-foreground">{job.company}</p>
                              <div className="flex items-center mt-2 text-sm text-muted-foreground">
                                <MapPin className="mr-1 h-4 w-4" />
                                {job.location}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start md:items-end gap-2">
                            <div className="text-sm font-medium">{job.type}</div>
                            {job.salary && <div className="text-sm text-muted-foreground">{job.salary}</div>}
                            <div className="text-xs text-muted-foreground">Posted {job.postedDate}</div>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <div
                              key={tag}
                              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                        {job.urgent && (
                          <div className="mt-4">
                            <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800">
                              Urgent Hiring
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
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

const jobTypes = ["Full-time", "Part-time", "Contract", "Temporary", "Internship", "Remote"]

const experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Manager", "Executive"]

// Update locations to UK cities
const locations = ["Remote", "London", "Manchester", "Birmingham", "Edinburgh", "Bristol"]

// Update job listings with UK locations and GBP currency
const allJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "London (Remote)",
    type: "Full-time",
    salary: "£45,000 - £65,000",
    postedDate: "2 days ago",
    tags: ["React", "TypeScript", "UI/UX"],
    urgent: false,
  },
  {
    id: "2",
    title: "Product Manager",
    company: "InnovateCo",
    location: "Manchester",
    type: "Full-time",
    salary: "£55,000 - £70,000",
    postedDate: "1 week ago",
    tags: ["Product", "Strategy", "Agile"],
    urgent: false,
  },
  {
    id: "3",
    title: "UX Designer",
    company: "DesignHub",
    location: "Bristol (Hybrid)",
    type: "Full-time",
    salary: "£40,000 - £55,000",
    postedDate: "3 days ago",
    tags: ["Figma", "User Research", "Prototyping"],
    urgent: true,
  },
  {
    id: "4",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "Edinburgh",
    type: "Full-time",
    salary: "£50,000 - £75,000",
    postedDate: "1 day ago",
    tags: ["Node.js", "PostgreSQL", "AWS"],
    urgent: false,
  },
  {
    id: "5",
    title: "Marketing Specialist",
    company: "GrowthLabs",
    location: "Birmingham (Remote)",
    type: "Contract",
    salary: "£300 - £400 per day",
    postedDate: "5 days ago",
    tags: ["Digital Marketing", "SEO", "Content"],
    urgent: false,
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Leeds (Hybrid)",
    type: "Full-time",
    salary: "£60,000 - £80,000",
    postedDate: "1 week ago",
    tags: ["Kubernetes", "CI/CD", "Cloud"],
    urgent: false,
  },
  {
    id: "7",
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Remote",
    type: "Full-time",
    salary: "£55,000 - £75,000",
    postedDate: "3 days ago",
    tags: ["Python", "Machine Learning", "SQL"],
    urgent: true,
  },
  {
    id: "8",
    title: "Technical Writer",
    company: "DocuTech",
    location: "Cardiff (Remote)",
    type: "Part-time",
    salary: "£25 - £35 per hour",
    postedDate: "4 days ago",
    tags: ["Documentation", "API", "Technical Communication"],
    urgent: false,
  },
  {
    id: "9",
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Glasgow",
    type: "Full-time",
    salary: "£45,000 - £65,000",
    postedDate: "2 days ago",
    tags: ["iOS", "Swift", "Mobile"],
    urgent: false,
  },
  {
    id: "10",
    title: "HR Manager",
    company: "PeopleFirst",
    location: "Newcastle (Hybrid)",
    type: "Full-time",
    salary: "£40,000 - £55,000",
    postedDate: "1 week ago",
    tags: ["Human Resources", "Recruiting", "Employee Relations"],
    urgent: false,
  },
]

