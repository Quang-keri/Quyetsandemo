import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Star, 
  Clock, 
  Users,
  Play,
  FileText,
  Award,
  Infinity,
  Monitor,
  Check,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

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

interface CourseDetailPageProps {
  onNavigate: (page: Page) => void;
}

export function CourseDetailPage({ onNavigate }: CourseDetailPageProps) {
  const curriculum = [
    {
      section: 'Introduction to JavaScript',
      lectures: 8,
      duration: '1h 45m',
      lessons: [
        { title: 'Welcome to the Course', duration: '5:23', free: true },
        { title: 'Setting Up Your Environment', duration: '12:45', free: true },
        { title: 'Your First JavaScript Program', duration: '15:30', free: false },
        { title: 'Variables and Data Types', duration: '18:20', free: false },
        { title: 'Understanding Functions', duration: '22:15', free: false }
      ]
    },
    {
      section: 'Advanced JavaScript Concepts',
      lectures: 12,
      duration: '3h 20m',
      lessons: [
        { title: 'Arrow Functions & This Keyword', duration: '16:40', free: false },
        { title: 'Closures Explained', duration: '19:25', free: false },
        { title: 'Async/Await & Promises', duration: '25:30', free: false }
      ]
    },
    {
      section: 'Working with APIs',
      lectures: 10,
      duration: '2h 45m',
      lessons: [
        { title: 'Introduction to REST APIs', duration: '14:20', free: false },
        { title: 'Fetch API & AJAX', duration: '18:45', free: false },
        { title: 'Building a Real Project', duration: '32:10', free: false }
      ]
    },
    {
      section: 'Modern JavaScript (ES6+)',
      lectures: 15,
      duration: '4h 10m',
      lessons: [
        { title: 'Destructuring & Spread Operator', duration: '17:35', free: false },
        { title: 'Modules & Imports', duration: '15:50', free: false },
        { title: 'Template Literals', duration: '12:25', free: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-3 gap-12">
            <div className="col-span-2">
              <Badge className="bg-indigo-600 text-white border-0 mb-4">
                Bestseller
              </Badge>
              <h1 className="text-4xl mb-4">Complete JavaScript Masterclass 2026</h1>
              <p className="text-xl text-slate-300 mb-6">
                Master JavaScript from fundamentals to advanced concepts. Build real-world projects 
                and become a professional JavaScript developer.
              </p>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg">4.8</span>
                  <span className="text-slate-300">(12,450 ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>45,230 students</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-300">
                <span>Created by <span className="text-white">Sarah Johnson</span></span>
                <span>•</span>
                <span>Last updated 01/2026</span>
                <span>•</span>
                <span>English</span>
              </div>
            </div>

            <div className="col-span-1">
              <Card className="overflow-hidden">
                <div className="relative bg-slate-800 aspect-video flex items-center justify-center">
                  <Play className="w-16 h-16 text-white cursor-pointer hover:scale-110 transition-transform" />
                  <img 
                    src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop"
                    alt="Course preview"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                </div>
                <div className="p-6">
                  <div className="text-3xl text-slate-900 mb-4">$89.99</div>
                  <Button 
                    className="w-full mb-3 bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => onNavigate('payment')}
                  >
                    Buy Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => onNavigate('lesson')}
                  >
                    Start Free Preview
                  </Button>
                  <p className="text-xs text-center text-slate-600 mt-3">
                    30-Day Money-Back Guarantee
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                {/* What You'll Learn */}
                <Card className="p-6">
                  <h3 className="text-2xl mb-6">What you'll learn</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Master JavaScript fundamentals and advanced concepts',
                      'Build real-world projects from scratch',
                      'Understand ES6+ features and modern syntax',
                      'Work with APIs and asynchronous programming',
                      'Learn DOM manipulation and event handling',
                      'Debugging techniques and best practices',
                      'Object-oriented and functional programming',
                      'Prepare for JavaScript interviews'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Course Description */}
                <Card className="p-6">
                  <h3 className="text-2xl mb-4">Description</h3>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      Welcome to the Complete JavaScript Masterclass! This comprehensive course 
                      is designed to take you from a complete beginner to an advanced JavaScript 
                      developer.
                    </p>
                    <p>
                      JavaScript is the most popular programming language in the world and powers 
                      the modern web. Whether you want to build websites, web applications, or 
                      even mobile apps, JavaScript is an essential skill.
                    </p>
                    <p>
                      This course covers everything you need to know about JavaScript, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Core JavaScript fundamentals (variables, functions, arrays, objects)</li>
                      <li>Modern ES6+ features (arrow functions, destructuring, modules)</li>
                      <li>Asynchronous JavaScript (callbacks, promises, async/await)</li>
                      <li>DOM manipulation and browser APIs</li>
                      <li>Working with external APIs and JSON data</li>
                      <li>Object-oriented programming in JavaScript</li>
                      <li>Functional programming concepts</li>
                    </ul>
                  </div>
                </Card>

                {/* Requirements */}
                <Card className="p-6">
                  <h3 className="text-2xl mb-4">Requirements</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>No prior programming experience required</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>A computer with internet connection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Willingness to learn and practice coding</span>
                    </li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl">Course Curriculum</h3>
                    <div className="text-sm text-slate-600">
                      45 sections • 234 lectures • 42h total length
                    </div>
                  </div>

                  <div className="space-y-4">
                    {curriculum.map((section, idx) => (
                      <div key={idx} className="border border-slate-200 rounded-lg">
                        <button className="w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                            <div className="text-left">
                              <div>{section.section}</div>
                              <div className="text-sm text-slate-600 mt-1">
                                {section.lectures} lectures • {section.duration}
                              </div>
                            </div>
                          </div>
                        </button>
                        <div className="border-t border-slate-200">
                          {section.lessons.map((lesson, lessonIdx) => (
                            <div 
                              key={lessonIdx}
                              className="p-4 pl-12 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                              onClick={() => lesson.free && onNavigate('lesson')}
                            >
                              <div className="flex items-center gap-3">
                                <Play className="w-4 h-4 text-slate-400" />
                                <span className="text-sm">{lesson.title}</span>
                                {lesson.free && (
                                  <Badge variant="outline" className="text-xs">Free Preview</Badge>
                                )}
                              </div>
                              <span className="text-sm text-slate-600">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="instructor">
                <Card className="p-6">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-32 h-32 rounded-full bg-indigo-200"></div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-2">Sarah Johnson</h3>
                      <p className="text-slate-600 mb-4">Senior Full-Stack Developer & Instructor</p>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="w-4 h-4" />
                            <span>4.8 Rating</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <Award className="w-4 h-4" />
                            <span>12 Courses</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <Users className="w-4 h-4" />
                            <span>250K Students</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <FileText className="w-4 h-4" />
                            <span>4,320 Reviews</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      Sarah is a passionate educator with over 10 years of experience in web development. 
                      She has worked with companies like Google, Microsoft, and Facebook, building 
                      large-scale applications.
                    </p>
                    <p>
                      Her teaching style focuses on practical, hands-on learning with real-world projects. 
                      She believes that the best way to learn programming is by building actual applications.
                    </p>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card className="p-6">
                  <h3 className="text-2xl mb-6">Student Reviews</h3>
                  <div className="space-y-6">
                    {[
                      {
                        name: 'John Smith',
                        rating: 5,
                        date: '2 weeks ago',
                        review: 'This is hands down the best JavaScript course I\'ve taken. Sarah explains everything clearly and the projects are really helpful for understanding the concepts.'
                      },
                      {
                        name: 'Emily Davis',
                        rating: 5,
                        date: '1 month ago',
                        review: 'Excellent course! I went from knowing nothing about JavaScript to building my own web applications. The curriculum is well-structured and easy to follow.'
                      },
                      {
                        name: 'Michael Brown',
                        rating: 4,
                        date: '2 months ago',
                        review: 'Great content and very thorough. The only minor issue is that some videos could be a bit shorter, but overall highly recommended!'
                      }
                    ].map((review, idx) => (
                      <div key={idx} className="pb-6 border-b last:border-0">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div>{review.name}</div>
                                <div className="text-sm text-slate-600">{review.date}</div>
                              </div>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-slate-700">{review.review}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="text-lg mb-4">This course includes:</h3>
              <div className="space-y-3">
                {[
                  { icon: Clock, text: '42 hours on-demand video' },
                  { icon: FileText, text: '234 downloadable resources' },
                  { icon: Infinity, text: 'Full lifetime access' },
                  { icon: Monitor, text: 'Access on mobile and desktop' },
                  { icon: Award, text: 'Certificate of completion' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <item.icon className="w-5 h-5 text-slate-600" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <Button 
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => onNavigate('payment')}
                >
                  Enroll Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
