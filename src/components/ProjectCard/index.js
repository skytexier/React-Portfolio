import  Col  from 'react-bootstrap/Col';
import {FaGithub, FaLink } from  "react-icons/fa"

// Creating project-cards that will fit into a container and row within the project-section, using react-bootstrap and react-icons

 const ProjectCard = ({ title, description, imgURL, URL, Github }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className='project-image'>
                <img src={imgURL} alt={description}/>
                <div className='projectDesc'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br></br>
                    {Github && URL ? <><a href={Github} key={imgURL} target="_blank" rel="noopener noreferrer"><FaGithub /></a><a href={URL} key={imgURL} target="_blank" rel="noopener noreferrer"><FaLink /></a></>
                    : <a href={Github} key={imgURL} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;