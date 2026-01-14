import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Maximize,
  ChevronRight,
  ChevronDown,
  FileText,
  Code,
  CheckCircle2,
  Circle,
  BookOpen
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

interface LessonPageProps {
  onNavigate: (page: Page) => void;
}

export function LessonPage({ onNavigate }: LessonPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const curriculum = [
    {
      section: 'Introduction to JavaScript',
      completed: 3,
      total: 5,
      lessons: [
        { id: 1, title: 'Welcome to the Course', duration: '5:23', completed: true, current: false },
        { id: 2, title: 'Setting Up Your Environment', duration: '12:45', completed: true, current: false },
        { id: 3, title: 'Your First JavaScript Program', duration: '15:30', completed: true, current: true },
        { id: 4, title: 'Variables and Data Types', duration: '18:20', completed: false, current: false },
        { id: 5, title: 'Understanding Functions', duration: '22:15', completed: false, current: false }
      ]
    },
    {
      section: 'Advanced JavaScript Concepts',
      completed: 0,
      total: 3,
      lessons: [
        { id: 6, title: 'Arrow Functions & This Keyword', duration: '16:40', completed: false, current: false },
        { id: 7, title: 'Closures Explained', duration: '19:25', completed: false, current: false },
        { id: 8, title: 'Async/Await & Promises', duration: '25:30', completed: false, current: false }
      ]
    },
    {
      section: 'Working with APIs',
      completed: 0,
      total: 3,
      lessons: [
        { id: 9, title: 'Introduction to REST APIs', duration: '14:20', completed: false, current: false },
        { id: 10, title: 'Fetch API & AJAX', duration: '18:45', completed: false, current: false },
        { id: 11, title: 'Building a Real Project', duration: '32:10', completed: false, current: false }
      ]
    }
  ];

  const toggleSection = (idx: number) => {
    if (expandedSections.includes(idx)) {
      setExpandedSections(expandedSections.filter(i => i !== idx));
    } else {
      setExpandedSections([...expandedSections, idx]);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-slate-900">
      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col max-w-[75%]">
          {/* Video Player */}
          <div className="bg-black relative" style={{ aspectRatio: '16/9' }}>
            <img 
              src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=1200&h=675&fit=crop"
              alt="Video thumbnail"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-6 transition-all"
              >
                {isPlaying ? (
                  <Pause className="w-12 h-12 text-white" />
                ) : (
                  <Play className="w-12 h-12 text-white ml-1" />
                )}
              </button>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              {/* Progress Bar */}
              <div className="mb-3">
                <div className="h-1 bg-white/30 rounded-full cursor-pointer group">
                  <div className="h-full w-1/3 bg-indigo-600 rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-white mt-1">
                  <span>5:12</span>
                  <span>15:30</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="text-white hover:text-indigo-400 transition-colors">
                    <SkipBack className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:text-indigo-400 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <button className="text-white hover:text-indigo-400 transition-colors">
                    <SkipForward className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-2 text-white">
                    <Volume2 className="w-5 h-5" />
                    <div className="w-20 h-1 bg-white/30 rounded-full">
                      <div className="h-full w-2/3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <select className="bg-white/20 text-white text-sm px-2 py-1 rounded border-0">
                    <option>1.0x</option>
                    <option>1.25x</option>
                    <option>1.5x</option>
                    <option>2.0x</option>
                  </select>
                  <button className="text-white hover:text-indigo-400 transition-colors">
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Info and Tabs */}
          <div className="flex-1 overflow-auto bg-white">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl mb-2">Your First JavaScript Program</h2>
                  <p className="text-slate-600">Section 1, Lesson 3 of 45</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    onClick={() => onNavigate('code-editor')}
                  >
                    <Code className="w-4 h-4 mr-2" />
                    Open Code Editor
                  </Button>
                  <Button 
                    onClick={() => onNavigate('quiz')}
                  >
                    Take Quiz
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-6">
                  <Card className="p-6">
                    <h3 className="text-xl mb-4">About this lesson</h3>
                    <div className="space-y-4 text-slate-700">
                      <p>
                        In this lesson, you'll write your very first JavaScript program! We'll start 
                        with the classic "Hello World" example and gradually build up to more complex 
                        programs.
                      </p>
                      <p>
                        You'll learn how to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Use console.log() to output messages</li>
                        <li>Create and run JavaScript files</li>
                        <li>Understand the basic structure of a JavaScript program</li>
                        <li>Debug simple errors in your code</li>
                      </ul>
                      <div className="bg-slate-50 p-4 rounded-lg mt-6">
                        <h4 className="mb-3">Code Example:</h4>
                        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                          <code>{`// Your first JavaScript program
console.log("Hello, World!");

// Variables
let name = "Sarah";
let age = 25;

console.log("My name is " + name);
console.log("I am " + age + " years old");`}</code>
                        </pre>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="resources" className="mt-6">
                  <Card className="p-6">
                    <h3 className="text-xl mb-4">Downloadable Resources</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Lesson3_CodeSamples.zip', size: '2.4 MB', type: 'ZIP' },
                        { name: 'JavaScript_CheatSheet.pdf', size: '1.2 MB', type: 'PDF' },
                        { name: 'Exercise_Solutions.js', size: '15 KB', type: 'JS' }
                      ].map((resource, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div>
                              <div className="text-sm">{resource.name}</div>
                              <div className="text-xs text-slate-600">{resource.type} • {resource.size}</div>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="notes" className="mt-6">
                  <Card className="p-6">
                    <h3 className="text-xl mb-4">My Notes</h3>
                    <textarea 
                      className="w-full h-64 p-4 border border-slate-200 rounded-lg resize-none"
                      placeholder="Take notes while watching the lesson..."
                    />
                    <div className="flex justify-end mt-3">
                      <Button>Save Notes</Button>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Course Navigation Sidebar */}
        <div className="w-96 bg-white border-l border-slate-200 overflow-auto">
          <div className="p-4 border-b border-slate-200 bg-slate-50">
            <h3 className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Course Content
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              8 of 45 lessons completed
            </p>
            <div className="mt-3 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full w-1/5 bg-indigo-600 rounded-full"></div>
            </div>
          </div>

          <div className="p-4">
            {curriculum.map((section, idx) => (
              <div key={idx} className="mb-2">
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full p-3 flex items-center justify-between hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 text-left">
                    {expandedSections.includes(idx) ? (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="text-sm mb-1">{section.section}</div>
                      <div className="text-xs text-slate-600">
                        {section.completed}/{section.total} lessons
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-indigo-600">
                    {Math.round((section.completed / section.total) * 100)}%
                  </div>
                </button>

                {expandedSections.includes(idx) && (
                  <div className="ml-7 mt-1 space-y-1">
                    {section.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        className={`w-full p-3 flex items-center justify-between rounded-lg transition-colors ${
                          lesson.current 
                            ? 'bg-indigo-50 border border-indigo-200' 
                            : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1 text-left">
                          {lesson.completed ? (
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-300 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <div className={`text-sm ${lesson.current ? 'text-indigo-600' : ''}`}>
                              {lesson.title}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-600">{lesson.duration}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}