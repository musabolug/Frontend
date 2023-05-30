import React from 'react'
import { Container, Col, Row, Nav ,Tab} from 'react-bootstrap';
import ChessAppKapak from "../assets/img/ChessAppKapak.jpg"
import quote from "../assets/img/Quote.jpg"
import noteApp from  "../assets/img/note-app.jpg"
import typespeed from "../assets/img/type-speed.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png"
import { ProjectCard } from './ProjectsCard';
import "animate.css"
import TrackVisibility from 'react-on-screen'

export  function Projects() {
    const projects = [
        {
          title: "Chess Game App",
          description: "Design & Development",
          imgUrl: ChessAppKapak,
          projectUrl:"https://musabolug-chess-app.netlify.app"
        },
        {
          title: "Quote Generator",
          description: "Design & Development",
          imgUrl: quote,
          projectUrl:"https://musabolug-quote-generator-app.netlify.app"
        },
        {
          title: "Note App",
          description: "Design & Development",
          imgUrl: noteApp,
          projectUrl:"https://musabolug-note-app.netlify.app"
        },
        {
          title: "Typespeed App",
          description: "Design & Development",
          imgUrl: typespeed,
          projectUrl:"https://musabolug-typespeed-app.netlify.app"
        },
        {
          title: "Note App",
          description: "Design & Development",
          imgUrl: noteApp,
          projectUrl:"https://musabolug-note-app.netlify.app"
        },
        {
          title: "Quote Generator",
          description: "Design & Development",
          imgUrl: quote,
          projectUrl:"https://musabolug-quote-generator-app.netlify.app"
        },
      ];
  return (
    <section  className="project" id='project'>
        <Container> 
          <Row>
            <Col>
            <TrackVisibility>
          {({isVisible})=>
              <div className={isVisible ? "animate__animated animate__fadeInDown":"" }>
            <h2>Projects</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente eius nihil quisquam sit! Ipsum delectus aperiam, et distinctio soluta mollitia. Nostrum, porro quas! Possimus aspernatur dicta repudiandae? Dolores, maiores?</p>
            </div>}
          </TrackVisibility>
            <Tab.Container id='projects-tabs' defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first" >Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" >Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" >Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project,index)=> {
                        return(
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nisi, soluta rem voluptate accusamus explicabo deleniti commodi. Cupiditate officia quibusdam porro! Dolorum vel facere nemo doloremque, sed quisquam ullam recusandae?
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quas, magni tempora accusamus esse officiis itaque quos dignissimos molestiae dolorem illo quibusdam ipsa labore nemo, qui ut. Atque, rem maiores!
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}  alt="" />
    </section>
  )
}

