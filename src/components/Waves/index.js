import React from 'react';
import  Wave  from 'react-wavify';
import './style.css';

const Waves = () => {
  return (
    <div className="wave-container">
        <div className="wave-overlay">
      <Wave
        className="wave"
        fill="rgba(255, 255, 255, 0.5)"
        paused={false}
        options={{
          height: 50,
          amplitude: 60,
          speed: 0.2,
          points: 3,
        }}
      />
      <Wave
        className="wave"
        fill="rgba(255, 165, 0, 0.7)"
        paused={false}
        options={{
          height: 50,
          amplitude: 60,
          speed: 0.2,
          points: 4,
        }}
      />
      </div>
    </div>
  );
};

export default Waves;

