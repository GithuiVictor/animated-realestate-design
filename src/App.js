import React, { useState } from 'react'
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <React.Fragment>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero/>
    </React.Fragment>
  );
}

export default App;
