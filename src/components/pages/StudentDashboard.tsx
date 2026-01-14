import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  Flame, 
  Star,
  TrendingUp,
  Play,
  CheckCircle2,
  Award,
  Target,
  Zap,
  BarChart3
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

interface StudentDashboardProps {
  onNavigate: (page: Page) => void;
}

export function StudentDashboard({ onNavigate }: StudentDashboardProps) {
  const currentCourse = {
    title: 'Complete JavaScript Masterclass',
    instructor: 'Sarah Johnson',
    progress: 68,
    currentLesson: 'Async/Await & Promises',
    totalLessons: 42,
    completedLessons: 28,
    nextLesson: 'Error Handling in JavaScript',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop'
  };

  const stats = {
    totalXP: 3450,
    streak: 7,
    completedCourses: 3,
    totalHours: 24
  };

  const badges = [
    { name: 'Fast Learner', icon: '⚡', color: 'bg-yellow-100 text-yellow-700 border-yellow-300', earned: true },
    { name: '7 Day Streak', icon: '🔥', color: 'bg-orange-100 text-orange-700 border-orange-300', earned: true },
    { name: 'JavaScript Pro', icon: '🟨', color: 'bg-blue-100 text-blue-700 border-blue-300', earned: true },
    { name: 'Code Master', icon: '👑', color: 'bg-purple-100 text-purple-700 border-purple-300', earned: false },
    { name: '30 Day Streak', icon: '🏆', color: 'bg-slate-100 text-slate-400 border-slate-300', earned: false },
    { name: 'Team Player', icon: '🤝', color: 'bg-slate-100 text-slate-400 border-slate-300', earned: false }
  ];

  const recommendedCourses = [
    {
      id: 1,
      title: 'Advanced React Patterns',
      instructor: 'Emma Wilson',
      rating: 4.8,
      duration: '12h',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=180&fit=crop'
    },
    {
      id: 2,
      title: 'Node.js Backend Development',
      instructor: 'Michael Chen',
      rating: 4.9,
      duration: '18h',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=180&fit=crop'
    },
    {
      id: 3,
      title: 'TypeScript Fundamentals',
      instructor: 'David Park',
      rating: 4.7,
      duration: '8h',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=300&h=180&fit=crop'
    }
  ];

  const recentActivity = [
    { type: 'completed', title: 'JavaScript Arrays & Methods', time: '2 hours ago' },
    { type: 'started', title: 'Async Programming Module', time: '1 day ago' },
    { type: 'badge', title: 'Earned "7 Day Streak" badge', time: '1 day ago' },
    { type: 'completed', title: 'DOM Manipulation Quiz', time: '2 days ago' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-slate-600">Continue your learning journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card className="p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="text-2xl font-semibold">{stats.totalXP}</div>
            </div>
            <div className="text-sm text-slate-600">Total XP</div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Flame className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-2xl font-semibold">{stats.streak}</div>
            </div>
            <div className="text-sm text-slate-600">Day Streak 🔥</div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-2xl font-semibold">{stats.completedCourses}</div>
            </div>
            <div className="text-sm text-slate-600">Completed</div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-2xl font-semibold">{stats.totalHours}h</div>
            </div>
            <div className="text-sm text-slate-600">Learning Time</div>
          </Card>
        </div>

        {/* Current Course */}
        <Card className="overflow-hidden mb-6">
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <img 
                src={currentCourse.thumbnail} 
                alt={currentCourse.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 p-6">
              <Badge className="mb-3 bg-indigo-100 text-indigo-700 border-indigo-200">
                Continue Learning
              </Badge>
              <h3 className="text-xl mb-2">{currentCourse.title}</h3>
              <p className="text-sm text-slate-600 mb-4">by {currentCourse.instructor}</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Overall Progress</span>
                  <span className="text-sm font-semibold text-indigo-600">{currentCourse.progress}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${currentCourse.progress}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                  <span>{currentCourse.completedLessons} of {currentCourse.totalLessons} lessons completed</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => onNavigate('lesson')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Continue: {currentCourse.currentLesson}
                </Button>
                <Button variant="outline" onClick={() => onNavigate('course-detail')}>
                  View Course
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Achievements & Badges */}
        <Card className="p-6 mb-6 rounded-2xl">
          <div className="flex items-center gap-2 mb-5">
            <Trophy className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold text-lg">Achievements</h3>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border-2 text-center transition-all hover:scale-105 ${
                  badge.earned 
                    ? badge.color 
                    : 'bg-slate-50 text-slate-400 border-slate-200 opacity-60'
                }`}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="text-xs font-medium">{badge.name}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Level Progress */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Level Progress</h3>
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-sm px-3 py-1">
              Level 12
            </Badge>
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600">XP to Level 13</span>
              <span className="text-sm font-semibold">3450 / 4000</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                style={{ width: '86%' }}
              ></div>
            </div>
          </div>
          <p className="text-sm text-slate-500">550 XP needed for next level 🎯</p>
        </Card>

        {/* Daily Goal */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold text-indigo-900">Daily Goal</h3>
          </div>
          <p className="text-sm text-indigo-700 mb-3">Complete 1 lesson today</p>
          <div className="h-2 bg-white/60 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-indigo-600 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-xs text-indigo-600">3 of 4 lessons completed</p>
        </Card>

        {/* Recommended Courses */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recommended for You</h2>
            <Button variant="ghost" size="sm" onClick={() => onNavigate('courses')}>
              View All
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {recommendedCourses.map((course) => (
              <Card 
                key={course.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onNavigate('course-detail')}
              >
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {course.level}
                  </Badge>
                  <h3 className="text-sm font-semibold mb-1">{course.title}</h3>
                  <p className="text-xs text-slate-600 mb-3">{course.instructor}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0">
                <div className={`p-2 rounded-full ${
                  activity.type === 'completed' ? 'bg-green-100' :
                  activity.type === 'badge' ? 'bg-yellow-100' :
                  'bg-blue-100'
                }`}>
                  {activity.type === 'completed' ? (
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  ) : activity.type === 'badge' ? (
                    <Award className="w-4 h-4 text-yellow-600" />
                  ) : (
                    <Play className="w-4 h-4 text-blue-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-slate-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}