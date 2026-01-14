import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScreenNavigator } from './components/ScreenNavigator';
import { RoleSwitcher, UserRole } from './components/RoleSwitcher';
import { HomePage } from './components/pages/HomePage';
import { CoursesPage } from './components/pages/CoursesPage';
import { CourseDetailPage } from './components/pages/CourseDetailPage';
import { LessonPage } from './components/pages/LessonPage';
import { CodeEditorPage } from './components/pages/CodeEditorPage';
import { QuizPage } from './components/pages/QuizPage';
import { DashboardPage } from './components/pages/DashboardPage';
import { StudentDashboard } from './components/pages/StudentDashboard';
import { LecturerDashboard } from './components/pages/LecturerDashboard';
import { AdminDashboard } from './components/pages/AdminDashboard';
import { PaymentPage } from './components/pages/PaymentPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { SecurityPage } from './components/pages/SecurityPage';

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

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [userRole, setUserRole] = useState<UserRole>('student');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'courses':
        return <CoursesPage onNavigate={setCurrentPage} />;
      case 'course-detail':
        return <CourseDetailPage onNavigate={setCurrentPage} />;
      case 'lesson':
        return <LessonPage onNavigate={setCurrentPage} />;
      case 'code-editor':
        return <CodeEditorPage onNavigate={setCurrentPage} />;
      case 'quiz':
        return <QuizPage onNavigate={setCurrentPage} />;
      case 'dashboard':
        // Render role-specific dashboard
        if (userRole === 'student') {
          return <StudentDashboard onNavigate={setCurrentPage} />;
        } else if (userRole === 'lecturer') {
          return <LecturerDashboard onNavigate={setCurrentPage} />;
        } else if (userRole === 'admin') {
          return <AdminDashboard onNavigate={setCurrentPage} />;
        }
        return <DashboardPage onNavigate={setCurrentPage} />;
      case 'payment':
        return <PaymentPage onNavigate={setCurrentPage} />;
      case 'profile':
        return <ProfilePage onNavigate={setCurrentPage} />;
      case 'security':
        return <SecurityPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${
      userRole === 'lecturer' ? 'bg-slate-50' :
      userRole === 'admin' ? 'bg-slate-50' :
      'bg-slate-50'
    }`}>
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} userRole={userRole} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <ScreenNavigator currentPage={currentPage} onNavigate={setCurrentPage} />
      <RoleSwitcher currentRole={userRole} onRoleChange={setUserRole} />
    </div>
  );
}