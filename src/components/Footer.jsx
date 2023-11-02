import React from 'react';
import { BsGithub, BsMusicNote } from 'react-icons/bs';

const Footer = ({ canPlayAudio, setCanPlayAudio }) => {
  return (
    <div className="footer">
      <button
        className="footer-btn"
        canPlayAudio={canPlayAudio}
        onClick={() => setCanPlayAudio((prev) => (prev === 0 ? 1 : 0))}
      >
        <BsMusicNote />
      </button>
      <a
        href="https://github.com/BismarkAgyare"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
      >
        <p>Bismark Agyare</p>
        <BsGithub />
      </a>
    </div>
  );
};

export default Footer;
