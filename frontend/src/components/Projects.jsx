
import React, { useEffect } from 'react';
import styles from './Projects.module.css';
import keralaimage from '../assets/kerala.png';
import dressimage from '../assets/image.png';
import portfolioimage from '../assets/image1.png';
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const project = [
    {
      image: portfolioimage,
      title: "Portfolio Website",
      tech: ["React","HTML","CSS","JavaScript"],
      desc: "An interactive portfolio built to showcase my skills, projects, and professional journey. It features reusable React components, smooth navigation, and a responsive design that works seamlessly on both desktop and mobile devices.",
      demo: "#",

    },
    {
      image: keralaimage,
      title: "Kerala Tourism Website",
      tech: ["HTML","CSS","JavaScript"],
      desc: "Explore the beauty of Kerala with interactive guides, travel information, and vibrant images. Features include an interactive gallery of tourist destinations, smooth hover animations, and a mobile-friendly responsive design.",
      demo: "https://tropicalls.netlify.app/",
    
    },
    {
      image: dressimage,
      title: "Ecommerce Website",
      tech: ["HTML","CSS"],
      desc: "A clean online catalog showcasing various dress collections. The project focuses on layout, typography, and responsive design for both desktop and mobile devices.",
      demo: "https://brilliant-starship-7ac9b8.netlify.app/",

    }
  ];

  return (
    <div className={styles.projectscontainer} id="projects">
      <h2 className={styles.my} data-aos="fade-up">Projects</h2>

      {project.map((p, index) => (
        <div
          className={styles.projectcard}
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 80}
        >
          <div className={styles.projectbar}></div>

          <div className={styles.projectcontent}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p className={styles.techstack}>{p.tech.join(", ")}</p>

            <p>{p.desc}</p>

            <div className={styles.links}>
              <a href={p.demo} target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;