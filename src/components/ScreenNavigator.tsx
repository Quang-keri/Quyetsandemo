import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Home,
  BookOpen,
  FileText,
  Play,
  Code,
  CheckSquare,
  LayoutDashboard,
  CreditCard,
  User,
  Shield,
  ChevronDown,
  ChevronUp
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

interface ScreenNavigatorProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function ScreenNavigator({ currentPage, onNavigate }: ScreenNavigatorProps) {
  const screens = [
    { 
      id: 'home' as Page, 
      name: 'Homepage', 
      icon: Home,
      description: 'Featured courses & learning paths',
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      id: 'courses' as Page, 
      name: 'Course Listing', 
      icon: BookOpen,
      description: 'Browse all courses with filters',
      color: 'bg-green-100 text-green-600'
    },
    { 
      id: 'course-detail' as Page, 
      name: 'Course Detail', 
      icon: FileText,
      description: 'Course info & curriculum',
      color: 'bg-purple-100 text-purple-600'
    },
    { 
      id: 'lesson' as Page, 
      name: 'Lesson Viewer', 
      icon: Play,
      description: 'Video player & lesson content',
      color: 'bg-pink-100 text-pink-600'
    },
    { 
      id: 'code-editor' as Page, 
      name: 'Code Editor', 
      icon: Code,
      description: 'Write and run code',
      color: 'bg-yellow-100 text-yellow-700'
    },
    { 
      id: 'quiz' as Page, 
      name: 'Quiz', 
      icon: CheckSquare,
      description: 'Test your knowledge',
      color: 'bg-red-100 text-red-600'
    },
    { 
      id: 'dashboard' as Page, 
      name: 'Dashboard', 
      icon: LayoutDashboard,
      description: 'Learning progress & stats',
      color: 'bg-indigo-100 text-indigo-600'
    },
    { 
      id: 'payment' as Page, 
      name: 'Payment', 
      icon: CreditCard,
      description: 'Course checkout',
      color: 'bg-teal-100 text-teal-600'
    },
    { 
      id: 'profile' as Page, 
      name: 'Profile', 
      icon: User,
      description: 'Account settings',
      color: 'bg-orange-100 text-orange-600'
    },
    { 
      id: 'security' as Page, 
      name: 'Security', 
      icon: Shield,
      description: 'Device management & 2FA',
      color: 'bg-emerald-100 text-emerald-600'
    }
  ];

  const [isOpen, setIsOpen] = useState(false);

  const currentScreen = screens.find(s => s.id === currentPage);
  const CurrentIcon = currentScreen?.icon || Home;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="shadow-2xl">
        {/* Header - Always visible */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${currentScreen?.color}`}>
              <CurrentIcon className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h3 className="text-sm">Screen Navigator</h3>
              <div className="text-xs text-slate-600">{currentScreen?.name}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {screens.findIndex(s => s.id === currentPage) + 1} of {screens.length}
            </Badge>
            {isOpen ? (
              <ChevronDown className="w-5 h-5 text-slate-600" />
            ) : (
              <ChevronUp className="w-5 h-5 text-slate-600" />
            )}
          </div>
        </button>

        {/* Content - Collapsible */}
        {isOpen && (
          <div className="px-4 pb-4">
            <div className="space-y-2 max-h-96 overflow-auto max-w-sm">
              {screens.map((screen) => {
                const Icon = screen.icon;
                return (
                  <button
                    key={screen.id}
                    onClick={() => onNavigate(screen.id)}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      currentPage === screen.id
                        ? 'bg-indigo-50 border-2 border-indigo-600'
                        : 'border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${screen.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm truncate">{screen.name}</div>
                        <div className="text-xs text-slate-600 truncate">{screen.description}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}