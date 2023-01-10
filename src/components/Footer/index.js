import React from 'react';
import { AiFillGithub } from 'react-bootstrap-icons'

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      img: "fab fa-github",
      link: "https://github.com/"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;