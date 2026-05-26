'use client';

import type { Metadata } from 'next';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2 gradient-text">Contact Us</h1>
        <p className="text-slate-400 mb-12">We'd love to hear from you. Send us a message!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-cyan-400">Email</h3>
              <p className="text-slate-300">
                <a href="mailto:mrhamduofficial@gmail.com" className="hover:text-cyan-300 transition">
                  mrhamduofficial@gmail.com
                </a>
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Quick Links</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="/privacy" className="hover:text-cyan-400 transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-cyan-400 transition">Terms of Service</a></li>
                <li><a href="/about" className="hover:text-cyan-400 transition">About Us</a></li>
                <li><a href="/pricing" className="hover:text-cyan-400 transition">Pricing</a></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
                  Twitter
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
                  Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
