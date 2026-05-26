import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'DocuCraft Pro - All-in-One Document Management Platform',
    template: '%s | DocuCraft Pro',
  },
  description: 'DocuCraft Pro: Ultimate document management with AI-powered tools, PDF utilities, resume builder, and more. Free, fast, and secure.',
  keywords: ['PDF tools', 'document management', 'AI resume builder', 'PDF converter', 'document translation', 'OCR'],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docucraft-pro.vercel.app',
    siteName: 'DocuCraft Pro',
    title: 'DocuCraft Pro - All-in-One Document Management',
    description: 'Free, ultra-fast document management platform with AI-powered features',
    images: [
      {
        url: 'https://docucraft-pro.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocuCraft Pro',
    description: 'All-in-One Document Management Platform',
    creator: '@DocuCraftPro',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'DocuCraft Pro Team' }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
