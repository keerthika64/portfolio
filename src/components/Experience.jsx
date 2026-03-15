
import Experiences from './Experience.module.css';
import orvionar from '../assets/orvionar1.webp';
import techvolt from '../assets/tech.jpg';
import alo from '../assets/aloinfotech.png';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true     
    });
  }, []);

  const experienceList = [
    {
      img: orvionar,
      role: "MERN Stack Developer",
      tasks: [
        "Developed full-stack features using MERN stack",
        "Built REST APIs and responsive UI",
        "Collaborated with team on new features"
      ]
    },
    {
      img: techvolt,
      role: "Frontend Intern",
      tasks: [
        "Implemented modern frontend technologies",
        "Created interactive UI components",
        "Improved user interface design"
      ]
    },
    {
      img: alo,
      role: "Java Intern",
      tasks: [
        "Built basic Java backend programs",
        "Worked on coding exercises and small projects",
        "Strengthened programming fundamentals"
      ]
    }
  ];

  return (
    <>
      <h2 id="experience" className={Experiences.exp} data-aos="zoom-in">Experience</h2>

      <div className={Experiences.exp1}>
        {experienceList.map((exp, index) => (
          <div className={Experiences.exprow} key={index}>
            <div className={Experiences.develop} data-aos="zoom-in" data-aos-delay={index * 150}>
              <img className={Experiences.child} src={exp.img} alt={`${exp.role} Logo`} />
              <h3>{exp.role}</h3>
              <ul>
                {exp.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Experience;