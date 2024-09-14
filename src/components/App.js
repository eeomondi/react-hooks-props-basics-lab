import React from 'react';
import Home from './Home';
import About from './About';

const App = () => {
  // Example user object
  const user = {
    name: 'John Doe',
    age: 30,
    location: 'New York',
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    bio: 'Software developer with a passion for open source.'
  };

  return (
    <div>
      <Home
        name={user.name}
        age={user.age}
        location={user.location}
      />
      <About
        bio={user.bio}
        github={user.github}
        linkedin={user.linkedin}
      />
    </div>
  );
};

export default App;

/*import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;*/
