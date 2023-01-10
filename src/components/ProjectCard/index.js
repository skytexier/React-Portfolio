import { Col } from 'react-bootstrap';

 const ProjectCard = ({ title, description, imgURL, URL }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className='project-image'>
                <img src={imgURL} alt={description}/>
                <div className='projectDesc'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;