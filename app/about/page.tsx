import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, Building, Award, CheckCircle } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white dark:bg-blue-950 shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <MobileMenu
              links={[
                { href: "/", label: "Home" },
                { href: "/jobs", label: "Jobs" },
                { href: "/about", label: "About", active: true },
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
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4"
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
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-4"
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
        <section className="relative w-full py-20 md:py-24 lg:py-32 overflow-hidden">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/about-hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Blue gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
          </div>

          <div className="container relative px-4 md:px-6 z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  About JobConnect
                </h1>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Connecting talented professionals with great companies since 2015.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <Image
                  src="/mission-image.jpg"
                  alt="Our mission"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 md:text-lg">
                  At JobConnect, we believe that the right job can change a person's life, and the right person can
                  transform a company. Our mission is to make meaningful connections between talented professionals and
                  forward-thinking companies.
                </p>
                <p className="text-gray-600 dark:text-gray-300 md:text-lg">
                  We're dedicated to creating a platform that simplifies the job search and recruitment process, making
                  it more efficient, transparent, and human-centered. By leveraging technology and data, we aim to
                  reduce the friction in hiring and help both job seekers and employers find their perfect match.
                </p>
                <div className="pt-4">
                  <Link href="/jobs">
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                      Browse Jobs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "url('/pattern-bg.svg')",
                backgroundSize: "cover",
              }}
            ></div>
          </div>

          <div className="container relative px-4 md:px-6 z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900 dark:text-blue-100">
                  Our Values
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
                  The principles that guide everything we do
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">People First</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in putting people at the center of everything we do, creating experiences that respect and
                  value their time and aspirations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Transparency</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're committed to honesty and clarity in all our interactions, providing the information needed to
                  make informed decisions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive for excellence in our platform, our service, and our impact, continuously improving to
                  better serve our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100">Our Story</h2>
                <p className="text-gray-600 dark:text-gray-300 md:text-lg">
                  JobConnect was founded in 2015 by a team of HR professionals and tech entrepreneurs who experienced
                  firsthand the challenges of the traditional recruitment process. They saw an opportunity to create a
                  more efficient, transparent, and human-centered approach to connecting talent with opportunities.
                </p>
                <p className="text-gray-600 dark:text-gray-300 md:text-lg">
                  What started as a small platform serving local businesses has grown into a comprehensive recruitment
                  solution used by thousands of companies and job seekers worldwide. Throughout our growth, we've
                  remained committed to our core mission: making meaningful connections that change lives and transform
                  businesses.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500" />
                    <span>Over 10,000 companies trust JobConnect</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500" />
                    <span>More than 1 million successful placements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500" />
                    <span>Present in 15 countries worldwide</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500" />
                    <span>Award-winning recruitment platform</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/story-image.jpg"
                  alt="Our story"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "url('/pattern-bg.svg')",
                backgroundSize: "cover",
              }}
            ></div>
          </div>

          <div className="container relative px-4 md:px-6 z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900 dark:text-blue-100">
                  Our Team
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
                  Meet the people behind JobConnect
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center space-y-4 text-center">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-blue-100 dark:border-blue-800 shadow-md">
                    <Image
                      src={`/team-${member.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/careers-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Blue gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
          </div>

          <div className="container relative grid items-center justify-center gap-4 px-4 text-center md:px-6 z-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                Join Our Growing Team
              </h2>
              <p className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're always looking for talented individuals to join our mission
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link href="/careers">
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">View Open Positions</Button>
              </Link>
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

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
  },
  {
    name: "Aisha Patel",
    role: "Head of Product",
  },
  {
    name: "David Rodriguez",
    role: "Head of Marketing",
  },
  {
    name: "Emma Wilson",
    role: "Head of Customer Success",
  },
  {
    name: "James Thompson",
    role: "Head of Engineering",
  },
]

