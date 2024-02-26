import React, { useState, useEffect } from 'react';
import '../App.css';
import { Body } from './Body';
import Skill from './Skill';
import Navigation from './Navigation';

const Home = () => {
  const [showBody, setShowBody] = useState(false);
  const [showSkill, setShowSkill] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const bodyOffset = document.getElementById('project').offsetTop;
      const skillOffset = document.getElementById('skill-section').offsetTop;

      if (scrollY > bodyOffset - 500) {
        setShowBody(true);
      } else {
        setShowBody(false);
      }

      if (scrollY > skillOffset - 500) {
        setShowSkill(true);
      } else {
        setShowSkill(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
     <div id='home' className='text-center mt-[200px] w-fit m-auto mb-20'>
        <span className='text-gray-300 text-[50px] font-bold font-mono'>
          Manu Krishna A P
        </span>
        <div className='text-center typewriter w-fit m-auto'>
          <h2 className='text-[20px] font-serif text-gray-300'>
            Full stack developer
          </h2>
        </div>
      </div>

      <div id='project' className='mb-20'>
        <div className={`slide-up ${showBody ? 'show' : 'hide'}`}>
          {showBody && (
            <>
              <div className='bg-slate-700 mt-4 flex justify-center align-content-center z-0 pt-3 pb-3 text-[20px] flex-wrap gap-10 text-white text-center'>
                <span className='hover:text-cyan-600'>Projects</span>
              </div>
              <Body />
            </>
          )}
        </div>
      </div>

      <div id='skill-section'>
        <div className={`slide-up ${showSkill ? 'show' : 'hide'}`}>
          {showSkill && (
            <>
              <Skill />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
