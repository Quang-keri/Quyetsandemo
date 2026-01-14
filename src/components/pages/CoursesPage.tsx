import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { 
  Star, 
  Clock, 
  Users,
  Search,
  Filter,
  SlidersHorizontal
} from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

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

interface CoursesPageProps {
  onNavigate: (page: Page) => void;
}

export function CoursesPage({ onNavigate }: CoursesPageProps) {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Complete JavaScript Masterclass',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      reviews: 12450,
      students: 45230,
      hours: 42,
      level: 'Beginner',
      price: 89.99,
      language: 'JavaScript',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop',
      tags: ['JavaScript', 'Web Development', 'ES6+']
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Dr. Michael Chen',
      rating: 4.9,
      reviews: 8920,
      students: 38420,
      hours: 36,
      level: 'Intermediate',
      price: 99.99,
      language: 'Python',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
      tags: ['Python', 'Data Science', 'Machine Learning']
    },
    {
      id: 3,
      title: 'React & TypeScript: Build Modern Apps',
      instructor: 'Emma Wilson',
      rating: 4.7,
      reviews: 6540,
      students: 29150,
      hours: 28,
      level: 'Advanced',
      price: 109.99,
      language: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      tags: ['React', 'TypeScript', 'Frontend']
    },
    {
      id: 4,
      title: 'Java Programming Complete Guide',
      instructor: 'David Kumar',
      rating: 4.6,
      reviews: 5230,
      students: 22340,
      hours: 48,
      level: 'Beginner',
      price: 79.99,
      language: 'Java',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
      tags: ['Java', 'OOP', 'Backend']
    },
    {
      id: 5,
      title: 'Node.js & Express Masterclass',
      instructor: 'Alex Martinez',
      rating: 4.8,
      reviews: 7650,
      students: 31200,
      hours: 32,
      level: 'Intermediate',
      price: 94.99,
      language: 'Node.js',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop',
      tags: ['Node.js', 'Express', 'Backend']
    },
    {
      id: 6,
      title: 'C++ Programming from Scratch',
      instructor: 'Lisa Anderson',
      rating: 4.5,
      reviews: 4320,
      students: 18900,
      hours: 52,
      level: 'Beginner',
      price: 84.99,
      language: 'C++',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
      tags: ['C++', 'Systems Programming', 'Algorithms']
    },
    {
      id: 7,
      title: 'Advanced Python: Deep Dive',
      instructor: 'Dr. Rachel Green',
      rating: 4.9,
      reviews: 9100,
      students: 34560,
      hours: 40,
      level: 'Advanced',
      price: 119.99,
      language: 'Python',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
      tags: ['Python', 'Advanced', 'Best Practices']
    },
    {
      id: 8,
      title: 'Full Stack JavaScript Development',
      instructor: 'Tom Wilson',
      rating: 4.7,
      reviews: 8340,
      students: 28760,
      hours: 56,
      level: 'Intermediate',
      price: 129.99,
      language: 'JavaScript',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      tags: ['JavaScript', 'Full Stack', 'MERN']
    },
    {
      id: 9,
      title: 'React Native Mobile Development',
      instructor: 'Jessica Lee',
      rating: 4.6,
      reviews: 5670,
      students: 21450,
      hours: 38,
      level: 'Intermediate',
      price: 104.99,
      language: 'React',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      tags: ['React Native', 'Mobile', 'Cross-Platform']
    }
  ];

  const languages = ['JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  // Filter courses based on selected filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = searchQuery === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLanguage = selectedLanguages.length === 0 || 
      selectedLanguages.includes(course.language);
    
    const matchesLevel = selectedLevels.length === 0 || 
      selectedLevels.includes(course.level);
    
    return matchesSearch && matchesLanguage && matchesLevel;
  });

  const handleClearFilters = () => {
    setSelectedLanguages([]);
    setSelectedLevels([]);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl mb-2">All Courses</h1>
          <p className="text-slate-600">Explore our comprehensive library of programming courses</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </h3>
                <Button variant="ghost" size="sm" className="text-xs" onClick={handleClearFilters}>
                  Clear All
                </Button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <Label className="mb-2 block">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input 
                    placeholder="Search courses..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Language Filter */}
              <div className="mb-6">
                <Label className="mb-3 block">Programming Language</Label>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang} className="flex items-center">
                      <Checkbox 
                        id={lang}
                        checked={selectedLanguages.includes(lang)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedLanguages([...selectedLanguages, lang]);
                          } else {
                            setSelectedLanguages(selectedLanguages.filter(l => l !== lang));
                          }
                        }}
                      />
                      <label 
                        htmlFor={lang}
                        className="ml-2 text-sm text-slate-700 cursor-pointer"
                      >
                        {lang}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div className="mb-6">
                <Label className="mb-3 block">Skill Level</Label>
                <div className="space-y-3">
                  {levels.map((level) => (
                    <div key={level} className="flex items-center">
                      <Checkbox 
                        id={level}
                        checked={selectedLevels.includes(level)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedLevels([...selectedLevels, level]);
                          } else {
                            setSelectedLevels(selectedLevels.filter(l => l !== level));
                          }
                        }}
                      />
                      <label 
                        htmlFor={level}
                        className="ml-2 text-sm text-slate-700 cursor-pointer"
                      >
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <Label className="mb-3 block">Price Range</Label>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Checkbox id="free" />
                    <label htmlFor="free" className="ml-2 text-sm text-slate-700 cursor-pointer">
                      Free
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="paid" />
                    <label htmlFor="paid" className="ml-2 text-sm text-slate-700 cursor-pointer">
                      Paid
                    </label>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div>
                <Label className="mb-3 block">Minimum Rating</Label>
                <div className="space-y-3">
                  {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <Checkbox id={`rating-${rating}`} />
                      <label 
                        htmlFor={`rating-${rating}`}
                        className="ml-2 text-sm text-slate-700 cursor-pointer flex items-center gap-1"
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {rating} & up
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Courses Grid */}
          <div className="col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-600">
                Showing {filteredCourses.length} courses
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">Sort by:</span>
                <select className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white">
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card 
                  key={course.id} 
                  className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                  onClick={() => onNavigate('course-detail')}
                >
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 right-3 bg-white text-slate-900">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">by {course.instructor}</p>
                    <div className="flex items-center gap-1 text-sm mb-3">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-500">({course.reviews.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{(course.students / 1000).toFixed(1)}K</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{course.hours}h</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="text-xl text-indigo-600">${course.price}</span>
                      <Button size="sm">Enroll Now</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm" className="bg-indigo-600 text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">4</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}