import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from '../ProjectCard';
import projImg1 from "../../images/project1.jpeg";
import projImg2 from "../../images/project2.jpeg";
import projImg3 from "../../images/project1.jpeg";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css'

 const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "FrontEnd Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "FrontEnd Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "FrontEnd Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "FrontEnd Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "FrontEnd Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "FrontEnd Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I Hope To Be Successfull Web Developer </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>This Project Is The First Project In React But I Have To Do A Lot  Of Oroject To Be Profional</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>This Project Is The First Project In React But I Have To Do A Lot  Of Oroject To Be Profional</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Projects;