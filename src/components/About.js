import React from 'react';
import Links from './Links.js';

const About = ({ bio, github, linkedin }) => {
  return (
    <div>
      {bio && bio.trim() !== '' && <p>{bio}</p>}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
};

export default About;

