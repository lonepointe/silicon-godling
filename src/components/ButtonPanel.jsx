import React from 'react';

function ButtonPanel({ 
  onContemplate, 
  onForage, 
  onKindleFire, 
  onCookFood, 
  fire,
  fireDuration
}) {
  return (
    <div>
      <button onClick={onContemplate}>Contemplate (+1 CP)</button>
      <button onClick={onForage}>Forage</button>
      
      <button 
        className={fire ? 'fire-active' : 'fire-inactive'}
        onClick={onKindleFire}
        style={{
          '--progress': `${(fireDuration / 120) * 100}%`
        }}
      >
      {fire ? `Fire (${fireDuration}s)` : 'Kindle Fire'}
      </button>
      
      <button onClick={onCookFood}>Cook Food</button>
    </div>
  );
}

export default ButtonPanel;