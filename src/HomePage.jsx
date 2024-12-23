import React, { useLayoutEffect, useRef, useEffect } from 'react';
import './App.css';
import VerticalGallery from './VerticalGallery';

import { gsap } from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import { SplitText } from 'gsap/SplitText';
import IntroText from './IntroText';
import TestimonialText from './TestimonialText';
import TestimonialCarausal from './TestimonialCarausal';

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

export default function HomePage() {
  const heroSectionRef = useRef(null); // Ref for heroSection
  const main = useRef();

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  useEffect(() => {
    // GSAP ScrollTrigger setup
    let st = ScrollTrigger.create({
      trigger: heroSectionRef.current, // Target the heroSection
      pin: true, // Pin the section in place
      start: 'top top', // Pinning starts when the top of the heroSection hits the top of the viewport
      end: '+=2500', // Adjust for how long you want the section to stay pinned
      scrub: true, // Smooth scrolling effect
      markers: true, // Add markers for debugging (remove this in production)
    });

    return () => {
      st.kill(); // Clean up ScrollTrigger on component unmount
    };
  }, []);

  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <div className="heroSection" ref={heroSectionRef}>
            <div className="introContent">
              <h2 className="font-playfair">Welcome OASIS Restaurant</h2>
              <h1 className="font-playfair">
                <IntroText />
              </h1>
            </div>
            <VerticalGallery />
          </div>

          <div className="testimonial">
            <div className="testimonialbg">
              <div className="testimonialInner">
                <div className="font-playfair testimonialBigIntro">
                  <TestimonialText />
                </div>

                <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
                  {/* Left Dish */}
                  <div className="md:flex justify-end items-center hidden">
                    <img src="./public/left-dish.png" alt="Left Dish" />
                  </div>

                  {/* Testimonial Carousel */}
                  <div className="w-full">
                    <div className="testimonialComment">
                      <TestimonialCarausal />
                    </div>
                  </div>

                  {/* Right Dish */}
                  <div className="md:flex justify-start items-center hidden">
                    <img src="./public/right-dish.png" alt="Right Dish" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
