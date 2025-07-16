import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Code,
  Palette,
  Database,
  Smartphone,
  Globe,
  Briefcase,
  GraduationCap,
  Calendar,
  Award,
  User,
  FolderOpen
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    
    { name: 'React/Next.js', level: 90, icon: Code },
    { name: 'Node.js', level: 85, icon: Database },
    { name: 'Python', level: 80, icon: Palette },
    { name: 'MySQL/MongoDB', level: 95, icon: Code },
    { name: 'Web Development', level: 75, icon: Smartphone },
    { name: 'Java', level: 85, icon: Globe }
  ];

  const projects = [
    {
      title: "Event Registration System",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://mya2zevents.com/wp-content/uploads/2020/04/ePly-1-980x720.webp",
      github: "#",
      live: "#"
    },
    {
      title: "Hotel Management System",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Java", "Spring", "Postman", "MySQL"],
      image: "https://i0.wp.com/www.lovelycoding.org/wp-content/uploads/2022/09/Hotel-Management-System.webp?resize=640%2C427&ssl=1",
      github: "#",
      live: "#"
    },
    {
      title: "Gold Price Prediction",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["Python", "Machine Learning Modules"],
      image: "https://miro.medium.com/v2/resize:fit:1400/1*90MXoi5dhk8YQvfPnkr2Hw.jpeg",
      github: "#",
      live: "#"
    }
  ];

  const experience = [
    
    {
      title: "Full Stack Developer",
      company: "Internship",
      period: "2025",
      description: "Developed full-stack web applications using React, Node.js, and databases as part of academic projects and internships, gaining hands-on experience in building real-world applications.",
      achievements: ["Collaborated with and guided peers during group projects and coding sessions."]
    },
    {
      title: "Frontend Developer",
      company: "Academic Collaboration",
      period: "2024",
      description: "Contributed to the development of responsive web applications as part of internship and academic projects. Worked closely with design teams to deliver user-friendly interfaces and enhance the overall user experience.",
      achievements: ["Utilized HTML, CSS, JavaScript, and React to create intuitive and dynamic user interfaces", "Received positive feedback from mentors and faculty for clean code practices and UI performance."]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-emerald-600 font-semibold' 
                      : 'text-slate-600 hover:text-emerald-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-slate-600 hover:text-emerald-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 rounded-md capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-emerald-600 bg-emerald-50 font-semibold' 
                      : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-emerald-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="https://rb.gy/3g18qx"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl border-4 border-white object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Ramu <span className="text-emerald-600">Yalamarthi</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            passionate about creating exceptional digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/ramu-yalamarthi/" className="text-slate-600 hover:text-emerald-600 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/RamuYalamarthi" className="text-slate-600 hover:text-emerald-600 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-600 hover:text-emerald-600 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About"
                className="rounded-lg shadow-xl w-full object-cover h-96"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Passionate Developer
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly applications. 
                My expertise spans across modern JavaScript frameworks, backend technologies, and cloud services.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community through blog posts and talks.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <User className="text-emerald-600" size={20} />
                  <span className="text-slate-600">Problem Solver</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-emerald-600" size={20} />
                  <span className="text-slate-600">Team Player</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-emerald-600" size={20} />
                  <span className="text-slate-600">Quick Learner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-emerald-600" size={20} />
                  <span className="text-slate-600">Detail Oriented</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <skill.icon className="text-emerald-600 mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-slate-600 mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                    <p className="text-emerald-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-slate-600 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="text-emerald-600 mr-2">•</span>
                        <span className="text-slate-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Let's Work Together</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-emerald-600" size={20} />
                  <span className="text-slate-600">ramuyalamarthi07@gmail</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-emerald-600" size={20} />
                  <span className="text-slate-600">+91 9705980932</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-emerald-600" size={20} />
                  <span className="text-slate-600">India</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2024 John Anderson. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;