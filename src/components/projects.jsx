import portfolioimg from '../assets/Portfolio.jpg';
import todoimg from '../assets/to-do.jpg';

const projectData = [
  {
    name: 'Portfolio',
    description: 'A Portfolio website that shows my ability and skills. This website is made using Angular framework tool.',
    Image: portfolioimg,
  },
  {
    name: 'To-Do App',
    description: 'This To-Do app will ensure your daily tasks and reminds you.',
    Image: todoimg,
  },
];


function Project() {
  return (
    <div className="Project-section" id="Projects">
      <h2>My Projects</h2>
      <div className="Project-grid">
        {projectData.map((Project, index) => (
          <div className="Project-card" key={index}>
            <img src={Project.Image} alt={Project.name} className="project-image" />
            <h3>{Project.name}</h3>
            <p>{Project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
