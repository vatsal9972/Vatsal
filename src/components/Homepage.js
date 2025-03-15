import About from "./About/About";
import Certifications from "./Certification/Certification";
import Experience from "./Experience/Experience";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import ResumeNew from "./Resume/ResumeNew";

export default function Homepage(){
    return (
        <>
            <Home />
            <About />
            <Projects />
            <Experience />
            <Certifications />
            <ResumeNew />

        </>
    )
}