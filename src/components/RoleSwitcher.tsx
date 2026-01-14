import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, GraduationCap, User, ChevronDown, ChevronUp } from 'lucide-react';

export type UserRole = 'admin' | 'lecturer' | 'student';

interface RoleSwitcherProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export function RoleSwitcher({ currentRole, onRoleChange }: RoleSwitcherProps) {
  const roles = [
    {
      id: 'student' as UserRole,
      name: 'Student',
      icon: User,
      color: 'bg-blue-100 text-blue-700 border-blue-300',
      activeColor: 'bg-blue-600 text-white border-blue-600'
    },
    {
      id: 'lecturer' as UserRole,
      name: 'Lecturer',
      icon: GraduationCap,
      color: 'bg-green-100 text-green-700 border-green-300',
      activeColor: 'bg-green-600 text-white border-green-600'
    },
    {
      id: 'admin' as UserRole,
      name: 'Admin',
      icon: Shield,
      color: 'bg-purple-100 text-purple-700 border-purple-300',
      activeColor: 'bg-purple-600 text-white border-purple-600'
    }
  ];

  const [isOpen, setIsOpen] = useState(false);

  const currentRoleData = roles.find(r => r.id === currentRole);
  const CurrentIcon = currentRoleData?.icon || User;

  return (
    <div className="fixed top-20 right-6 z-50">
      <Card className="shadow-2xl">
        {/* Header - Always visible */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg border-2 ${currentRoleData?.activeColor}`}>
              <CurrentIcon className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h3 className="text-sm text-slate-600">Current Role</h3>
              <div className="text-sm">{currentRoleData?.name}</div>
            </div>
          </div>
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-slate-600" />
          ) : (
            <ChevronUp className="w-5 h-5 text-slate-600" />
          )}
        </button>

        {/* Content - Collapsible */}
        {isOpen && (
          <div className="px-4 pb-4">
            <div className="space-y-2">
              {roles.map((role) => {
                const Icon = role.icon;
                const isActive = currentRole === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => {
                      onRoleChange(role.id);
                      setIsOpen(false); // Auto close after selecting
                    }}
                    className={`w-full p-3 rounded-lg border-2 transition-all ${
                      isActive ? role.activeColor : `${role.color} hover:shadow-md`
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <div className="flex-1 text-left">
                        <div className="text-sm">{role.name}</div>
                      </div>
                      {isActive && (
                        <Badge variant="secondary" className="text-xs bg-white/30 text-current border-0">
                          Active
                        </Badge>
                      )}
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