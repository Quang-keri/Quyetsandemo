import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  BookOpen,
  Trophy,
  Clock,
  TrendingUp,
  Play,
  Award,
  Calendar,
  Target,
  Zap
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

interface DashboardPageProps {
  onNavigate: (page: Page) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const inProgressCourses = [
    {
      id: 1,
      title: 'Complete JavaScript Masterclass',
      progress: 35,
      lessonsCompleted: 15,
      totalLessons: 45,
      lastAccessed: '2 hours ago',
      nextLesson: 'Understanding Closures',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      progress: 62,
      lessonsCompleted: 22,
      totalLessons: 36,
      lastAccessed: '1 day ago',
      nextLesson: 'Data Visualization with Matplotlib',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'React & TypeScript',
      progress: 18,
      lessonsCompleted: 5,
      totalLessons: 28,
      lastAccessed: '3 days ago',
      nextLesson: 'Component Props and State',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop'
    }
  ];

  const completedCourses = [
    {
      id: 1,
      title: 'HTML & CSS Basics',
      completedDate: 'Dec 15, 2025',
      certificate: true,
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=300&h=150&fit=crop'
    },
    {
      id: 2,
      title: 'Git & GitHub Fundamentals',
      completedDate: 'Nov 28, 2025',
      certificate: true,
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=150&fit=crop'
    }
  ];

  const achievements = [
    { icon: '🔥', title: '7-Day Streak', description: 'Learn every day this week' },
    { icon: '🎯', title: 'Fast Learner', description: 'Complete 5 lessons in one day' },
    { icon: '⭐', title: 'First Course', description: 'Complete your first course' },
    { icon: '💯', title: 'Perfect Score', description: 'Get 100% on a quiz' }
  ];

  const weeklyActivity = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 1.8 },
    { day: 'Wed', hours: 3.2 },
    { day: 'Thu', hours: 2.1 },
    { day: 'Fri', hours: 1.5 },
    { day: 'Sat', hours: 4.0 },
    { day: 'Sun', hours: 2.8 }
  ];

  const maxHours = Math.max(...weeklyActivity.map(d => d.hours));

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Welcome back, Sarah! 👋</h1>
          <p className="text-slate-600">Keep up the great work. You're making excellent progress!</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Stats Cards */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-3xl mb-1">3</div>
            <div className="text-sm text-slate-600">Courses in Progress</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-3xl mb-1">2</div>
            <div className="text-sm text-slate-600">Courses Completed</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <Zap className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-3xl mb-1">18h</div>
            <div className="text-sm text-slate-600">Learning This Week</div>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-8">
            {/* Continue Learning */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl">Continue Learning</h2>
                <Button variant="outline" onClick={() => onNavigate('courses')}>
                  Browse All
                </Button>
              </div>

              <div className="space-y-4">
                {inProgressCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-48 h-32 object-cover"
                      />
                      <div className="flex-1 p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg mb-1">{course.title}</h3>
                            <p className="text-sm text-slate-600">
                              {course.lessonsCompleted} of {course.totalLessons} lessons completed
                            </p>
                          </div>
                          <Badge variant="outline" className="ml-4">
                            {course.progress}%
                          </Badge>
                        </div>

                        <Progress value={course.progress} className="mb-3" />

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-slate-600">
                            <span className="text-indigo-600">Next:</span> {course.nextLesson}
                          </div>
                          <Button 
                            size="sm"
                            onClick={() => onNavigate('lesson')}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Continue
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Weekly Activity */}
            <Card className="p-6">
              <h3 className="text-xl mb-6">Your Weekly Activity</h3>
              <div className="flex items-end justify-between gap-4 h-48">
                {weeklyActivity.map((day, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="flex-1 w-full flex items-end">
                      <div 
                        className="w-full bg-indigo-600 rounded-t-lg hover:bg-indigo-700 transition-colors cursor-pointer relative group"
                        style={{ height: `${(day.hours / maxHours) * 100}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {day.hours}h
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600">{day.day}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between text-sm">
                <div className="text-slate-600">Total: 18.0 hours</div>
                <div className="text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>+23% from last week</span>
                </div>
              </div>
            </Card>

            {/* Completed Courses */}
            <div>
              <h2 className="text-2xl mb-4">Completed Courses</h2>
              <div className="grid grid-cols-2 gap-4">
                {completedCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="mb-2">{course.title}</h3>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Completed {course.completedDate}</span>
                        {course.certificate && (
                          <Button size="sm" variant="outline">
                            <Award className="w-4 h-4 mr-2" />
                            Certificate
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-1 space-y-6">
            {/* Learning Streak */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl">7 Days</div>
                  <div className="text-sm text-slate-600">Current Streak</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <div 
                    key={day}
                    className="flex-1 h-2 bg-orange-600 rounded-full"
                  ></div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mt-3">
                Keep learning to maintain your streak! 🔥
              </p>
            </Card>

            {/* Learning Goals */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg">This Week's Goals</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Complete 10 lessons</span>
                    <span className="text-indigo-600">8/10</span>
                  </div>
                  <Progress value={80} />
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Study 20 hours</span>
                    <span className="text-indigo-600">18/20</span>
                  </div>
                  <Progress value={90} />
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Pass 5 quizzes</span>
                    <span className="text-green-600">5/5 ✓</span>
                  </div>
                  <Progress value={100} />
                </div>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg">Recent Achievements</h3>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="text-sm mb-0.5">{achievement.title}</div>
                      <div className="text-xs text-slate-600">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Events */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg">Upcoming</h3>
              </div>
              <div className="space-y-3">
                <div className="pb-3 border-b">
                  <div className="text-sm mb-1">JavaScript Quiz</div>
                  <div className="text-xs text-slate-600">Tomorrow, 2:00 PM</div>
                </div>
                <div className="pb-3 border-b">
                  <div className="text-sm mb-1">Live Q&A Session</div>
                  <div className="text-xs text-slate-600">Jan 15, 6:00 PM</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Final Project Deadline</div>
                  <div className="text-xs text-slate-600">Jan 20, 11:59 PM</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
