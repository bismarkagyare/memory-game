import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <a
      href="https://github.com/BismarkAgyare"
      className="footer-link"
      target="_blank"
      rel="noreferrer"
    >
      <p>Bismark Agyare</p>
      <BsGithub />
    </a>
  );
};

export default Footer;
