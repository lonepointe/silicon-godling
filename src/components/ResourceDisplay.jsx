import React from 'react';

function ResourceDisplay({ cp, instinct, food, fire, cookedFood, }) {
  return (
    <div>
      <p>CP: {cp}</p>
      <p>Instinct: {instinct}</p>
      <p>Food: {food}</p>
      <p>Fire: {fire ? "Burning" : "Out"}</p>
    
      
   {/* <small>{fireDuration}s remaining</small> */}
  
      <p>Cooked Food: {cookedFood}</p>
    </div>
  );
}

export default ResourceDisplay;