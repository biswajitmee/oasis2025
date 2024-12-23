import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

function IntroText() {
  const textLines = [
    'Great atmosphere for dining in',
    'Indian fresh food',
    'We are serving food for 30 years',
  ]; // Array of text lines to animate
  const [currentIndex, setCurrentIndex] = useState(0); // Track current text line
  const textContainerRef = useRef(null); // Ref for the text container
  const splitRef = useRef(null); // Store SplitText instance

  useEffect(() => {
    const currentText = textLines[currentIndex]; // Get the current line to display

    // Animate current text line
    const animateText = () => {
      if (splitRef.current) {
        splitRef.current.revert(); // Revert the previous SplitText instance
      }

      // Set the new text in the container
      if (textContainerRef.current) {
        textContainerRef.current.innerHTML = currentText;
      }

      splitRef.current = new SplitText(textContainerRef.current, { type: 'chars' });
      const chars = splitRef.current.chars;

      // GSAP animation
      gsap
        .timeline()
        .fromTo(
          chars,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 1,
            ease: 'power2.out',
          }
        )
        .to(
          chars,
          {
            opacity: 0,
            y: -50,
            stagger: 0.05,
            duration: 0.8,
            ease: 'power2.in',
          },
          '+=1' // Add delay before starting exit animation
        );
    };

    animateText();

    // Move to the next line after the total animation duration
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textLines.length); // Cycle through the lines
    }, 3000); // Adjust duration to match animation

    return () => {
      clearTimeout(timer); // Clean up timeout
      if (splitRef.current) {
        splitRef.current.revert(); // Revert SplitText instance
      }
    };
  }, [currentIndex]); // Re-run animation when currentIndex changes

  return (
  
      <div ref={textContainerRef}></div>
  
  );
}

export default IntroText;
