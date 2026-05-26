'use client';

import { useState } from 'react';

export default function PayPalIntegration() {
  const [paymentData, setPaymentData] = useState({
    planName: 'Premium',
    amount: 9.99,
    email: '',
  });

  const handlePayPalPayment = async () => {
    try {
      // PayPal integration point
      // This would be replaced with actual PayPal SDK integration
      const response = await fetch('/api/payment/paypal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: paymentData.amount,
          planName: paymentData.planName,
          email: paymentData.email,
        }),
      });

      const data = await response.json();
      if (data.approvalUrl) {
        window.location.href = data.approvalUrl;
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment processing failed. Please try again.');
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2 gradient-text">Pricing & Payment</h1>
        <p className="text-slate-400 mb-12">Choose your plan - All with secure PayPal payment</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Free Plan */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-slate-400 mb-4">Forever free</p>
            <div className="text-4xl font-bold mb-6">$0<span className="text-lg">/month</span></div>
            <ul className="space-y-3 text-slate-300 mb-8">
              <li>✓ All basic PDF tools</li>
              <li>✓ Resume builder</li>
              <li>✓ Document translation</li>
              <li>✓ OCR scanning</li>
              <li>✗ Advanced features</li>
            </ul>
            <button className="w-full bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-all font-semibold">
              Get Started
            </button>
          </div>

          {/* Premium Plan (Highlighted) */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-400 rounded-xl p-8 relative">
            <div className="absolute top-4 right-4 bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="text-slate-400 mb-4">Best for professionals</p>
            <div className="text-4xl font-bold mb-6">$9.99<span className="text-lg">/month</span></div>
            <ul className="space-y-3 text-slate-300 mb-8">
              <li>✓ Everything in Free</li>
              <li>✓ Advanced AI tools</li>
              <li>✓ Priority support</li>
              <li>✓ Batch processing</li>
              <li>✓ Unlimited storage</li>
            </ul>
            <button
              onClick={() => {
                setPaymentData({ ...paymentData, planName: 'Premium', amount: 9.99 });
                handlePayPalPayment();
              }}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-semibold"
            >
              Pay with PayPal
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-slate-400 mb-4">For teams</p>
            <div className="text-4xl font-bold mb-6">$29.99<span className="text-lg">/month</span></div>
            <ul className="space-y-3 text-slate-300 mb-8">
              <li>✓ Everything in Premium</li>
              <li>✓ Team collaboration</li>
              <li>✓ API access</li>
              <li>✓ Custom integrations</li>
              <li>✓ Dedicated support</li>
            </ul>
            <button
              onClick={() => {
                setPaymentData({ ...paymentData, planName: 'Enterprise', amount: 29.99 });
                handlePayPalPayment();
              }}
              className="w-full border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400/10 transition-all font-semibold"
            >
              Pay with PayPal
            </button>
          </div>
        </div>

        <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              <strong>PayPal Account:</strong> mrhamduofficial@gmail.com
            </p>
            <p>
              <strong>Secure Payment:</strong> All payments are processed securely through PayPal
            </p>
            <p>
              <strong>Instant Access:</strong> Get access immediately after successful payment
            </p>
            <p>
              <strong>Money-back Guarantee:</strong> 30-day refund guarantee if you're not satisfied
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
