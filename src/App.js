import React from 'react';
import { Hero, Navbar,Companies, Founder, Programs, Faqq, EventBlog, Community, Footer, Contact } from './components';
import './App.css';


function App() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <Companies />
     <Founder/>
     <Programs/>
     <Faqq/>
     <Community/>
      <EventBlog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
