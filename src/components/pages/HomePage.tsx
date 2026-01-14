import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Code2, 
  Star, 
  Clock, 
  Users, 
  TrendingUp,
  Award,
  Play,
  ArrowRight
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

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredCourses = [
    {
      id: 1,
      title: 'Complete JavaScript Masterclass',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      students: 45230,
      hours: 42,
      level: 'Beginner',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop',
      tags: ['JavaScript', 'Web Development']
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Dr. Michael Chen',
      rating: 4.9,
      students: 38420,
      hours: 36,
      level: 'Intermediate',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
      tags: ['Python', 'Data Science']
    },
    {
      id: 3,
      title: 'React & TypeScript: Build Modern Apps',
      instructor: 'Emma Wilson',
      rating: 4.7,
      students: 29150,
      hours: 28,
      level: 'Advanced',
      price: 109.99,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      tags: ['React', 'TypeScript']
    }
  ];

  const languages = [
    { name: 'JavaScript', icon: '🟨', courses: 156, color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Python', icon: '🐍', courses: 142, color: 'bg-blue-100 text-blue-700' },
    { name: 'Java', icon: '☕', courses: 98, color: 'bg-orange-100 text-orange-700' },
    { name: 'C++', icon: '⚡', courses: 87, color: 'bg-purple-100 text-purple-700' },
    { name: 'React', icon: '⚛️', courses: 124, color: 'bg-cyan-100 text-cyan-700' },
    { name: 'Node.js', icon: '🟢', courses: 93, color: 'bg-green-100 text-green-700' },
    { name: 'TypeScript', icon: '🔷', courses: 76, color: 'bg-blue-100 text-blue-700' },
    { name: 'Go', icon: '🔵', courses: 54, color: 'bg-sky-100 text-sky-700' }
  ];

  const learningPaths = [
    {
      title: 'Full-Stack Web Developer',
      courses: 12,
      duration: '6 months',
      description: 'Master both frontend and backend development',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Data Science & ML',
      courses: 10,
      duration: '5 months',
      description: 'Learn data analysis and machine learning',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow']
    },
    {
      title: 'Mobile App Development',
      courses: 8,
      duration: '4 months',
      description: 'Build iOS and Android applications',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                🎉 New: 50+ courses added this month
              </Badge>
              <h1 className="text-5xl mb-6">
                Learn to Code.<br />Build Your Future.
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Master programming with interactive courses, real-world projects, 
                and guidance from industry experts.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-indigo-600 hover:bg-indigo-50"
                  onClick={() => onNavigate('courses')}
                >
                  Explore Courses
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-3xl mb-1">500K+</div>
                  <div className="text-sm text-indigo-200">Active Learners</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">850+</div>
                  <div className="text-sm text-indigo-200">Courses</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">98%</div>
                  <div className="text-sm text-indigo-200">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                  <Play className="w-16 h-16 text-white" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-indigo-400 rounded-full"></div>
                  <div>
                    <div className="text-sm">Sarah Johnson</div>
                    <div className="text-xs text-indigo-200">Senior Instructor</div>
                  </div>
                </div>
                <div className="text-sm text-indigo-100">
                  "Join thousands of students mastering coding skills"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Languages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-3">Popular Programming Languages</h2>
            <p className="text-slate-600">Choose your path and start learning today</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {languages.map((lang, idx) => (
              <Card 
                key={idx}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-indigo-200"
                onClick={() => onNavigate('courses')}
              >
                <div className="text-4xl mb-3">{lang.icon}</div>
                <h3 className="text-lg mb-2">{lang.name}</h3>
                <p className="text-sm text-slate-600">{lang.courses} courses</p>
                <div className="mt-4">
                  <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl mb-3">Featured Courses</h2>
              <p className="text-slate-600">Hand-picked courses from top instructors</p>
            </div>
            <Button 
              variant="outline"
              onClick={() => onNavigate('courses')}
            >
              View All Courses
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <Card 
                key={course.id} 
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => onNavigate('course-detail')}
              >
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-white text-slate-900">
                    {course.level}
                  </Badge>
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-3">
                    {course.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">by {course.instructor}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{(course.students / 1000).toFixed(1)}K</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.hours}h</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl text-indigo-600">${course.price}</span>
                    <Button size="sm" variant="outline">Learn More</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-3">Career Learning Paths</h2>
            <p className="text-slate-600">Structured curricula to help you reach your goals</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {learningPaths.map((path, idx) => (
              <Card 
                key={idx} 
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onNavigate('dashboard')}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-indigo-600" />
                  </div>
                  <Badge variant="outline">{path.courses} courses</Badge>
                </div>
                <h3 className="text-xl mb-2">{path.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{path.description}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{path.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {path.skills.slice(0, 3).map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {path.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{path.skills.length - 3} more
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">500K+</div>
              <div className="text-indigo-100">Active Students</div>
            </div>
            <div>
              <div className="text-4xl mb-2">850+</div>
              <div className="text-indigo-100">Expert-Led Courses</div>
            </div>
            <div>
              <div className="text-4xl mb-2">98%</div>
              <div className="text-indigo-100">Completion Rate</div>
            </div>
            <div>
              <div className="text-4xl mb-2">50+</div>
              <div className="text-indigo-100">Programming Languages</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <TrendingUp className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
          <h2 className="text-4xl mb-4">Start Learning Today</h2>
          <p className="text-xl text-slate-600 mb-8">
            Join millions of learners and transform your career with UniCode.com
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700"
              onClick={() => onNavigate('courses')}
            >
              Browse Courses
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('dashboard')}
            >
              View Learning Paths
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}