import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4 '>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
  
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold flex justify-center items-center'>
              <p>Hi. I'm Kedar, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='text-lg'> Hi, I come from a diverse study background of business management and information technology. I studied web development by utilizing the open sources available on the internet. Currently, I am working as a full-stack developer in a startup project called Aveksana. I am working on technologies like HTML, CSS, Javascript, React, React Bootstrap, styled-componnets, redux on the frontend and NodeJs, Express, Python, mongoDb, SQL, Firebase on the backend. Programming is not only about knowing how to code, its about making yourself more creative each day and in most of the cases your creativity can be seen in the projects that your have designed. I am passionate about building excellent software that improvesthe lives of those around me. I want to specialize in creating software for clients ranging from individuals to large enterprise corporations and to build a strong developer profile.  </p>  
            
            {/* //What would you do if you had a software expert available at your fingertips?// */}
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
