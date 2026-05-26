import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - DocuCraft Pro',
  description: 'About DocuCraft Pro - All-in-one document management platform',
};

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text">About DocuCraft Pro</h1>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
            <p>
              DocuCraft Pro is dedicated to providing a free, fast, and secure platform for all your document management needs. We believe that powerful document processing tools should be accessible to everyone, regardless of their budget or technical expertise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">PDF Tools</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Merge, split, and compress PDFs</li>
                  <li>• Convert to Word, Excel, JPG, PNG</li>
                  <li>• Edit and protect documents</li>
                  <li>• Add watermarks and signatures</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">AI-Powered Features</h3>
                <ul className="space-y-2 text-sm">
                  <li>• AI Resume Builder</li>
                  <li>• Document Generator</li>
                  <li>• Document Translation</li>
                  <li>• Text Summarization</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">✓</span>
                <span><strong>100% Free:</strong> No hidden charges or premium paywalls</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">✓</span>
                <span><strong>Ultra-Fast:</strong> Process documents in milliseconds</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">✓</span>
                <span><strong>Secure:</strong> Your files are encrypted and auto-deleted</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">✓</span>
                <span><strong>AI-Powered:</strong> Advanced AI models for smart processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">✓</span>
                <span><strong>No Registration:</strong> Use most tools without signing up</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Our Technology</h2>
            <p>
              DocuCraft Pro is built with cutting-edge technologies:
            </p>
            <div className="mt-4 p-6 bg-slate-800/50 border border-slate-700 rounded-lg">
              <ul className="space-y-2 text-sm">
                <li><strong>Frontend:</strong> Next.js 14 with React 18 and Tailwind CSS</li>
                <li><strong>AI Models:</strong> Free tier APIs for OpenAI, HuggingFace</li>
                <li><strong>PDF Processing:</strong> pdf-lib and PDFKit for robust document handling</li>
                <li><strong>OCR:</strong> Tesseract.js for text recognition</li>
                <li><strong>Infrastructure:</strong> Deployed on Vercel for maximum performance</li>
                <li><strong>Security:</strong> End-to-end encryption and secure file handling</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
            <p>
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <p className="mt-4">
              Email: <a href="mailto:mrhamduofficial@gmail.com" className="text-cyan-400 hover:text-cyan-300">mrhamduofficial@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
