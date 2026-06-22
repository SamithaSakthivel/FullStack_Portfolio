import React, { useEffect } from 'react';
import { Mail, Download, ExternalLink, Code2, Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';

// Navbar Component
const Navbar = () => (
  <nav className="glass-panel" style={{ position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 100, width: '90%', maxWidth: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
    <div style={{ fontWeight: '800', fontSize: '1.4rem' }} className="text-gradient">Samitha S.</div>
    <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#certifications">Certifications</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
);

// Hero Component
const Hero = () => (
  <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem' }}>
    <div className="container grid grid-cols-2" style={{ alignItems: 'center' }}>
      <div className="hero-text animate-on-scroll">
        <h3 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Hey, I'm</h3>
        <h1 style={{ fontSize: '4.5rem', marginBottom: '0.5rem', lineHeight: '1.1' }} className="text-gradient">Samitha S</h1>
        <h2 style={{ fontSize: '1.5rem', textAlign: 'left', marginBottom: '1.5rem', color: '#fff', lineHeight: '1.4' }}>AI & Data Science Student <br /><span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Full-Stack Developer</span></h2>
        <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '95%' }}>
          B.Tech AI & Data Science student skilled in full-stack web development using React, Node.js, Express.js, and MongoDB. Built scalable MERN applications with JWT authentication, Redux Toolkit state management, and Docker deployment. Strong foundation in APIs, data handling, and responsive UI design.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
          <a href="https://drive.google.com/drive/folders/119Nqt3Wl9zmOf6oae_tPRoCAEGumxHWV" className="btn btn-primary"><Download size={20} /> Download CV</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/SamithaSakthivel" target="_blank" rel="noreferrer" className="social-icon" style={{ color: 'var(--text-secondary)' }}><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/samitha-s-497579282" target="_blank" rel="noreferrer" className="social-icon" style={{ color: 'var(--text-secondary)' }}><FaLinkedin size={24} /></a>
          <a href="mailto:spsamitha30@gmail.com" className="social-icon" style={{ color: 'var(--text-secondary)' }}><Mail size={24} /></a>
        </div>
      </div>
      <div className="hero-image animate-on-scroll" style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: '400px', height: '400px', borderRadius: '50%', padding: '8px',
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          boxShadow: '0 0 40px rgba(107, 70, 193, 0.3)'
        }}>
          <img src="/sami.png" alt="Samitha S" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '6px solid var(--bg-color)' }} />
        </div>
      </div>
    </div>
  </section>
);

// Skills Component
const Skills = () => {
  const skillCategories = [
    { title: "Frontend", skills: "React.js, Redux Toolkit, RTK Query, HTML5, CSS3, JavaScript (ES6+), Bootstrap" },
    { title: "Backend", skills: "Node.js, Express.js, REST APIs, JWT Authentication, CRUD Operations" },
    { title: "Database", skills: "MongoDB, MySQL" },
    { title: "Tools & DevOps", skills: "Git, GitHub, Docker, Postman, Cloudinary, Linux, Vercel, Cursor, Google Antigravity" },
    { title: "Programming", skills: "Java, Python, C" },
    { title: "Data Science", skills: "Pandas, NumPy, Scikit-Learn, Matplotlib" },
    { title: "CS Fundamentals", skills: "Data Structures & Algorithms (SkillRack 1500+, LeetCode 150+), OOPs" },
  ];

  return (
    <section id="skills" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <h2 className="animate-on-scroll">Technical Skills</h2>
        <div className="grid grid-cols-2">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-panel skill-card animate-on-scroll" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.2rem', color: 'var(--accent-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={20} /> {cat.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {cat.skills.split(', ').map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projectsData = [
    {
      title: "Multi-Agent AI Research Assistant",
      type: "Personal Project",
      date: "Jan 2026 - Apr 2026",
      desc: "Designed a 4-node LangGraph state machine (Orchestrator → Search → Summariser → Citation) that autonomously decomposes user queries into 2-4 targeted sub-queries. Integrated Tavily web search API to retrieve and deduplicate up to 15 live web sources per query for LLM synthesis. Built real-time agent trace streaming via Socket.IO rooms, giving users a live view of agent reasoning. Persisted research sessions to MongoDB Atlas with a History panel. Exposed a clean REST + WebSocket API (FastAPI) proxied through Vite dev server.",
      tags: ["Python", "FastAPI", "LangGraph", "React", "Socket.IO", "MongoDB Atlas", "Groq API", "Tavily API"],
      link: "https://github.com/spsamitha30/research-agent",
      img: "/multi_agent.png"
    },
    {
      title: "Smart Civic Issue Reporting System",
      type: "Academic Project",
      date: "2024",
      desc: "AI-powered platform built with MERN stack that enables citizens to report hyperlocal problems with GPS and photo uploads. Features NLP models for automatic complaint categorization and semantic duplicate detection. Supports multilingual translation for accessibility and includes secure authentication and payment integration. Scalable backend architecture to handle real-time tracking.",
      tags: ["React", "Node.js", "MongoDB", "NLP", "Express.js"],
      link: "#",
      img: "/civic_issue.png"
    },
    {
      title: "Neural Style Transfer",
      type: "Academic Project",
      date: "2023",
      desc: "Implemented Neural Style Transfer using pretrained VGG19 to blend content and artistic style images. Built TensorFlow pipeline using content and style loss with gradient descent optimization.",
      tags: ["Python", "TensorFlow", "Deep Learning", "VGG19"],
      link: "#",
      img: "/neural_style.png"
    }
  ];

  return (
    <section id="projects" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container">
        <h2 className="animate-on-scroll" style={{ marginBottom: '4rem' }}>Featured Projects</h2>
        <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
          {projectsData.map((project, i) => (
            <div key={i} className="glass-panel animate-on-scroll" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

              {/* Image Section: 16:9 Aspect Ratio to perfectly scale */}
              <div style={{ width: '100%', aspectRatio: '16/9', background: '#151821', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--glass-border)' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', zIndex: 1 }}>
                  <Code2 size={48} style={{ opacity: 0.5, marginBottom: '0.5rem' }} />
                  <span style={{ fontSize: '0.8rem' }}>Image loading...</span>
                </div>
                <img src={project.img} alt={project.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'transform 0.4s ease', zIndex: 2 }}
                  onError={(e) => { e.target.style.display = 'none'; }} />
              </div>

              {/* Content Section */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', lineHeight: '1.3', marginBottom: '0.5rem' }} className="text-gradient">{project.title}</h3>

                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                  <span>{project.type}</span>
                  <span>•</span>
                  <span>{project.date}</span>
                </div>

                {/* Truncated text with ellipsis (...) */}
                <p style={{
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {project.desc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap', flexGrow: 1, alignContent: 'flex-start' }}>
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', color: 'var(--text-primary)', fontWeight: '500' }}>{tag}</span>
                  ))}
                </div>

                {/* Button */}
                <div style={{ marginTop: 'auto' }}>
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', width: '100%' }}>
                    <FaGithub size={18} style={{ marginRight: '0.5rem' }} /> View Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Education Component
const Education = () => (
  <section id="education">
    <div className="container">
      <h2 className="animate-on-scroll">Education</h2>
      <div className="grid grid-cols-2">
        <div className="glass-panel animate-on-scroll">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
            <GraduationCap className="text-gradient" size={32} style={{ marginTop: '0.2rem' }} />
            <div>
              <h3 style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>Bachelor's Of AI and Data Science</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>St. Joseph's Institute Of Technology</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '3rem', fontSize: '0.95rem', color: 'var(--accent-secondary)' }}>
            <span>8.5 CGPA (3rd Year)</span>
            <span>2023 - 2027</span>
          </div>
        </div>
        <div className="glass-panel animate-on-scroll">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
            <GraduationCap className="text-gradient" size={32} style={{ marginTop: '0.2rem' }} />
            <div>
              <h3 style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>Higher Secondary Certificate</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Isha Vidhya Hr. sec. School</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '3rem', fontSize: '0.95rem', color: 'var(--accent-secondary)' }}>
            <span>84%</span>
            <span>2023</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Certifications Component
const Certifications = () => {
  const certs = [
    { title: "Meta Frontend-Developer Professional Certificate", org: "Meta", link: "https://coursera.org/share/41b13f27a8396501ab617ed832a7bab8" },
    { title: "MongoDB Associate Developer", org: "Mongo DB", link: "https://www.credly.com/go/bs157csB" },
    { title: "MySQL 8.0 Database Oracle Certified Professional", org: "Oracle", link: "#" },
    { title: "Programming in Java", org: "NPTEL", link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs105/Course/NPTEL24CS105S55251225504326553.pdf" },
    { title: "Python for Data Science", org: "NPTEL", link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs60/Course/NPTEL25CS60S24330340701389634.pdf" },
    { title: "Artificial Intelligence Fundamentals", org: "IBM", link: "https://www.credly.com/badges/7e353460-260e-4c7e-6674-945e3895/27" },
  ];

  return (
    <section id="certifications" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container">
        <h2 className="animate-on-scroll">Certifications</h2>
        <div className="grid grid-cols-2">
          {certs.map((cert, idx) => (
            <div key={idx} className="glass-panel animate-on-scroll" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
              <div style={{ padding: '0.8rem', background: 'var(--glass-bg)', borderRadius: '12px', flexShrink: 0 }}>
                <Award className="text-gradient" size={32} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{cert.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{cert.org}</p>
              </div>
              <a href={cert.link} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
                View <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => (
  <section id="contact" style={{ marginTop: '2rem', paddingBottom: '3rem' }}>
    <div className="container glass-panel animate-on-scroll" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Get In Touch</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
        I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <a href="mailto:spsamitha30@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}><Mail size={20} /> spsamitha30@gmail.com</a>
      </div>

      <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <a href="https://github.com/SamithaSakthivel" target="_blank" rel="noreferrer" className="social-icon" style={{ color: 'var(--text-secondary)' }}><FaGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/samitha-s-497579282" target="_blank" rel="noreferrer" className="social-icon" style={{ color: 'var(--text-secondary)' }}><FaLinkedin size={24} /></a>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
      <p>Designed & Built by Samitha S</p>
    </div>
  </section>
);

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
