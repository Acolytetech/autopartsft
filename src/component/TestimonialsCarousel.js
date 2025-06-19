import React, { useState, useEffect } from 'react';

const testimonials = [
  { text: '"Excellent service and parts delivered fast!"', author: 'Rohit S.' },
  { text: '"Affordable pricing and great support."', author: 'Neha P.' },
  { text: '"Quick response and reliable services."', author: 'Amit T.' },
  { text: '"My car was picked and serviced on time."', author: 'Kavita M.' }
];

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section style={{ padding: '40px 20px', position: 'relative' }}>
      <h2 style={{ color: '#b30000', textAlign: 'center' }}>What Our Customers Say</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ flex: '1 1 250px', background: '#eee', padding: '20px', borderRadius: '8px', minWidth: '280px' }}>
          <p>{testimonials[current].text}</p>
          <strong>- {testimonials[current].author}</strong>
        </div>
        <div style={{ flex: '1 1 250px', background: '#eee', padding: '20px', borderRadius: '8px', minWidth: '280px' }}>
          <p>{testimonials[(current + 1) % testimonials.length].text}</p>
          <strong>- {testimonials[(current + 1) % testimonials.length].author}</strong>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={prev} style={{ marginRight: '10px' }}>&lt;</button>
        {testimonials.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              margin: '0 5px',
              backgroundColor: current === i ? '#b30000' : '#ccc',
              cursor: 'pointer'
            }}
          ></span>
        ))}
        <button onClick={next} style={{ marginLeft: '10px' }}>&gt;</button>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;