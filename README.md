# DocuCraft Pro 🚀

**All-in-One Document Management Platform with AI-Powered Features**

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

### 📄 PDF Tools (All Free)
- **Merge PDFs** - Combine multiple PDF files into one
- **Split PDF** - Extract specific pages from PDFs
- **Compress PDF** - Reduce file size without quality loss
- **Convert PDF** - Convert to Word, Excel, JPG, PNG, and more
- **Edit PDF** - Add text, shapes, and annotations
- **Protect PDF** - Add password protection
- **View PDF** - Preview documents online
- **Watermark** - Add watermarks to your PDFs

### 🤖 AI-Powered Tools
- **Resume Builder** - Create professional resumes with AI assistance
- **Document Generator** - Generate documents powered by AI
- **Translator** - Translate documents to 100+ languages
- **Summarizer** - AI-powered document summarization
- **Content Improver** - Enhance and improve your text
- **Grammar Checker** - Check and fix grammar and spelling
- **SEO Optimizer** - Optimize content for search engines
- **Idea Generator** - Generate creative ideas and content

### 🔐 Advanced Features
- **OCR Scanning** - Extract text from images and scanned documents
- **Digital Signatures** - Add digital signatures to documents
- **Compliance Monitoring** - Advanced compliance tracking
- **Batch Processing** - Handle multiple files at once
- **Collaborative Editing** - Work together on documents
- **Document Translation** - Multi-language support

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hamdan276305/DOCUCRAFT-PRO.git
cd DOCUCRAFT-PRO

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your app.

## 📋 Environment Variables

Create a `.env.local` file with the following variables:

```env
# PayPal Configuration
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_secret

# API Keys
OPENAI_API_KEY=your_openai_api_key
HUGGINGFACE_API_KEY=your_huggingface_api_key

# Database
MONGODB_URI=your_mongodb_uri

# JWT
JWT_SECRET=your_jwt_secret

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with SEO
│   ├── tools/             # Tool pages
│   │   ├── pdf/           # PDF tools
│   │   └── ai/            # AI tools
│   ├── pricing/           # Pricing page with PayPal
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   └── api/               # API routes
│       ├── payment/       # Payment processing
│       └── tools/         # Tool APIs
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/                   # Utility functions
├── styles/               # Global styles
└── types/                # TypeScript types
```

## 💳 Payment Integration

DocuCraft Pro uses PayPal for secure payments. All plans are available:

- **Free Plan** - $0/month (forever)
- **Premium Plan** - $9.99/month
- **Enterprise Plan** - $29.99/month

PayPal Account: `mrhamduofficial@gmail.com`

## 🔒 Security Features

✅ End-to-end encryption  
✅ Secure file handling  
✅ Automatic file deletion after 24 hours  
✅ No file storage on servers  
✅ HTTPS only  
✅ Rate limiting  
✅ CORS protection  

## 📱 Responsive Design

- Mobile-first approach
- Fully responsive on all devices
- Touch-friendly interface
- Dark mode optimized

## 🎯 SEO Optimized

- Meta tags for all pages
- Structured data (JSON-LD)
- Open Graph support
- Twitter Card support
- XML sitemap
- Robots.txt

## ⚡ Performance

- Next.js optimizations
- Image optimization
- Code splitting
- Lazy loading
- CDN deployment on Vercel
- < 100ms response time

## 🧪 Testing

```bash
# Run tests
npm run test

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 📚 Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **PDF Processing**: pdf-lib, PDFKit, pdfparse
- **AI/ML**: OpenAI API, HuggingFace, Tesseract.js
- **Authentication**: JWT, bcrypt
- **Database**: MongoDB
- **Caching**: Redis
- **Payment**: PayPal Checkout SDK
- **Deployment**: Vercel
- **Email**: Nodemailer

## 📖 Documentation

- [API Documentation](./docs/API.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [FAQ](./docs/FAQ.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Support

For support, email us at mrhamduofficial@gmail.com or visit our [Contact Page](https://docucraft-pro.vercel.app/contact)

## 🌐 Links

- 🌍 [Website](https://docucraft-pro.vercel.app)
- 📧 [Email](mailto:mrhamduofficial@gmail.com)
- 💼 [LinkedIn](https://linkedin.com)
- 🐙 [GitHub](https://github.com/hamdan276305)

---

**Made with ❤️ by Hamdan - DocuCraft Pro Team**

Transform your documents. Empower your workflow. Join thousands of happy users! 🚀
