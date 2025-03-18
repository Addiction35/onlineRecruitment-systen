import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Briefcase, Search, Plus, Eye, Edit, Trash2, Users, FileText, Settings, BarChart } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r bg-muted">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Briefcase className="h-6 w-6" />
            <span>JobConnect</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-lg bg-primary px-3 py-2 text-primary-foreground"
            >
              <BarChart className="h-4 w-4" />
              Dashboard
            </Link>
            <Link href="/admin/jobs" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
              <FileText className="h-4 w-4" />
              Jobs
            </Link>
            <Link href="/admin/applications" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
              <Users className="h-4 w-4" />
              Applications
            </Link>
            <Link href="/admin/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4">
          <div className="md:hidden">
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Briefcase className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <form className="flex items-center gap-2">
              <Input type="search" placeholder="Search..." className="h-9 md:w-[200px] lg:w-[300px]" />
              <Button variant="outline" size="sm" className="h-9">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <Button variant="outline" size="sm">
              <span className="sr-only md:not-sr-only md:inline-flex">Admin User</span>
            </Button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <Link href="/admin/jobs/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Post New Job
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-medium">Active Jobs</h3>
              </div>
              <p className="text-3xl font-bold mt-2">12</p>
              <p className="text-xs text-muted-foreground mt-1">+2 from last month</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-medium">Total Applications</h3>
              </div>
              <p className="text-3xl font-bold mt-2">48</p>
              <p className="text-xs text-muted-foreground mt-1">+15 from last month</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-medium">Conversion Rate</h3>
              </div>
              <p className="text-3xl font-bold mt-2">18%</p>
              <p className="text-xs text-muted-foreground mt-1">+2% from last month</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Job Listings</h2>
              <Link href="/admin/jobs" className="text-sm text-muted-foreground hover:underline">
                View all
              </Link>
            </div>

            <div className="border rounded-lg">
              <Table>
                <TableHeader>
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
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">{job.title}</TableCell>
                      <TableCell>{job.applications}</TableCell>
                      <TableCell>{job.postedDate}</TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            job.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : job.status === "Draft"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {job.status}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
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
          </div>
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

