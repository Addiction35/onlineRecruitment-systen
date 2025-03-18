import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, Building, Calendar, Clock, MapPin, ChevronLeft } from "lucide-react"

export default function JobDetailPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the job details from an API or database
  const job = jobs.find((job) => job.id === params.id) || jobs[0]

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
      <main className="flex-1 container py-6 md:py-12">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to jobs
          </Link>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded bg-muted flex items-center justify-center">
                  <Building className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{job.title}</h1>
                  <p className="text-muted-foreground">{job.company}</p>
                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {job.location}
                  </div>
                </div>
              </div>
              <Button className="md:self-start">Apply Now</Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex flex-col p-4 border rounded-lg">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Clock className="h-4 w-4" />
                  Job Type
                </div>
                <p className="mt-1">{job.type}</p>
              </div>
              <div className="flex flex-col p-4 border rounded-lg">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Calendar className="h-4 w-4" />
                  Posted On
                </div>
                <p className="mt-1">{job.postedDate}</p>
              </div>
              <div className="flex flex-col p-4 border rounded-lg">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Briefcase className="h-4 w-4" />
                  Experience
                </div>
                <p className="mt-1">{job.experience}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Job Description</h2>
              <div className="prose max-w-none">
                <p>{job.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Benefits</h2>
              <ul className="list-disc pl-5 space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 p-6 border rounded-lg bg-muted">
              <h2 className="text-xl font-bold">Apply for this position</h2>
              <p>Ready to apply? Click the button below to submit your application.</p>
              <Link href={`/jobs/${job.id}/apply`}>
                <Button className="w-full md:w-auto">Apply Now</Button>
              </Link>
            </div>
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
    location: "London (Remote)",
    type: "Full-time",
    postedDate: "15 June 2023",
    experience: "3+ years",
    description:
      "We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications, ensuring they are responsive, accessible, and provide an excellent user experience.",
    requirements: [
      "3+ years of experience with React and TypeScript",
      "Strong understanding of HTML, CSS, and JavaScript",
      "Experience with responsive design and cross-browser compatibility",
      "Familiarity with modern frontend build tools and workflows",
      "Knowledge of UI/UX design principles",
      "Bachelor's degree in Computer Science or related field (or equivalent experience)",
    ],
    responsibilities: [
      "Develop and maintain user interfaces for web applications",
      "Collaborate with designers to implement UI/UX designs",
      "Write clean, maintainable, and efficient code",
      "Optimise applications for maximum speed and scalability",
      "Ensure cross-browser compatibility and responsiveness",
      "Participate in code reviews and contribute to team knowledge sharing",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Private health insurance",
      "Flexible work hours and remote work options",
      "Professional development budget",
      "Pension scheme with employer contributions",
      "25 days annual leave plus bank holidays",
    ],
  },
]

