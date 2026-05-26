'use client';

import { useState } from 'react';

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
  });

  const [preview, setPreview] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateResume = () => {
    const resumeContent = `
${resumeData.fullName}
${resumeData.email} | ${resumeData.phone} | ${resumeData.location}

PROFESSIONAL SUMMARY
${resumeData.summary}

WORK EXPERIENCE
${resumeData.experience}

EDUCATION
${resumeData.education}

SKILLS
${resumeData.skills}
    `.trim();

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeContent));
    element.setAttribute('download', 'resume.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2 gradient-text">AI Resume Builder</h1>
        <p className="text-slate-400 mb-8">Create a professional resume with AI assistance</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={resumeData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={resumeData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={resumeData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={resumeData.location}
                onChange={handleChange}
                placeholder="New York, USA"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Professional Summary</label>
              <textarea
                name="summary"
                value={resumeData.summary}
                onChange={handleChange}
                placeholder="Brief overview of your professional background..."
                rows={3}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Work Experience</label>
              <textarea
                name="experience"
                value={resumeData.experience}
                onChange={handleChange}
                placeholder="List your work experience..."
                rows={4}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Education</label>
              <textarea
                name="education"
                value={resumeData.education}
                onChange={handleChange}
                placeholder="List your education..."
                rows={3}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Skills</label>
              <textarea
                name="skills"
                value={resumeData.skills}
                onChange={handleChange}
                placeholder="List your skills..."
                rows={3}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              onClick={generateResume}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-semibold"
            >
              Download Resume
            </button>
          </div>

          {/* Preview */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 h-fit sticky top-24">
            <h3 className="text-xl font-bold mb-4">Preview</h3>
            <div className="bg-white text-slate-900 rounded-lg p-6 text-sm space-y-4">
              <div>
                <div className="text-2xl font-bold">{resumeData.fullName || 'Your Name'}</div>
                <div className="text-slate-600">
                  {resumeData.email} | {resumeData.phone} | {resumeData.location}
                </div>
              </div>

              {resumeData.summary && (
                <div>
                  <div className="font-bold text-slate-900 mb-1">Professional Summary</div>
                  <div className="text-slate-700">{resumeData.summary}</div>
                </div>
              )}

              {resumeData.experience && (
                <div>
                  <div className="font-bold text-slate-900 mb-1">Work Experience</div>
                  <div className="text-slate-700 whitespace-pre-wrap">{resumeData.experience}</div>
                </div>
              )}

              {resumeData.education && (
                <div>
                  <div className="font-bold text-slate-900 mb-1">Education</div>
                  <div className="text-slate-700 whitespace-pre-wrap">{resumeData.education}</div>
                </div>
              )}

              {resumeData.skills && (
                <div>
                  <div className="font-bold text-slate-900 mb-1">Skills</div>
                  <div className="text-slate-700 whitespace-pre-wrap">{resumeData.skills}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
