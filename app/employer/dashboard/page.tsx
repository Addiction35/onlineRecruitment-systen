import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Briefcase,
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  Users,
  FileText,
  Settings,
  BarChart,
  Building,
  ChevronUp,
  Filter,
} from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { ApplicationsChart } from "@/components/charts/applications-chart"
import { SourceChart } from "@/components/charts/source-chart"
import { ConversionChart } from "@/components/charts/conversion-chart"

export default function EmployerDashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r bg-blue-50 dark:bg-blue-950">
        <div className="flex h-14 items-center border-b px-4 bg-blue-600 text-white">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Briefcase className="h-6 w-6" />
            <span>JobConnect</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <div className="flex flex-col items-center py-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white text-xl font-bold mb-2">
              TC
            </div>
            <h2 className="text-base font-semibold">TechCorp</h2>
            <p className="text-xs text-blue-600 dark:text-blue-400">Employer Account</p>
          </div>
          <nav className="grid gap-1 px-2">
            <Link
              href="/employer/dashboard"
              className="flex items-center gap-3 rounded-lg bg-blue-600 px-3 py-2 text-white"
            >
              <BarChart className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/employer/jobs"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900"
            >
              <FileText className="h-4 w-4" />
              Jobs
            </Link>
            <Link
              href="/employer/applications"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900"
            >
              <Users className="h-4 w-4" />
              Applications
            </Link>
            <Link
              href="/employer/company"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900"
            >
              <Building className="h-4 w-4" />
              Company Profile
            </Link>
            <Link
              href="/employer/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-white dark:bg-blue-950 px-4 shadow-sm">
          <div className="md:hidden">
            <MobileMenu
              links={[
                { href: "/employer/dashboard", label: "Dashboard", active: true },
                { href: "/employer/jobs", label: "Jobs" },
                { href: "/employer/applications", label: "Applications" },
                { href: "/employer/company", label: "Company Profile" },
                { href: "/employer/settings", label: "Settings" },
              ]}
            />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <form className="flex items-center gap-2">
              <Input type="search" placeholder="Search..." className="h-9 md:w-[200px] lg:w-[300px]" />
              <Button variant="outline" size="sm" className="h-9">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <Button
              variant="outline"
              size="sm"
              className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
            >
              <span className="sr-only md:not-sr-only md:inline-flex">Admin User</span>
            </Button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 bg-blue-50/30 dark:bg-blue-950/30">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Employer Dashboard</h1>
            <Link href="/employer/jobs/new">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                <Plus className="mr-2 h-4 w-4" />
                Post New Job
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card className="border-blue-100 dark:border-blue-800 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-800 dark:text-blue-200">Active Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">12</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 inline-flex items-center">
                    <ChevronUp className="h-3 w-3 mr-1" />2
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-100 dark:border-blue-800 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-800 dark:text-blue-200">
                  Total Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">48</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 inline-flex items-center">
                    <ChevronUp className="h-3 w-3 mr-1" />
                    15
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-100 dark:border-blue-800 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-800 dark:text-blue-200">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">18%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 inline-flex items-center">
                    <ChevronUp className="h-3 w-3 mr-1" />
                    2%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="analytics" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3 bg-blue-100 dark:bg-blue-900">
              <TabsTrigger value="jobs" className="data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800">
                Job Listings
              </TabsTrigger>
              <TabsTrigger
                value="applications"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800"
              >
                Recent Applications
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800"
              >
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="jobs" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100">Your Job Listings</h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>

              <div className="border rounded-lg border-blue-100 dark:border-blue-800 overflow-hidden bg-white dark:bg-blue-950 shadow-sm">
                <Table>
                  <TableHeader className="bg-blue-50 dark:bg-blue-900">
                    <TableRow>
                      <TableHead>Job Title</TableHead>
                      <TableHead>Applications</TableHead>
                      <TableHead>Posted Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {jobs.map((job) => (
                      <TableRow key={job.id} className="hover:bg-blue-50 dark:hover:bg-blue-900/50">
                        <TableCell className="font-medium text-blue-800 dark:text-blue-200">{job.title}</TableCell>
                        <TableCell>{job.applications}</TableCell>
                        <TableCell>{job.postedDate}</TableCell>
                        <TableCell>
                          <div
                            className={`status-badge ${
                              job.status === "Active"
                                ? "status-badge-active"
                                : job.status === "Draft"
                                  ? "status-badge-draft"
                                  : "status-badge-closed"
                            }`}
                          >
                            {job.status}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                            >
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">View</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                            >
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-end">
                <Link href="/employer/jobs">
                  <Button
                    variant="outline"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    View All Jobs
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="applications" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100">Recent Applications</h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>

              <div className="border rounded-lg border-blue-100 dark:border-blue-800 overflow-hidden bg-white dark:bg-blue-950 shadow-sm">
                <Table>
                  <TableHeader className="bg-blue-50 dark:bg-blue-900">
                    <TableRow>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Job Position</TableHead>
                      <TableHead>Applied Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((application) => (
                      <TableRow key={application.id} className="hover:bg-blue-50 dark:hover:bg-blue-900/50">
                        <TableCell className="font-medium text-blue-800 dark:text-blue-200">
                          {application.name}
                        </TableCell>
                        <TableCell>{application.position}</TableCell>
                        <TableCell>{application.appliedDate}</TableCell>
                        <TableCell>
                          <div
                            className={`status-badge ${
                              application.status === "New"
                                ? "status-badge-new"
                                : application.status === "Reviewed"
                                  ? "status-badge-reviewed"
                                  : application.status === "Rejected"
                                    ? "status-badge-rejected"
                                    : "status-badge-interview"
                            }`}
                          >
                            {application.status}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-end">
                <Link href="/employer/applications">
                  <Button
                    variant="outline"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    View All Applications
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100">Recruitment Analytics</h2>
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  Last 12 Months
                </Button>
              </div>

              <ApplicationsChart />

              <div className="grid gap-6 md:grid-cols-2">
                <SourceChart />
                <ConversionChart />
              </div>

              <Card className="border-blue-100 dark:border-blue-800 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 dark:text-blue-100">Top Performing Jobs</CardTitle>
                  <CardDescription>Jobs with the highest application rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader className="bg-blue-50 dark:bg-blue-900">
                      <TableRow>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead>Applications</TableHead>
                        <TableHead>Conversion Rate</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topJobs.map((job) => (
                        <TableRow key={job.id} className="hover:bg-blue-50 dark:hover:bg-blue-900/50">
                          <TableCell className="font-medium text-blue-800 dark:text-blue-200">{job.title}</TableCell>
                          <TableCell>{job.views}</TableCell>
                          <TableCell>{job.applications}</TableCell>
                          <TableCell>{job.conversionRate}%</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

const jobs = [
  {
    id: "1",
    title: "Frontend Developer",
    applications: 18,
    postedDate: "June 15, 2023",
    status: "Active",
  },
  {
    id: "2",
    title: "Product Manager",
    applications: 12,
    postedDate: "June 10, 2023",
    status: "Active",
  },
  {
    id: "3",
    title: "UX Designer",
    applications: 8,
    postedDate: "June 5, 2023",
    status: "Active",
  },
  {
    id: "4",
    title: "Backend Engineer",
    applications: 10,
    postedDate: "May 28, 2023",
    status: "Active",
  },
  {
    id: "5",
    title: "Marketing Specialist",
    applications: 0,
    postedDate: "June 18, 2023",
    status: "Draft",
  },
]

const applications = [
  {
    id: "1",
    name: "John Smith",
    position: "Frontend Developer",
    appliedDate: "June 18, 2023",
    status: "New",
  },
  {
    id: "2",
    name: "Emily Johnson",
    position: "UX Designer",
    appliedDate: "June 17, 2023",
    status: "Reviewed",
  },
  {
    id: "3",
    name: "Michael Chen",
    position: "Product Manager",
    appliedDate: "June 15, 2023",
    status: "Interview",
  },
  {
    id: "4",
    name: "Sarah Williams",
    position: "Backend Engineer",
    appliedDate: "June 14, 2023",
    status: "Rejected",
  },
  {
    id: "5",
    name: "David Rodriguez",
    position: "Frontend Developer",
    appliedDate: "June 12, 2023",
    status: "Interview",
  },
]

const topJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    views: 1245,
    applications: 18,
    conversionRate: 1.45,
  },
  {
    id: "3",
    title: "UX Designer",
    views: 980,
    applications: 8,
    conversionRate: 0.82,
  },
  {
    id: "2",
    title: "Product Manager",
    views: 876,
    applications: 12,
    conversionRate: 1.37,
  },
  {
    id: "4",
    title: "Backend Engineer",
    views: 754,
    applications: 10,
    conversionRate: 1.33,
  },
]

