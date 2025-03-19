import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Briefcase, Building, MapPin } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white dark:bg-blue-950 shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <MobileMenu
              links={[
                { href: "/", label: "Home", active: true },
                { href: "/jobs", label: "Jobs" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ]}
            />
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400">
              <Briefcase className="h-6 w-6" />
              <span>JobConnect</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4"
            >
              Jobs
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/50"
              >
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/homepage/hero-background.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Blue gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80 bg-opacity-50"></div>
          </div>

          <div className="container relative px-4 md:px-6 z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3 max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  Find Your Dream Job in The Uk Today
                </h1>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Browse thousands of job listings and find the perfect match for your skills and experience.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex w-full max-w-lg items-center space-x-2 bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-500" />
                    <Input
                      type="search"
                      placeholder="Search jobs..."
                      className="w-full bg-white pl-10 rounded-lg border-0 focus-visible:ring-2 focus-visible:ring-blue-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                  >
                    Search
                  </Button>
                </form>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white">
                  <span className="font-medium">Popular:</span>
                </span>
                <Link
                  href="/jobs?q=developer"
                  className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white hover:bg-white/30 transition-colors"
                >
                  Developer
                </Link>
                <Link
                  href="/jobs?q=designer"
                  className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white hover:bg-white/30 transition-colors"
                >
                  Designer
                </Link>
                <Link
                  href="/jobs?q=marketing"
                  className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white hover:bg-white/30 transition-colors"
                >
                  Marketing
                </Link>
                <Link
                  href="/jobs?q=remote"
                  className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white hover:bg-white/30 transition-colors"
                >
                  Remote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900 dark:text-blue-100">
                  Featured Jobs
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Explore our latest job opportunities from top companies
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredJobs.map((job) => (
                <Link href={`/jobs/${job.id}`} key={job.id} className="group">
                  <div className="job-card">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded bg-blue-100 dark:bg-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-300">
                          <Building className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{job.company}</p>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{job.type}</div>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="mr-1 h-4 w-4 text-blue-500 dark:text-blue-400" />
                      {job.location}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <div
                          key={tag}
                          className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/jobs">
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/50"
                >
                  View All Jobs
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/homepage/jobsearch.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Blue gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
          </div>

          <div className="container relative px-4 md:px-6 z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">For Job Seekers</h2>
                <p className="text-white/80 md:text-xl">
                  Create your profile, upload your resume, and start applying to jobs that match your skills and
                  experience.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">Create Account</Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">For Employers</h2>
                <p className="text-white/80 md:text-xl">
                  Post job openings, review applications, and connect with qualified candidates all in one place.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/employer/signup">
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">Post a Job</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white dark:bg-blue-950">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400">
              <Briefcase className="h-6 w-6" />
              <span>JobConnect</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Connecting talented professionals with great companies.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100">For Job Seekers</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/jobs"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100">For Employers</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/employer/post"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employer/pricing"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employer/resources"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
              © {new Date().getFullYear()} JobConnect. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/terms"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const featuredJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "London (Remote)",
    type: "Full-time",
    tags: ["React", "TypeScript", "UI/UX"],
  },
  {
    id: "2",
    title: "Product Manager",
    company: "InnovateCo",
    location: "Manchester",
    type: "Full-time",
    tags: ["Product", "Strategy", "Agile"],
  },
  {
    id: "3",
    title: "UX Designer",
    company: "DesignHub",
    location: "Bristol (Hybrid)",
    type: "Full-time",
    tags: ["Figma", "User Research", "Prototyping"],
  },
  {
    id: "4",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "Edinburgh",
    type: "Full-time",
    tags: ["Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "5",
    title: "Marketing Specialist",
    company: "GrowthLabs",
    location: "Birmingham (Remote)",
    type: "Contract",
    tags: ["Digital Marketing", "SEO", "Content"],
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Leeds (Hybrid)",
    type: "Full-time",
    tags: ["Kubernetes", "CI/CD", "Cloud"],
  },
]

