import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Send } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Jane Smith
          </h1>
          <h2 className="text-2xl md:text-3xl text-indigo-600 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Crafting elegant solutions to complex problems with clean, efficient code.
            Specialized in React, Node.js, and cloud architecture.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
              Get in Touch
            </a>
            <a href="#portfolio" className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition">
              View Work
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                alt="Professional headshot"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                With over 8 years of experience in software development, I've had the privilege
                of working with innovative startups and established enterprises alike. My passion
                lies in creating intuitive, high-performance applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I specialize in full-stack development using modern technologies and best practices.
                My approach combines technical expertise with a deep understanding of user experience
                and business objectives.
              </p>
              <a 
                href="/resume.pdf" 
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
                description: "A full-featured e-commerce solution with real-time inventory management.",
                tech: ["React", "Node.js", "MongoDB", "AWS"],
                demo: "#",
                repo: "#"
              },
              {
                title: "Task Management App",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
                description: "Collaborative task management tool with real-time updates.",
                tech: ["Vue.js", "Firebase", "Tailwind CSS"],
                demo: "#",
                repo: "#"
              },
              {
                title: "AI Content Generator",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                description: "AI-powered content generation tool using GPT-3.",
                tech: ["Python", "FastAPI", "React", "OpenAI"],
                demo: "#",
                repo: "#"
              },
              {
                title: "Financial Dashboard",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                description: "Real-time financial data visualization dashboard.",
                tech: ["Next.js", "D3.js", "PostgreSQL"],
                demo: "#",
                repo: "#"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.demo} className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={project.repo} className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700">
                      <Github size={16} /> Repository
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend Development",
                skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
              },
              {
                category: "Backend Development",
                skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
              },
              {
                category: "DevOps & Cloud",
                skills: ["AWS", "Docker", "CI/CD", "Kubernetes", "Linux"]
              },
              {
                category: "Tools & Methods",
                skills: ["Git", "Agile", "TDD", "REST APIs", "Microservices"]
              },
              {
                category: "Soft Skills",
                skills: ["Project Management", "Team Leadership", "Communication", "Problem Solving"]
              },
              {
                category: "Other Technologies",
                skills: ["WebSockets", "Redis", "ElasticSearch", "OAuth", "WebRTC"]
              }
            ].map((category, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:jane.smith@example.com" className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                  <Mail size={20} />
                  jane.smith@example.com
                </a>
                <a href="https://github.com" className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                  <Github size={20} />
                  github.com/janesmith
                </a>
                <a href="https://linkedin.com" className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                  <Linkedin size={20} />
                  linkedin.com/in/janesmith
                </a>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Jane Smith. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;