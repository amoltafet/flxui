import React from 'react';
import Hero from './components/Hero';
import TextSection from './components/TextSection';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer.jsx';
import List from './components/List.tsx';
import Video from './components/Video';
import Role from './components/Role';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="px-4 md:px-[15%] sm:px-0">
        <Role />
        <TextSection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Video />
          <WhyUs />
        </div>
        <List />
        <Footer />
      </div>
    </div>
  );
}

export default App;
