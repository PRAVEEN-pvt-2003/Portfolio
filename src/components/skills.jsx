import React, { useState } from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiAngular,
  SiNodedotjs, SiOpenai, SiBootstrap
} from 'react-icons/si';
import vscoelogo from '../assets/vscode.png';

const categorizedSkills = {
  Languages: [
    {
      name: 'HTML',
      description: 'HTML (HyperText Markup Language): I’ve learned how to create and structure web pages using HTML. I can build clean, well-organized layouts using headings, paragraphs, links, images, and forms.',
      icon: <SiHtml5 />
    },
    {
      name: 'CSS',
      description: 'CSS (Cascading Style Sheets): I’ve learned how to style web pages using CSS. I can design responsive layouts, apply colors, fonts, spacing, and create visually appealing user interfaces.',
      icon: <SiCss3 />
    },
    {
      name: 'JavaScript',
      description: 'JavaScript: I’ve learned how to make web pages interactive using JavaScript. I can handle events, update content dynamically, and build basic logic for user interactions.',
      icon: <SiJavascript />
    },
  ],
  Frameworks: [
    {
      name: 'React',
      description: 'React: I’ve learned how to build dynamic user interfaces using React. I can create reusable components, manage state, and build single-page applications efficiently.',
      icon: <SiReact />
    },
    {
      name: 'Angular',
      description: 'Angular: I’ve learned how to build structured, single-page applications using Angular. I can create components, use services, manage routing, and work with forms and HTTP requests.',
      icon: <SiAngular />
    },
    {
      name: 'Bootstrap',
      description: 'Bootstrap: I’ve learned how to build responsive and mobile-friendly websites using Bootstrap. I can use its grid system, components, and utility classes to design clean and consistent layouts.',
      icon: <SiBootstrap />
    },
    {
      name: 'Node',
      description: 'Node.js: I’ve learned how to build server-side applications using Node.js. I can handle HTTP requests, manage routing, and connect to databases for backend development.',
      icon: <SiNodedotjs />
    }
  ],
  Tools: [
    {
      name: 'VS Code',
      description: 'I use VS Code as my main code editor. I’m comfortable working with extensions, debugging tools, terminal, and Git integration to write and manage code efficiently.',
      icon: <img src={vscoelogo} alt="VS Code" style={{ width: '1em', height: '1em', objectFit: 'contain' }} />
    },
    {
      name: 'ChatGPT',
      description: 'I use ChatGPT to get coding help, learn new concepts, and solve technical problems quickly. It helps me improve productivity and understand complex topics with ease.',
      icon: <SiOpenai />
    }
  ]
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="skills-container" id="Skills">
      <h2>My Skills</h2>

      {Object.entries(categorizedSkills).map(([category, skills]) => (
        <div key={category} className="skills-section">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="skill-card"
                onClick={() => setActiveSkill(skill)}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {activeSkill && (
        <div className="popup-overlay" onClick={() => setActiveSkill(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="left-card">
              <div className="skill-icon">{activeSkill.icon}</div>
              <div className="skill-name">{activeSkill.name}</div>
            </div>
            <div className="connection-line"></div>
            <div className="right-card">
              <h3>Description</h3>
              <p>{activeSkill.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
