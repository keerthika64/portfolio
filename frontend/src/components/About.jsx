import Abouts from './About.module.css';
import keerthi from "../assets/keerthikaa.jpg"
import Button from './Button.jsx'

const About = () => {

  return (
    <>
      <div className={Abouts.sec} id="about">
        <div className={Abouts.cls}>
          <img  className={Abouts.profile}src={ keerthi} alt="" />
        </div>
        <div className={Abouts.aboutme}>
          <h1>About Me</h1>
          <p>
            I am a passionate Frontend Developer who enjoys creating responsive,
            user-friendly, and visually appealing websites. I have a strong
            interest in transforming ideas and designs into interactive digital
            experiences using modern web technologies. I continuously work on
            improving my skills and learning new tools to build efficient and
            high-quality web applications.I am always eager to learn new technologies and improve my development skills to stay updated with modern web trends.
          </p>
          <Button text={'Download CV' } radius={'10px'} align={'center'} />
        </div>
      </div>
    </>
  );
};

export default About;
