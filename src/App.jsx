import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import img from "./assets/developer.png"
import { ToastContainer, toast } from 'react-toastify';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '@hellouxpavel/cssanimation'


import { BookOpen, Download, Github, Linkedin, Mail, MapPin, Phone, Send, SquareArrowOutUpRight } from "lucide-react";


function App() {
  const [text, settext] = useState("");
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const timeline = [
    {
      title: 'Matriculation',
      place: 'Karachi Cadet School',
      date: '2023-2024',
      description: 'Completed Matriculation in Computer Science.',
    },
    {
      title: 'Intermediate',
      place: 'Nusrat Bhutto Govt Boys Degree College ',
      date: 'Current Education',
      description: 'Completed intermediate education in Computer Science.',
    },
    {
      title: 'MERN Stack Development Student',
      place: 'Saylani Mass IT Training (SMIT)',
      date: '2024 – 2025',
      description: 'Completed MERN Stack training at Saylani, gaining hands-on experience in MongoDB, Express.js, React, and Node.js to build full-stack web applications.',
    },

  ];

  const projects = [
    {
      title: 'Text Analyzer',
      image: 'text.JPG',
      tech: 'React ',
      liveLink: 'https://text-utils-kuyf.vercel.app/',
      codeLink: 'https://github.com/AhmedRazaKhan1020/Text-utils',
    },
    {
      title: 'Simple E-Commerce',
      image: '/ecommerce.JPG',
      tech: 'HTML | CSS | JavaScript',
      liveLink: 'https://ahmedrazakhan1020.github.io/E-com/',
      codeLink: 'https://github.com/AhmedRazaKhan1020/E-com',
    },
    {
      title: 'Stop Watch',
      image: '/watch.JPG',
      tech: 'HTML | CSS | JavaScript',
      liveLink: 'https://ahmedrazakhan1020.github.io/Stop-Watch/',
      codeLink: 'https://github.com/AhmedRazaKhan1020/Stop-Watch',
    },
    {
      title: 'Toss Game',
      image: '/toss.JPG',
      tech: 'HTML | CSS | JavaScript',
      liveLink: 'https://ahmedrazakhan1020.github.io/Toss--Game/',
      codeLink: 'https://github.com/AhmedRazaKhan1020/Toss--Game',
    },
   

  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5dat1uf', 'template_08r7l5g', form.current, {
        publicKey: 'ite0Cl3gcDt7WTJzU',
      })
      .then(
        () => {
          toast.success('Message Send Successfuly')
          setemail("")
          setname("")
          settext("")

        },
        (error) => {
          toast.error('FAILED...', error.text)
        },
      );
  };
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <ToastContainer />
  
      {/* header */}
      <div data-aos="fade-up" className=" navbar bg-transparent fixed top-0 left-0 w-full z-50 py-4 bg-background/80 backdrop-blur-lg shadow-lg transition-all duration-300">

        <div className="flex-1">
          <a className="text-xl">Portfolio</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
       {/* header end */}





      <section id="home" className="home-section">
        <div className="home-container cssanimation ca__fx-stepTypeIn">
          <div className="home-text ">
            <p className="welcome-text">Welcome to my portfolio</p>
            <h1 className="title">Hi,</h1>
            <h1 className="title">I am Ahmed Raza Khan</h1>
            <div className="typing-container">
              <a href="https://git.io/typing-svg">
                <img
                  src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=35&pause=1000&color=F7F7F7&width=435&lines=MERN+Stack+Developer;Frontend+Developer;Web+Developer"
                  alt="Typing SVG"
                />
              </a>
            </div>
            <div className="buttons">
              <button className="btn btn2 bg-white text-black">
                <a href="#project">View Project</a>
              </button>
              <button className="btn btn2 dark-btn">
                <a href="/Ahmed_Raza_CV.jpg" download="Ahmed_Raza_CV">
                  <Download className="icon" size={15} /> Download CV
                </a>
              </button>
            </div>
          </div>
          <div className="home-image">
            <img
              src="developer2.png"
              alt="img"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div data-aos="fade-right"data-aos-duration="1100">
          <div className="about-header">
            <p className="about-label">About Me</p>
          </div>

          <h1 className="about-title">Turning Ideas Into Digital Reality</h1>

          {/* About Image and Text */}
          <div className="about-content">
            <div className="about-image">
              <img src={img} alt="About" className="about-img" />
            </div>
            <div className="about-text">
              <h1 className="approach-title">My Approach</h1>
              <hr className="approach-divider" />
              <p className="approach-desc">
                I create clean, purposeful designs that blend creativity with code to deliver
                <br className="hidden-md" /> user-friendly, impactful experiences.
              </p>
              <button className="btn bg-black">
                <a href="#project">See My Work</a>
              </button>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="timeline-section">
            <h2 className="timeline-title">Education Timeline</h2>
            <p className="timeline-subtitle">
              My academic journey and professional development
            </p>

            <ul className="timeline-list">
              {timeline.map((item, index) => (
                <li key={index} className="timeline-item">
                  <span className="timeline-icon">
                    <BookOpen size={16} strokeWidth={1.25} />
                  </span>
                  <div className="timeline-content">
                    <h3 className="timeline-item-title">{item.title}</h3>
                    <p className="timeline-item-place">{item.place}</p>
                    <span className="timeline-item-date">{item.date}</span>
                    <p className="timeline-item-desc">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="project" className="projects-section">
        <div data-aos="fade-right"data-aos-duration="1100">
          <div className="projects-header">
            <p className="projects-label">Projects</p>
            <h1 className="projects-title">Selected Works</h1>
            <p className="projects-subtitle">
              Explore my featured projects, showcasing my expertise in design and development
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <figure>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p>{project.description}</p>
                  <p className="tech-stack">{project.tech}</p>
                  <div className="card-actions">
                    <a
                      href={project.liveLink}
                      className="btn demo-btn"
                    >
                      <SquareArrowOutUpRight size={20} strokeWidth={1.75} /> Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="btn code-btn"
                    >
                      <Github size={20} strokeWidth={1.75} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div data-aos="fade-right" data-aos-duration="1100">
          <div className="contact-header">
            <p className="contact-label">Contact</p>
          </div>

          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Have a project in mind or want to learn more about my work? I'd love to hear from you.
          </p>

          <div className="contact-grid">
            {/* Contact Info */}
            <div>
              <h1 className="info-title">Contact Information</h1>
              <hr className="info-divider" />
              <div className="contact-info">
                <div className="info-row">
                  <Mail size={40} className="info-icon" />
                  <p className="info-text">ahmedrazakhan2030@gmail.com</p>
                </div>
                <div className="info-row">
                  <MapPin size={40} className="info-icon" />
                  <p className="info-text">Karachi Pakistan</p>
                </div>
                <div className="info-row">
                  <Phone size={40} className="info-icon" />
                  <p className="info-text">03183603561</p>
                </div>
              </div>

              <h1 className="connect-title">Let's Connect</h1>
              <p className="connect-text">Follow me on social media or reach out directly.</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/ahmed-raza-khan-24b7ab370/">
                  <Linkedin size={40} className="social-icon" />
                </a>
                <a href="https://github.com/AhmedRazaKhan1020">
                  <Github size={40} className="social-icon" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-card">
                <div className="card-body">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Enter Your Name"
                    name="user_name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="Enter Your Email"
                    name="user_email"
                    typeof='email'
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <label className="label">Message</label>
                  <textarea
                    className="input-field"
                    name="message"
                    placeholder="Enter Your Message"
                    value={text}
                    onChange={(e) => settext(e.target.value)}
                  ></textarea>
                  <button className="submit-btn" type="submit">
                    <Send size={20} strokeWidth={1.75} /> Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>


    </>
  )
}

export default App
