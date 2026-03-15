import Skill from './Skills.module.css';
import htmlimage from '../assets/html1.png'
import cssimage from '../assets/css2.png'
import bootstrapimage from '../assets/bootstrapimage.png'
import jsimage from '../assets/javascript.png'
import reactimage from '../assets/react.svg'
import mongodbimage from '../assets/images.png'
import nodeimage from '../assets/jsnode.png'
import gitimage from '../assets/git1.png'
import githubimage from '../assets/gits.png'
import vercelimage from '../assets/vercel.png'
import netlifyimage from '../assets/netlify2.png'
import vscodeimage from '../assets/vscode.png'
const Skills = () => {
    return (
        <>
        <h1  id="skills"className={Skill.header}>My Skills</h1>
        <div className={Skill.skills} >
        <div className={Skill.skillcard}>
            <img className={Skill.skillimg}src={htmlimage} alt="" />
            <h2>HTML5</h2>
           
        </div>
        <div className={Skill.skillcard} >
             <img className={Skill.skillimg} src={cssimage} alt="" />
            <h2>CSS</h2>
           
        </div>
        <div className={Skill.skillcard}>
            <img  className={Skill.skillimg}src={bootstrapimage} alt="" />
            <h2>BootStrap</h2>
           
        </div>
        <div className={Skill.skillcard}>
            <img className={Skill.skillimg} src={jsimage} alt="" />
            <h2>JavaScript</h2>
        
        </div>
        <div className={Skill.skillcard}>
             <img className={Skill.skillimg}src={reactimage} alt="" />
            <h2>React</h2>
            
        </div>
        <div className={Skill.skillcard}>
             <img  className={Skill.skillimg}src={mongodbimage} alt="" />
            <h2>MongoDB</h2>
           
        </div>
        <div className={Skill.skillcard}>
             <img className={Skill.skillimg}src={nodeimage} alt="" />
            <h2>Node.js</h2>
           
        </div>
        <div className={Skill.skillcard}>
             <img className={Skill.skillimg} src={gitimage} alt="" />
            <h2>Git</h2>
            
        </div>
        <div className={Skill.skillcard}>
             <img  className={Skill.skillimg}src={githubimage} alt="" />
            <h2>GitHub</h2>
          
        </div>
        <div className={Skill.skillcard}>
             <img  className={Skill.skillimg}src={vercelimage} alt="" />
            <h2>Vercel</h2>
          
        </div>
        <div className={Skill.skillcard}>
             <img  className={Skill.skillimg}src={netlifyimage} alt="" />
            <h2>Netlify</h2>
          
        </div>
        <div className={Skill.skillcard}>
             <img  className={Skill.skillimg}src={vscodeimage} alt="" />
            <h2>VS Code</h2>
          
        </div>
       
        </div>
        
        </>
    )
}

export default Skills;