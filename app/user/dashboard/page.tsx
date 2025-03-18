import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Briefcase,
  User,
  FileText,
  Bell,
  Settings,
  Building,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"

export default function UserDashboard() {
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
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col border-r bg-muted">
          <div className="flex-1 overflow-auto py-8 px-4">
            <div className="flex flex-col items-center mb-8">
              <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mb-2">
                JD
              </div>
              <h2 className="text-lg font-semibold">John Doe</h2>
              <p className="text-sm text-muted-foreground">Software Developer</p>
            </div>
            <nav className="grid gap-2">
              <Link
                href="/user/dashboard"
                className="flex items-center gap-3 rounded-lg bg-primary px-3 py-2 text-primary-foreground"
              >
                <FileText className="h-4 w-4" />
                Dashboard
              </Link>
              <Link href="/user/profile" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
                <User className="h-4 w-4" />
                Profile
              </Link>
              <Link href="/user/applications" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
                <Briefcase className="h-4 w-4" />
                Applications
              </Link>
              <Link href="/user/saved-jobs" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
                <Bell className="h-4 w-4" />
                Saved Jobs
              </Link>
              <Link href="/user/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">In Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Interviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Saved Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="applications">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="interviews">Upcoming Interviews</TabsTrigger>
                <TabsTrigger value="recommended">Recommended Jobs</TabsTrigger>
              </TabsList>

              <TabsContent value="applications" className="space-y-4">
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Applied Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications.map((application) => (
                        <TableRow key={application.id}>
                          <TableCell className="font-medium">{application.jobTitle}</TableCell>
                          <TableCell>{application.company}</TableCell>
                          <TableCell>{application.appliedDate}</TableCell>
                          <TableCell>
                            <div
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                application.status === "In Review"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : application.status === "Rejected"
                                    ? "bg-red-100 text-red-800"
                                    : application.status === "Interview"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-green-100 text-green-800"
                              }`}
                            >
                              {application.status}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex justify-end">
                  <Link href="/user/applications">
                    <Button variant="outline" size="sm">
                      View All Applications
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="interviews" className="space-y-4">
                {interviews.length > 0 ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    {interviews.map((interview) => (
                      <Card key={interview.id}>
                        <CardHeader>
                          <CardTitle>{interview.jobTitle}</CardTitle>
                          <CardDescription>{interview.company}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>{interview.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>{interview.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>{interview.location}</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" className="w-full">
                            View Details
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="rounded-full bg-muted p-3 mb-4">
                      <Calendar className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">No Upcoming Interviews</h3>
                    <p className="text-muted-foreground mt-2 max-w-md">
                      You don't have any scheduled interviews at the moment. Keep applying to jobs and check back later.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="recommended" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {recommendedJobs.map((job) => (
                    <Card key={job.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>{job.company}</CardDescription>
                          </div>
                          <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                            <Building className="h-5 w-5" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {job.tags.map((tag) => (
                            <div
                              key={tag}
                              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          Save
                        </Button>
                        <Link href={`/jobs/${job.id}`}>
                          <Button size="sm">Apply Now</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Link href="/jobs">
                    <Button variant="outline" size="sm">
                      Browse All Jobs
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
                <CardDescription>Complete your profile to increase your chances of getting hired</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>Basic Information</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Completed</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>Contact Information</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Completed</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>Resume/CV</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Completed</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-red-500" />
                      <span>Work Experience</span>
                    </div>
                    <Link href="/user/profile">
                      <Button variant="link" size="sm" className="h-auto p-0">
                        Complete
                      </Button>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <AlertCircle className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>Skills & Expertise</span>
                    </div>
                    <Link href="/user/profile">
                      <Button variant="link" size="sm" className="h-auto p-0">
                        Update
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-sm font-medium mb-2">Profile Completion: 70%</div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/user/profile">
                  <Button variant="outline">Complete Your Profile</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

const applications = [
  {
    id: "1",
    jobTitle: "Frontend Developer",
    company: "TechCorp",
    appliedDate: "June 15, 2023",
    status: "In Review",
  },
  {
    id: "2",
    jobTitle: "UX Designer",
    company: "DesignHub",
    appliedDate: "June 10, 2023",
    status: "Interview",
  },
  {
    id: "3",
    jobTitle: "Product Manager",
    company: "InnovateCo",
    appliedDate: "June 5, 2023",
    status: "Rejected",
  },
  {
    id: "4",
    jobTitle: "Software Engineer",
    company: "CodeWorks",
    appliedDate: "June 1, 2023",
    status: "Accepted",
  },
]

const interviews = [
  {
    id: "1",
    jobTitle: "UX Designer",
    company: "DesignHub",
    date: "June 20, 2023",
    time: "10:00 AM - 11:00 AM",
    location: "Video Call (Zoom)",
  },
  {
    id: "2",
    jobTitle: "Frontend Developer",
    company: "WebTech",
    date: "June 22, 2023",
    time: "2:00 PM - 3:30 PM",
    location: "On-site (123 Tech Street, San Francisco)",
  },
]

const recommendedJobs = [
  {
    id: "7",
    title: "Senior Frontend Developer",
    company: "TechInnovate",
    location: "Remote",
    type: "Full-time",
    tags: ["React", "TypeScript", "UI/UX"],
  },
  {
    id: "8",
    title: "UI/UX Designer",
    company: "CreativeWorks",
    location: "London (Hybrid)",
    type: "Full-time",
    tags: ["Figma", "User Research", "Design Systems"],
  },
  {
    id: "9",
    title: "Product Manager",
    company: "ProductLabs",
    location: "Manchester",
    type: "Full-time",
    tags: ["Product Strategy", "Agile", "User Experience"],
  },
  {
    id: "10",
    title: "Full Stack Developer",
    company: "StackTech",
    location: "Birmingham (Remote)",
    type: "Contract",
    tags: ["JavaScript", "Node.js", "React"],
  },
]

