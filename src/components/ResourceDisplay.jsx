import React from 'react';

function ResourceDisplay({ cp, instinct, food, fire, cookedFood, fireDuration }) {
  return (
    <div>
      <p>CP: {cp}</p>
      <p>Instinct: {instinct}</p>
      <p>Food: {food}</p>
      <p>Fire: {fire ? "Burning" : "Out"}</p>
      {fire && (
  <div style={{ marginTop: '8px' }}>
    <div style={{
      height: '10px',
      width: '25%',
      backgroundColor: '#333',
      borderRadius: '5px',
      overflow: 'hidden'
    }}>
      <div style={{
        height: '100%',
        width: `${(fireDuration / 120) * 100}%`,
        backgroundColor: '#f93',
        transition: 'width 1s linear'
      }} />
    </div>
    <small>{fireDuration}s remaining</small>
  </div>
)}
      <p>Cooked Food: {cookedFood}</p>
    </div>
  );
}

export default ResourceDisplay;