import React from 'react';
import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react';

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

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">UniCode.com</span>
            </div>
            <p className="text-sm text-slate-400">
              Learn to code with interactive courses and real-world projects.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white mb-4">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('courses')} className="hover:text-white transition-colors">Browse All</button></li>
              <li><a href="#" className="hover:text-white transition-colors">JavaScript</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Python</a></li>
              <li><a href="#" className="hover:text-white transition-colors">React</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Node.js</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('dashboard')} className="hover:text-white transition-colors">Learning Paths</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
          <p className="text-sm text-slate-400">
            © 2026 UniCode.com. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
