import React, { useState, useEffect } from 'react';

function TestimonialCarousel() {
  const testimonialFeedback = [
    {
        feedback: 'Great food and environment. I will visit again and again. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        owner: 'John Doe',
        photo: 'https://via.placeholder.com/50?text=JD',
      },
      {
        feedback: 'Indian fresh food. I love it, coming back soon!, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        owner: 'Jane Smith',
        photo: 'https://via.placeholder.com/50?text=JS',
      },
      {
        feedback: 'We are planning to visit with all my friends. Awesome food!, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        owner: 'Michael Lee',
        photo: 'https://via.placeholder.com/50?text=ML',
      },
      {
          feedback: 'Great food and environment. I will visit again and again. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          owner: 'John Doe',
          photo: 'https://via.placeholder.com/50?text=JD',
        },
        {
          feedback: 'Indian fresh food. I love it, coming back soon!, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          owner: 'Jane Smith',
          photo: 'https://via.placeholder.com/50?text=JS',
        },
        {
          feedback: 'We are planning to visit with all my friends. Awesome food!, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          owner: 'Michael Lee',
          photo: 'https://via.placeholder.com/50?text=ML',
        },
        {
          feedback: 'Great food and environment. I will visit again and again. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          owner: 'John Doe',
          photo: 'https://via.placeholder.com/50?text=JD',
        },
        {
          feedback: 'Indian fresh food. I love it, coming back soon!, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          owner: 'Jane Smith',
          photo: 'https://via.placeholder.com/50?text=JS',
        },
        {
          feedback: 'We are planning to visit with all my friends. Awesome food!, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          owner: 'Michael Lee',
          photo: 'https://via.placeholder.com/50?text=ML',
        },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialFeedback.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 500); // Match fade-out duration
  };

  const handleClick = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(false);
    }, 500); // Match fade-out duration
  };

  const { feedback, photo } = testimonialFeedback[currentIndex];

  return (
    <div className="p-4 text-center testimonial-carousel">
      <div
        className={`mb-4 text-lg italic feedback transition-opacity duration-500 text-white	 ${
          fade ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {feedback}
      </div>

      <div
        className={`flex justify-center mb-4 owner-photo transition-opacity duration-500 ${
          fade ? 'opacity-0' : 'opacity-100'
        }`}
      >
       
      </div>

      <div className="flex justify-center space-x-1 photo-thumbnails">
        {testimonialFeedback.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.photo}
            alt={testimonial.owner}
            className={`rounded-full w-10 h-10 transition-transform duration-300 cursor-pointer ${
              index === currentIndex ? 'scale-110 border-2 border-gray-500' : ''
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialCarousel;
