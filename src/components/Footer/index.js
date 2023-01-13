import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: <FaGithub />,
      link: "https://github.com/skytexier"
    },
    {
      name: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sky-t-ab805691/"
    },
  ]

  return (
    <footer className="flex-row px-1" id="footer">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">{icon.name}</a>
      )
        )}
    </footer>
  );
}

export default Footer;