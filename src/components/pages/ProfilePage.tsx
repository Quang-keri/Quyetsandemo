import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Camera,
  Bell,
  Globe,
  Shield,
  CreditCard
} from 'lucide-react';
import { Switch } from '../ui/switch';

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

interface ProfilePageProps {
  onNavigate: (page: Page) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Account Settings</h1>
          <p className="text-slate-600">Manage your profile and preferences</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="col-span-1">
            <Card className="p-6">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 rounded-full bg-indigo-200 mx-auto flex items-center justify-center text-4xl">
                    SJ
                  </div>
                  <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-xl mb-1">Sarah Johnson</h3>
                <p className="text-sm text-slate-600 mb-4">sarah.johnson@email.com</p>
                <Badge className="bg-indigo-100 text-indigo-700">Pro Member</Badge>
              </div>

              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Member since</span>
                  <span>Jan 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Courses completed</span>
                  <span>5</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Learning hours</span>
                  <span>142</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Certificates earned</span>
                  <span>5</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onNavigate('security')}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Security Settings
                </Button>
              </div>
            </Card>
          </div>

          {/* Settings Tabs */}
          <div className="col-span-2">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="notifications">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="preferences">
                  <Globe className="w-4 h-4 mr-2" />
                  Preferences
                </TabsTrigger>
                <TabsTrigger value="billing">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Billing
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl">Personal Information</h3>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="mb-2 block">First Name</Label>
                        <Input id="firstName" defaultValue="Sarah" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="mb-2 block">Last Name</Label>
                        <Input id="lastName" defaultValue="Johnson" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="mb-2 block">Email Address</Label>
                      <div className="relative">
                        <Input 
                          id="email" 
                          type="email" 
                          defaultValue="sarah.johnson@email.com"
                          className="pl-10"
                        />
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="mb-2 block">Phone Number</Label>
                      <div className="relative">
                        <Input 
                          id="phone" 
                          type="tel" 
                          defaultValue="+1 (555) 123-4567"
                          className="pl-10"
                        />
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="bio" className="mb-2 block">Bio</Label>
                      <textarea 
                        id="bio"
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 min-h-24 resize-none"
                        defaultValue="Passionate about learning web development and data science. Always looking to improve my skills!"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location" className="mb-2 block">Location</Label>
                        <div className="relative">
                          <Input 
                            id="location" 
                            defaultValue="San Francisco, CA"
                            className="pl-10"
                          />
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="birthday" className="mb-2 block">Birthday</Label>
                        <div className="relative">
                          <Input 
                            id="birthday" 
                            type="date" 
                            defaultValue="1995-03-15"
                            className="pl-10"
                          />
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-xl mb-6">Notification Preferences</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-4">Email Notifications</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm mb-1">Course Updates</div>
                            <div className="text-xs text-slate-600">
                              Notifications about new lessons and content
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm mb-1">Learning Reminders</div>
                            <div className="text-xs text-slate-600">
                              Daily reminders to continue learning
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm mb-1">Achievements</div>
                            <div className="text-xs text-slate-600">
                              When you earn badges and complete courses
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm mb-1">Promotions</div>
                            <div className="text-xs text-slate-600">
                              Special offers and discounts
                            </div>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <h4 className="mb-4">Push Notifications</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm mb-1">Mobile Notifications</div>
                            <div className="text-xs text-slate-600">
                              Receive push notifications on your mobile device
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm mb-1">Desktop Notifications</div>
                            <div className="text-xs text-slate-600">
                              Receive notifications on your desktop
                            </div>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Preferences</Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-xl mb-6">Learning Preferences</h3>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="language" className="mb-2 block">Language</Label>
                      <select 
                        id="language"
                        className="w-full border border-slate-200 rounded-lg px-3 py-2"
                      >
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Chinese</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="timezone" className="mb-2 block">Timezone</Label>
                      <select 
                        id="timezone"
                        className="w-full border border-slate-200 rounded-lg px-3 py-2"
                      >
                        <option>Pacific Time (PT)</option>
                        <option>Mountain Time (MT)</option>
                        <option>Central Time (CT)</option>
                        <option>Eastern Time (ET)</option>
                      </select>
                    </div>

                    <div>
                      <Label className="mb-3 block">Video Quality</Label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="radio" id="auto" name="quality" defaultChecked className="mr-3" />
                          <label htmlFor="auto" className="text-sm">Auto (Recommended)</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="1080p" name="quality" className="mr-3" />
                          <label htmlFor="1080p" className="text-sm">1080p</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="720p" name="quality" className="mr-3" />
                          <label htmlFor="720p" className="text-sm">720p</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="480p" name="quality" className="mr-3" />
                          <label htmlFor="480p" className="text-sm">480p</label>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-sm mb-1">Autoplay Next Lesson</div>
                          <div className="text-xs text-slate-600">
                            Automatically start the next lesson when one ends
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm mb-1">Subtitles</div>
                          <div className="text-xs text-slate-600">
                            Show subtitles by default
                          </div>
                        </div>
                        <Switch />
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Preferences</Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="billing" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-xl mb-6">Billing & Subscription</h3>

                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm opacity-90 mb-1">Current Plan</div>
                        <div className="text-2xl">Pro Annual</div>
                      </div>
                      <Badge className="bg-white text-indigo-600">Active</Badge>
                    </div>
                    <div className="text-sm opacity-90">
                      Renews on March 15, 2026 • $299.99/year
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="text-sm">Payment Methods</h4>
                    <Card className="p-4 border-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs">
                            VISA
                          </div>
                          <div>
                            <div className="text-sm">•••• •••• •••• 4242</div>
                            <div className="text-xs text-slate-600">Expires 12/2026</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Remove</Button>
                        </div>
                      </div>
                    </Card>
                    <Button variant="outline" className="w-full">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Add Payment Method
                    </Button>
                  </div>

                  <div className="pt-6 border-t">
                    <h4 className="text-sm mb-4">Billing History</h4>
                    <div className="space-y-3">
                      {[
                        { date: 'Jan 15, 2026', amount: '$89.99', status: 'Paid' },
                        { date: 'Dec 20, 2025', amount: '$89.99', status: 'Paid' },
                        { date: 'Nov 18, 2025', amount: '$89.99', status: 'Paid' }
                      ].map((invoice, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="text-sm">{invoice.date}</div>
                            <div className="text-sm text-slate-600">{invoice.amount}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              {invoice.status}
                            </Badge>
                            <Button variant="ghost" size="sm">Download</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-6 mt-6 border-t">
                    <Button variant="outline" className="flex-1">
                      Cancel Subscription
                    </Button>
                    <Button className="flex-1">Upgrade Plan</Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
