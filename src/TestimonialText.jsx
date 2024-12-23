import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TestimonialText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    // Duplicate content for seamless looping
    const duplicatedContent = textElement.innerHTML + textElement.innerHTML;
    textElement.innerHTML = duplicatedContent;

    // Create GSAP timeline
    gsap.timeline({ repeat: -1 }) // Infinite repeat
      .to(textElement, {
        x: '-50%', // Move the text left
        duration:60, // Adjust speed by changing duration
        ease: 'linear',
      });
  }, []);

  return (
    <div
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontSize: '80px',
      }}
    >
      <div
        ref={textRef}
        className="testimonialBigIntro"
        style={{ display: 'inline-block' }}
      >
      <span>Experience</span> 
      <span className='tr'>Delicious</span> 
      <span>Awesome</span> 
    
      <span className='tr'>Experience</span> 
      <span >Delicious</span>  
      <span className='tr'>Awesome</span> 

      <span>Experience</span> 
      <span className='tr'>Delicious</span> 
      <span>Awesome</span> 

      <span className='tr'>Experience</span> 
      <span  >Delicious</span> 
      <span className='tr'>Awesome</span> 
  
      </div>
    </div>
  );
};

export default TestimonialText;
