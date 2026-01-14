import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Users, 
  BookOpen, 
  DollarSign,
  Shield,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Eye,
  Ban,
  UserCheck,
  Server,
  TrendingUp,
  Clock,
  Search,
  Filter,
  MoreVertical,
  Settings,
  FileText,
  Lock
} from 'lucide-react';
import { Input } from '../ui/input';

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

interface AdminDashboardProps {
  onNavigate: (page: Page) => void;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'users' | 'courses' | 'security'>('overview');

  const systemStats = {
    totalUsers: 125483,
    activeUsers: 98234,
    totalLecturers: 1256,
    totalCourses: 3428,
    pendingApprovals: 23,
    totalRevenue: 1245680,
    monthlyRevenue: 89420,
    systemHealth: 99.8,
    activeDevices: 245678
  };

  const users = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      role: 'lecturer',
      status: 'active',
      joined: '2023-01-15',
      lastActive: '2 hours ago',
      courses: 8,
      revenue: 45280
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@email.com',
      role: 'lecturer',
      status: 'active',
      joined: '2023-03-22',
      lastActive: '1 day ago',
      courses: 5,
      revenue: 28900
    },
    {
      id: 3,
      name: 'Alex Thompson',
      email: 'alex.t@email.com',
      role: 'student',
      status: 'active',
      joined: '2024-02-10',
      lastActive: '5 mins ago',
      courses: 3,
      revenue: 0
    },
    {
      id: 4,
      name: 'Emma Wilson',
      email: 'emma.w@email.com',
      role: 'lecturer',
      status: 'suspended',
      joined: '2023-06-08',
      lastActive: '2 weeks ago',
      courses: 12,
      revenue: 62150
    },
    {
      id: 5,
      name: 'David Park',
      email: 'david.p@email.com',
      role: 'student',
      status: 'active',
      joined: '2024-01-05',
      lastActive: 'Yesterday',
      courses: 5,
      revenue: 0
    }
  ];

  const pendingCourses = [
    {
      id: 1,
      title: 'Advanced Machine Learning',
      lecturer: 'Dr. James Wilson',
      submitted: '2 days ago',
      lessons: 45,
      duration: '28h'
    },
    {
      id: 2,
      title: 'iOS Development with Swift',
      lecturer: 'Lisa Chang',
      submitted: '5 hours ago',
      lessons: 32,
      duration: '18h'
    },
    {
      id: 3,
      title: 'Blockchain Fundamentals',
      lecturer: 'Robert Martinez',
      submitted: '1 week ago',
      lessons: 24,
      duration: '12h'
    }
  ];

  const securityAlerts = [
    {
      type: 'warning',
      message: 'Multiple failed login attempts detected',
      user: 'john.doe@email.com',
      time: '15 mins ago'
    },
    {
      type: 'info',
      message: 'New device logged in',
      user: 'sarah.j@email.com',
      time: '1 hour ago'
    },
    {
      type: 'critical',
      message: 'Suspicious activity detected',
      user: 'unknown@suspicious.com',
      time: '3 hours ago'
    }
  ];

  const recentActivity = [
    { action: 'New user registered', user: 'alex.t@email.com', time: '5 mins ago' },
    { action: 'Course published', user: 'sarah.j@email.com', time: '2 hours ago' },
    { action: 'Payment processed', user: 'michael.c@email.com', time: '3 hours ago' },
    { action: 'User suspended', user: 'emma.w@email.com', time: '1 day ago' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl mb-2 text-purple-900">Admin Dashboard</h1>
            <p className="text-slate-600">System overview and management</p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline"
              onClick={() => onNavigate('security')}
            >
              <Shield className="w-4 h-4 mr-2" />
              Security
            </Button>
            <Button 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => onNavigate('security')}
            >
              <Settings className="w-4 h-4 mr-2" />
              System Settings
            </Button>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl font-semibold mb-1">{(systemStats.totalUsers / 1000).toFixed(1)}K</div>
            <div className="text-xs text-slate-600">Total Users</div>
            <div className="text-xs text-green-600 mt-1">+{(systemStats.activeUsers / 1000).toFixed(1)}K active</div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <UserCheck className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold mb-1">{systemStats.totalLecturers}</div>
            <div className="text-xs text-slate-600">Active Lecturers</div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-indigo-600" />
              </div>
              {systemStats.pendingApprovals > 0 && (
                <Badge className="bg-orange-100 text-orange-700 border-orange-200 text-xs">
                  {systemStats.pendingApprovals} pending
                </Badge>
              )}
            </div>
            <div className="text-2xl font-semibold mb-1">{systemStats.totalCourses}</div>
            <div className="text-xs text-slate-600">Total Courses</div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold mb-1">${(systemStats.totalRevenue / 1000).toFixed(0)}K</div>
            <div className="text-xs text-slate-600">Total Revenue</div>
            <div className="text-xs text-green-600 mt-1">${(systemStats.monthlyRevenue / 1000).toFixed(1)}K MTD</div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <Activity className="w-5 h-5 text-emerald-600" />
              </div>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl font-semibold mb-1">{systemStats.systemHealth}%</div>
            <div className="text-xs text-slate-600">System Health</div>
            <div className="text-xs text-emerald-600 mt-1">All systems operational</div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-slate-200">
          <button
            onClick={() => setSelectedTab('overview')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              selectedTab === 'overview'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setSelectedTab('users')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              selectedTab === 'users'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            User Management
          </button>
          <button
            onClick={() => setSelectedTab('courses')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              selectedTab === 'courses'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Course Moderation
          </button>
          <button
            onClick={() => setSelectedTab('security')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              selectedTab === 'security'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Security & Logs
          </button>
        </div>

        {/* Content based on tab */}
        {selectedTab === 'overview' && (
          <div className="grid grid-cols-12 gap-6">
            {/* Recent Activity */}
            <div className="col-span-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent System Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <Activity className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{activity.action}</div>
                          <div className="text-xs text-slate-600">{activity.user}</div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Security Alerts */}
            <div className="col-span-4">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Security Alerts</h3>
                  <Badge className="bg-red-100 text-red-700 border-red-200">
                    3 new
                  </Badge>
                </div>
                <div className="space-y-3">
                  {securityAlerts.map((alert, idx) => (
                    <div 
                      key={idx} 
                      className={`p-3 rounded-lg border-l-4 ${
                        alert.type === 'critical' 
                          ? 'bg-red-50 border-red-500' 
                          : alert.type === 'warning'
                          ? 'bg-orange-50 border-orange-500'
                          : 'bg-blue-50 border-blue-500'
                      }`}
                    >
                      <div className="text-sm font-medium mb-1">{alert.message}</div>
                      <div className="text-xs text-slate-600">{alert.user}</div>
                      <div className="text-xs text-slate-500 mt-1">{alert.time}</div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4"
                  onClick={() => onNavigate('security')}
                >
                  View All Alerts
                </Button>
              </Card>
            </div>
          </div>
        )}

        {selectedTab === 'users' && (
          <Card>
            {/* Search and Filters */}
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input 
                    placeholder="Search users by name or email..."
                    className="pl-9"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* User Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">User</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Role</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Joined</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Last Active</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Details</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-4 px-6">
                        <div>
                          <div className="font-medium text-sm">{user.name}</div>
                          <div className="text-xs text-slate-500">{user.email}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Badge className={
                          user.role === 'lecturer'
                            ? 'bg-green-100 text-green-700 border-green-200'
                            : 'bg-blue-100 text-blue-700 border-blue-200'
                        }>
                          {user.role === 'lecturer' ? 'Lecturer' : 'Student'}
                        </Badge>
                      </td>
                      <td className="py-4 px-6">
                        <Badge className={
                          user.status === 'active'
                            ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                            : 'bg-red-100 text-red-700 border-red-200'
                        }>
                          {user.status === 'active' ? (
                            <><CheckCircle2 className="w-3 h-3 mr-1" /> Active</>
                          ) : (
                            <><XCircle className="w-3 h-3 mr-1" /> Suspended</>
                          )}
                        </Badge>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-slate-600">{user.joined}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-slate-600">{user.lastActive}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm text-slate-600">
                          {user.role === 'lecturer' ? (
                            <div>
                              <div>{user.courses} courses</div>
                              <div className="text-xs text-green-600">${user.revenue.toLocaleString()}</div>
                            </div>
                          ) : (
                            <div>{user.courses} enrolled</div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost" onClick={() => onNavigate('profile')}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            className={user.status === 'active' ? 'text-red-600 hover:text-red-700' : 'text-green-600 hover:text-green-700'}
                          >
                            {user.status === 'active' ? <Ban className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
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

        {selectedTab === 'courses' && (
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Pending Course Approvals</h3>
                <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                  {pendingCourses.length} pending
                </Badge>
              </div>
              <div className="space-y-4">
                {pendingCourses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <h4 className="font-medium mb-1">{course.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span>by {course.lecturer}</span>
                        <span>•</span>
                        <span>{course.lessons} lessons</span>
                        <span>•</span>
                        <span>{course.duration}</span>
                        <span>•</span>
                        <span className="text-slate-500">Submitted {course.submitted}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" onClick={() => onNavigate('course-detail')}>
                        <Eye className="w-4 h-4 mr-2" />
                        Review
                      </Button>
                      <Button size="sm" variant="outline" className="text-green-600 border-green-300 hover:bg-green-50">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {selectedTab === 'security' && (
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Security Overview</h3>
                  <p className="text-sm text-slate-600">Monitor system security status</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-medium">SSL Certificate</span>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Valid</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium">2FA Enabled Users</span>
                  </div>
                  <span className="text-sm font-semibold">78%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-slate-600" />
                    <span className="text-sm font-medium">Active Devices</span>
                  </div>
                  <span className="text-sm font-semibold">{systemStats.activeDevices.toLocaleString()}</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
                onClick={() => onNavigate('security')}
              >
                <Shield className="w-4 h-4 mr-2" />
                Manage Security Settings
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Recent Security Logs</h3>
                  <p className="text-sm text-slate-600">Last 24 hours</p>
                </div>
              </div>
              <div className="space-y-3">
                {securityAlerts.map((alert, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-start justify-between mb-1">
                      <div className="text-sm font-medium">{alert.message}</div>
                      <Badge className={
                        alert.type === 'critical' 
                          ? 'bg-red-100 text-red-700 border-red-200'
                          : alert.type === 'warning'
                          ? 'bg-orange-100 text-orange-700 border-orange-200'
                          : 'bg-blue-100 text-blue-700 border-blue-200'
                      }>
                        {alert.type}
                      </Badge>
                    </div>
                    <div className="text-xs text-slate-600">{alert.user}</div>
                    <div className="text-xs text-slate-500 mt-1">{alert.time}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
