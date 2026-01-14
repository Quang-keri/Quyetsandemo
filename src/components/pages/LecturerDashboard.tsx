import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Users, 
  BookOpen, 
  Star,
  DollarSign,
  TrendingUp,
  Plus,
  Edit,
  Eye,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertCircle,
  PlayCircle,
  FileText,
  MoreVertical
} from 'lucide-react';

type Page = 
  | 'home' 
  | 'courses' 
  | 'course-detail' 
  | 'lesson' 
  | 'code-editor' 
  | 'quiz' 
  | 'dashboard' 
  | 'payment' 
  | 'profile' 
  | 'security';

interface LecturerDashboardProps {
  onNavigate: (page: Page) => void;
}

export function LecturerDashboard({ onNavigate }: LecturerDashboardProps) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'courses' | 'students'>('overview');

  const stats = {
    totalStudents: 12453,
    totalCourses: 8,
    avgRating: 4.8,
    totalRevenue: 45280,
    monthlyRevenue: 8420,
    newStudentsThisMonth: 342
  };

  const courses = [
    {
      id: 1,
      title: 'Complete JavaScript Masterclass',
      status: 'published',
      students: 4523,
      rating: 4.8,
      revenue: 18250,
      lessons: 42,
      lastUpdated: '2 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=100&h=60&fit=crop'
    },
    {
      id: 2,
      title: 'Advanced React Patterns',
      status: 'published',
      students: 3210,
      rating: 4.9,
      revenue: 15840,
      lessons: 36,
      lastUpdated: '1 week ago',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=60&fit=crop'
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      status: 'published',
      students: 2890,
      rating: 4.7,
      revenue: 8670,
      lessons: 28,
      lastUpdated: '3 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=60&fit=crop'
    },
    {
      id: 4,
      title: 'TypeScript Fundamentals',
      status: 'draft',
      students: 0,
      rating: 0,
      revenue: 0,
      lessons: 12,
      lastUpdated: 'Yesterday',
      thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=100&h=60&fit=crop'
    }
  ];

  const recentStudents = [
    { name: 'Alice Johnson', course: 'JavaScript Masterclass', enrolled: '2 hours ago', progress: 15 },
    { name: 'Bob Smith', course: 'React Patterns', enrolled: '5 hours ago', progress: 8 },
    { name: 'Carol Davis', course: 'Node.js Backend', enrolled: '1 day ago', progress: 22 },
    { name: 'David Lee', course: 'JavaScript Masterclass', enrolled: '1 day ago', progress: 5 }
  ];

  const chartData = [
    { month: 'Jan', revenue: 3200, students: 120 },
    { month: 'Feb', revenue: 4100, students: 156 },
    { month: 'Mar', revenue: 5300, students: 198 },
    { month: 'Apr', revenue: 6800, students: 245 },
    { month: 'May', revenue: 7200, students: 278 },
    { month: 'Jun', revenue: 8420, students: 342 }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl mb-2">Lecturer Dashboard</h1>
            <p className="text-slate-600">Manage your courses and track your teaching impact</p>
          </div>
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={() => onNavigate('courses')}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Course
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <Badge className="bg-green-50 text-green-700 border-green-200">
                +{stats.newStudentsThisMonth} this month
              </Badge>
            </div>
            <div className="text-3xl font-semibold mb-1">{stats.totalStudents.toLocaleString()}</div>
            <div className="text-sm text-slate-600">Total Students</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-semibold mb-1">{stats.totalCourses}</div>
            <div className="text-sm text-slate-600">Published Courses</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex items-center gap-1 text-sm text-yellow-600">
                <Star className="w-4 h-4 fill-yellow-400" />
                {stats.avgRating}
              </div>
            </div>
            <div className="text-3xl font-semibold mb-1">{stats.avgRating}</div>
            <div className="text-sm text-slate-600">Average Rating</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <Badge className="bg-purple-50 text-purple-700 border-purple-200">
                ${stats.monthlyRevenue.toLocaleString()} MTD
              </Badge>
            </div>
            <div className="text-3xl font-semibold mb-1">${(stats.totalRevenue / 1000).toFixed(1)}K</div>
            <div className="text-sm text-slate-600">Total Revenue</div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-slate-200">
          <button
            onClick={() => setSelectedTab('overview')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              selectedTab === 'overview'
                ? 'border-green-600 text-green-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setSelectedTab('courses')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              selectedTab === 'courses'
                ? 'border-green-600 text-green-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            My Courses
          </button>
          <button
            onClick={() => setSelectedTab('students')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              selectedTab === 'students'
                ? 'border-green-600 text-green-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Students
          </button>
        </div>

        {/* Content based on selected tab */}
        {selectedTab === 'overview' && (
          <div className="grid grid-cols-12 gap-6">
            {/* Revenue Chart */}
            <div className="col-span-8">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Revenue & Growth</h3>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-600 rounded"></div>
                      <span className="text-slate-600">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600 rounded"></div>
                      <span className="text-slate-600">Students</span>
                    </div>
                  </div>
                </div>
                <div className="h-64 flex items-end gap-4">
                  {chartData.map((data, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full flex flex-col gap-1">
                        <div 
                          className="w-full bg-green-500 rounded-t hover:bg-green-600 transition-colors"
                          style={{ height: `${(data.revenue / 100)}px` }}
                          title={`$${data.revenue}`}
                        ></div>
                        <div 
                          className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                          style={{ height: `${(data.students / 2)}px` }}
                          title={`${data.students} students`}
                        ></div>
                      </div>
                      <span className="text-xs text-slate-600">{data.month}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Recent Students */}
            <div className="col-span-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Enrollments</h3>
                <div className="space-y-4">
                  {recentStudents.map((student, idx) => (
                    <div key={idx} className="pb-4 border-b border-slate-100 last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-medium text-sm">{student.name}</div>
                          <div className="text-xs text-slate-600">{student.course}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">{student.enrolled}</span>
                        <span className="text-green-600 font-medium">{student.progress}% progress</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

        {selectedTab === 'courses' && (
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Course</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Students</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Rating</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Revenue</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Updated</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img 
                            src={course.thumbnail} 
                            alt={course.title}
                            className="w-16 h-10 rounded object-cover"
                          />
                          <div>
                            <div className="font-medium text-sm">{course.title}</div>
                            <div className="text-xs text-slate-500">{course.lessons} lessons</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Badge className={
                          course.status === 'published' 
                            ? 'bg-green-100 text-green-700 border-green-200' 
                            : 'bg-yellow-100 text-yellow-700 border-yellow-200'
                        }>
                          {course.status === 'published' ? (
                            <><CheckCircle2 className="w-3 h-3 mr-1" /> Published</>
                          ) : (
                            <><AlertCircle className="w-3 h-3 mr-1" /> Draft</>
                          )}
                        </Badge>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1 text-sm">
                          <Users className="w-4 h-4 text-slate-400" />
                          {course.students.toLocaleString()}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        {course.rating > 0 ? (
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            {course.rating}
                          </div>
                        ) : (
                          <span className="text-sm text-slate-400">-</span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-medium text-green-600">
                          ${course.revenue.toLocaleString()}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-slate-600">{course.lastUpdated}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost" onClick={() => onNavigate('course-detail')}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => onNavigate('courses')}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {selectedTab === 'students' && (
          <Card className="p-6">
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Student Analytics</h3>
              <p className="text-slate-600 mb-4">View detailed analytics about your students</p>
              <Button variant="outline" onClick={() => onNavigate('dashboard')}>
                View Analytics
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
