import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { 
  CreditCard,
  Lock,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Award,
  FileText,
  Infinity
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

interface PaymentPageProps {
  onNavigate: (page: Page) => void;
}

export function PaymentPage({ onNavigate }: PaymentPageProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => onNavigate('course-detail')}
            className="text-indigo-600 hover:text-indigo-700 mb-4"
          >
            ← Back to Course
          </button>
          <h1 className="text-3xl mb-2">Complete Your Purchase</h1>
          <p className="text-slate-600">Secure checkout powered by Stripe</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="col-span-2">
            <Card className="p-8 mb-6">
              <h2 className="text-2xl mb-6">Payment Method</h2>

              {/* Payment Method Selection */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border-2 rounded-lg flex items-center justify-center gap-3 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Credit/Debit Card</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-4 border-2 rounded-lg flex items-center justify-center gap-3 transition-all ${
                    paymentMethod === 'paypal'
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-2xl">💳</div>
                  <span>PayPal</span>
                </button>
              </div>

              {paymentMethod === 'card' ? (
                <div className="space-y-6">
                  {/* Card Number */}
                  <div>
                    <Label htmlFor="cardNumber" className="mb-2 block">Card Number</Label>
                    <div className="relative">
                      <Input 
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="pl-10"
                      />
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    </div>
                  </div>

                  {/* Cardholder Name */}
                  <div>
                    <Label htmlFor="cardName" className="mb-2 block">Cardholder Name</Label>
                    <Input 
                      id="cardName"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Expiry and CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry" className="mb-2 block">Expiry Date</Label>
                      <Input 
                        id="expiry"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="mb-2 block">CVV</Label>
                      <Input 
                        id="cvv"
                        placeholder="123"
                        type="password"
                        maxLength={3}
                      />
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div className="pt-4 border-t">
                    <h3 className="mb-4">Billing Address</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="country" className="mb-2 block">Country</Label>
                        <select 
                          id="country"
                          className="w-full border border-slate-200 rounded-lg px-3 py-2"
                        >
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Canada</option>
                          <option>Australia</option>
                          <option>Germany</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="zipCode" className="mb-2 block">ZIP/Postal Code</Label>
                          <Input 
                            id="zipCode"
                            placeholder="12345"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state" className="mb-2 block">State/Province</Label>
                          <Input 
                            id="state"
                            placeholder="California"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center">
                  <div className="text-6xl mb-4">💳</div>
                  <h3 className="text-xl mb-2">Pay with PayPal</h3>
                  <p className="text-slate-600 mb-6">
                    You'll be redirected to PayPal to complete your purchase
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Continue to PayPal
                  </Button>
                </div>
              )}
            </Card>

            {paymentMethod === 'card' && (
              <Card className="p-6 bg-slate-50 border-slate-200">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-slate-600 mt-0.5" />
                  <div className="flex-1 text-sm text-slate-700">
                    <p className="mb-2">
                      Your payment information is encrypted and secure. We use industry-standard 
                      SSL encryption to protect your data.
                    </p>
                    <div className="flex gap-3 mt-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="Amex" className="h-6" />
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="text-xl mb-4">Order Summary</h3>

              {/* Course Info */}
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=200&fit=crop"
                  alt="Course"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h4 className="mb-2">Complete JavaScript Masterclass 2026</h4>
                <p className="text-sm text-slate-600">by Sarah Johnson</p>
              </div>

              {/* Course Includes */}
              <div className="mb-6 pb-6 border-b">
                <div className="text-sm mb-3">This course includes:</div>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>42 hours of video</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>234 resources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Infinity className="w-4 h-4" />
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Certificate</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-3 mb-6 pb-6 border-b">
                <div className="flex items-center justify-between text-sm">
                  <span>Original Price</span>
                  <span className="line-through text-slate-500">$149.99</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    Discount
                    <Badge variant="secondary" className="text-xs">40% OFF</Badge>
                  </span>
                  <span className="text-green-600">-$60.00</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg">Total</span>
                <span className="text-3xl">$89.99</span>
              </div>

              {/* Purchase Button */}
              {paymentMethod === 'card' && (
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 mb-3">
                  <Lock className="w-4 h-4 mr-2" />
                  Complete Purchase
                </Button>
              )}

              <p className="text-xs text-center text-slate-600 mb-4">
                30-Day Money-Back Guarantee
              </p>

              {/* Security Badges */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t">
                <div className="flex items-center gap-1 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-600">
                  <Lock className="w-4 h-4" />
                  <span>SSL Encrypted</span>
                </div>
              </div>
            </Card>

            {/* Money-Back Guarantee */}
            <Card className="p-6 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">30-Day Money-Back Guarantee</h4>
                  <p className="text-sm text-slate-600">
                    Not satisfied? Get a full refund within 30 days, no questions asked.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
