import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Kedar, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='text-lg'> Like I mentioned earlier, i am a self taught programmer and my journey hasn't been that long. However, with patience and ability to learn things quickly, I am already able to build amazing projects. I am passionate about building excellent software that improves
              the lives of those around me. I want to specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. All, I am expecting at the moment is a yes from you to work in your team. </p>  
            
            {/* //What would you do if you had a software expert available at your fingertips?// */}
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
