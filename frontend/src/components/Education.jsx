
import Educations from './Education.module.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            once: true      
        });
    }, []);

    return (
        <>
            <h1 id="education" className={Educations.name} data-aos="zoom-in">Education</h1>
            <div className={Educations.education}>
                <div className={Educations.educations} data-aos="zoom-in">
                    <h2>B.E CSE</h2>
                    <p>Arunachala College of Engineering For Women</p>
                    <p>2022-2026</p>
                    <p>CGPA:8.4</p>
                </div>
                <div className={Educations.educations} data-aos="zoom-in">
                    <h2>Higher Secondary</h2>
                    <p>Duthie Higher Secondary School For Girls</p>
                    <p>2022</p>
                    <p>Percentage:80%</p>
                </div>
                <div className={Educations.educations} data-aos="zoom-in">
                    <h2>SSLC</h2>
                    <p>Duthie Higher Secondary School For Girls</p>
                    <p>2020</p>
                    <p>Percentage:85%</p>
                </div>
            </div>
        </>
    )
}

export default Education;