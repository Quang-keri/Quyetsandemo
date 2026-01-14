import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { 
  Shield,
  Smartphone,
  Monitor,
  Tablet,
  MapPin,
  Clock,
  LogOut,
  Lock,
  Key,
  AlertTriangle,
  CheckCircle2
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

interface SecurityPageProps {
  onNavigate: (page: Page) => void;
}

export function SecurityPage({ onNavigate }: SecurityPageProps) {
  const devices = [
    {
      id: 1,
      name: 'MacBook Pro',
      type: 'Desktop',
      icon: Monitor,
      location: 'San Francisco, CA, USA',
      lastActive: '2 minutes ago',
      browser: 'Chrome 120',
      isCurrent: true
    },
    {
      id: 2,
      name: 'iPhone 15 Pro',
      type: 'Mobile',
      icon: Smartphone,
      location: 'San Francisco, CA, USA',
      lastActive: '5 hours ago',
      browser: 'Safari Mobile',
      isCurrent: false
    },
    {
      id: 3,
      name: 'iPad Air',
      type: 'Tablet',
      icon: Tablet,
      location: 'Oakland, CA, USA',
      lastActive: '2 days ago',
      browser: 'Safari',
      isCurrent: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => onNavigate('profile')}
            className="text-indigo-600 hover:text-indigo-700 mb-4"
          >
            ← Back to Profile
          </button>
          <h1 className="text-3xl mb-2">Security Settings</h1>
          <p className="text-slate-600">Manage your account security and active devices</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            {/* Password */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Lock className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-xl">Change Password</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword" className="mb-2 block">Current Password</Label>
                  <Input 
                    id="currentPassword" 
                    type="password"
                    placeholder="Enter your current password"
                  />
                </div>
                <div>
                  <Label htmlFor="newPassword" className="mb-2 block">New Password</Label>
                  <Input 
                    id="newPassword" 
                    type="password"
                    placeholder="Enter your new password"
                  />
                  <p className="text-xs text-slate-600 mt-1">
                    Password must be at least 8 characters with uppercase, lowercase, and numbers
                  </p>
                </div>
                <div>
                  <Label htmlFor="confirmPassword" className="mb-2 block">Confirm New Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    placeholder="Confirm your new password"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Update Password</Button>
                </div>
              </div>
            </Card>

            {/* Active Devices */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Monitor className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl">Active Devices</h3>
                    <p className="text-sm text-slate-600">
                      {devices.length} of 3 devices • Maximum 3 devices allowed
                    </p>
                  </div>
                </div>
                <Badge 
                  variant={devices.length === 3 ? "destructive" : "secondary"}
                >
                  {devices.length}/3
                </Badge>
              </div>

              {devices.length === 3 && (
                <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 text-sm">
                    <div className="text-orange-900 mb-1">Device Limit Reached</div>
                    <div className="text-orange-700">
                      You've reached the maximum number of active devices. Please log out from 
                      one device before signing in on a new one.
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {devices.map((device) => {
                  const DeviceIcon = device.icon;
                  return (
                    <Card 
                      key={device.id} 
                      className={`p-5 ${device.isCurrent ? 'border-2 border-indigo-200 bg-indigo-50/50' : ''}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`p-3 rounded-lg ${
                            device.isCurrent ? 'bg-indigo-100' : 'bg-slate-100'
                          }`}>
                            <DeviceIcon className={`w-6 h-6 ${
                              device.isCurrent ? 'text-indigo-600' : 'text-slate-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4>{device.name}</h4>
                              {device.isCurrent && (
                                <Badge className="bg-green-100 text-green-700 border-green-200">
                                  Current Device
                                </Badge>
                              )}
                            </div>
                            <div className="space-y-1 text-sm text-slate-600">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{device.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>Last active: {device.lastActive}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Monitor className="w-4 h-4" />
                                <span>{device.browser}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {!device.isCurrent && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <LogOut className="w-4 h-4 mr-2" />
                            Log Out
                          </Button>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-slate-600 mt-0.5" />
                  <div className="flex-1 text-sm text-slate-700">
                    <p>
                      For your security, you can only be logged in on 3 devices simultaneously. 
                      If you see a device you don't recognize, log out immediately and change 
                      your password.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Two-Factor Authentication */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Key className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-1">Two-Factor Authentication</h3>
                  <p className="text-sm text-slate-600">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Enabled
                </Badge>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Smartphone className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-sm mb-1">Authenticator App</div>
                      <div className="text-xs text-slate-600">
                        Using Google Authenticator (•••• ••79)
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Change</Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    View Backup Codes
                  </Button>
                  <Button variant="outline" className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50">
                    Disable 2FA
                  </Button>
                </div>
              </div>
            </Card>

            {/* Login Activity */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl">Recent Login Activity</h3>
              </div>

              <div className="space-y-3">
                {[
                  { 
                    location: 'San Francisco, CA, USA', 
                    device: 'MacBook Pro • Chrome',
                    time: '2 minutes ago',
                    success: true 
                  },
                  { 
                    location: 'San Francisco, CA, USA', 
                    device: 'iPhone 15 Pro • Safari',
                    time: '5 hours ago',
                    success: true 
                  },
                  { 
                    location: 'Oakland, CA, USA', 
                    device: 'iPad Air • Safari',
                    time: '2 days ago',
                    success: true 
                  },
                  { 
                    location: 'Los Angeles, CA, USA', 
                    device: 'Unknown Device • Chrome',
                    time: '3 days ago',
                    success: false 
                  }
                ].map((activity, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-lg border ${
                      activity.success 
                        ? 'bg-white border-slate-200' 
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        {activity.success ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                        )}
                        <div>
                          <div className="text-sm mb-1">
                            {activity.success ? 'Successful login' : 'Failed login attempt'}
                          </div>
                          <div className="text-xs text-slate-600 space-y-0.5">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-3 h-3" />
                              {activity.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Monitor className="w-3 h-3" />
                              {activity.device}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-3 h-3" />
                              {activity.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="col-span-1 space-y-6">
            {/* Security Score */}
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto relative mb-4">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-slate-200"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 56}
                      strokeDashoffset={2 * Math.PI * 56 * (1 - 0.85)}
                      className="text-green-600"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl">85%</div>
                      <div className="text-xs text-slate-600">Secure</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg mb-2">Security Score</h3>
                <p className="text-sm text-slate-600">
                  Your account security is strong
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Strong password</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Two-factor enabled</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Email verified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                  <span>Add recovery email</span>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <LogOut className="w-4 h-4 mr-2" />
                  Log Out All Devices
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Key className="w-4 h-4 mr-2" />
                  Reset Password
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Download Security Report
                </Button>
              </div>
            </Card>

            {/* Security Tips */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="text-sm mb-2 text-blue-900">Security Tips</h4>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li>• Use a unique password</li>
                    <li>• Enable two-factor auth</li>
                    <li>• Review active devices regularly</li>
                    <li>• Never share your password</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
