
import { Fragment } from 'react';
import Navs from './Component/Nav/Nav';
import Skills from '../src/Component/Skills/Skills'
import Home from './Home/Home';
import Projects from './Component/Projects/Projects';
import ProjectCard from './Component/ProjectCard';
import Contact from './Component/Contact US/Contact';
// import MailchimpForm from './Component/Contact US/MailchimpForm';
import Newsletter from './Component/Newsletter';
import Footer from './Component/Footer';
function App() {

  return (
    <Fragment>
       <Navs/>
       <Home/>
       <Skills/>
      <Projects/>
      <ProjectCard/>
      <Contact/>
      {/* <MailchimpForm/> */}
      <Newsletter/>
      <Footer/>
    </Fragment>
  );
}

export default App;
