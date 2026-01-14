import React from 'react';
import { Code2, Search, BookOpen, LayoutDashboard, User, Plus, Settings, Users, BarChart3, DollarSign, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { UserRole } from './RoleSwitcher';

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

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  userRole?: UserRole;
}

export function Navigation({ currentPage, onNavigate, userRole = 'student' }: NavigationProps) {
  // Role-specific navigation items
  const getNavigationItems = () => {
    switch (userRole) {
      case 'student':
        return [
          { label: 'Courses', page: 'courses' as Page },
          { label: 'My Learning', page: 'dashboard' as Page },
          { label: 'Exercises', page: 'code-editor' as Page },
          { label: 'Progress', page: 'dashboard' as Page }
        ];
      case 'lecturer':
        return [
          { label: 'Dashboard', page: 'dashboard' as Page },
          { label: 'My Courses', page: 'courses' as Page },
          { label: 'Students', page: 'dashboard' as Page },
          { label: 'Analytics', page: 'dashboard' as Page },
          { label: 'Earnings', page: 'payment' as Page }
        ];
      case 'admin':
        return [
          { label: 'Dashboard', page: 'dashboard' as Page },
          { label: 'Users', page: 'dashboard' as Page },
          { label: 'Courses', page: 'courses' as Page },
          { label: 'Payments', page: 'payment' as Page },
          { label: 'Security', page: 'security' as Page }
        ];
    }
  };

  // Role-specific primary CTA
  const getPrimaryCTA = () => {
    switch (userRole) {
      case 'student':
        return {
          label: 'Browse Courses',
          icon: BookOpen,
          page: 'courses' as Page,
          color: 'bg-indigo-600 hover:bg-indigo-700'
        };
      case 'lecturer':
        return {
          label: 'Create Course',
          icon: Plus,
          page: 'courses' as Page,
          color: 'bg-green-600 hover:bg-green-700'
        };
      case 'admin':
        return {
          label: 'System Settings',
          icon: Settings,
          page: 'security' as Page,
          color: 'bg-purple-600 hover:bg-purple-700'
        };
    }
  };

  // Role badge configuration
  const getRoleBadge = () => {
    switch (userRole) {
      case 'student':
        return { label: 'Student', color: 'bg-blue-100 text-blue-700 border-blue-200' };
      case 'lecturer':
        return { label: 'Lecturer', color: 'bg-green-100 text-green-700 border-green-200' };
      case 'admin':
        return { label: 'Admin', color: 'bg-purple-100 text-purple-700 border-purple-200' };
    }
  };

  const navigationItems = getNavigationItems();
  const primaryCTA = getPrimaryCTA();
  const roleBadge = getRoleBadge();
  const CTAIcon = primaryCTA.icon;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-slate-900">UniCode.com</span>
          </button>

          {/* Main Navigation */}
          <div className="flex items-center gap-6">
            {navigationItems.map((item, idx) => (
              <button 
                key={idx}
                onClick={() => onNavigate(item.page)}
                className={`text-sm transition-colors ${
                  currentPage === item.page 
                    ? 'text-indigo-600 font-medium' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Role Badge */}
            <Badge className={`${roleBadge.color} border`}>
              {roleBadge.label}
            </Badge>

            {/* Primary CTA */}
            <Button
              size="sm"
              className={primaryCTA.color}
              onClick={() => onNavigate(primaryCTA.page)}
            >
              <CTAIcon className="w-4 h-4 mr-2" />
              {primaryCTA.label}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('profile')}
            >
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}