import React, { useState, useEffect } from 'react';
import ResourceDisplay from './components/ResourceDisplay';
import ButtonPanel from './components/ButtonPanel';
import Log from './components/Log';

function App() {
  const [cp, setCp] = useState(0); //TODO: refactor the variable cp, I don't like it.
  const [instinct, setInstinct] = useState(10); 
  const [log, setLog] = useState([]); //setting log info
  const [food, setFood] = useState(0); // track food amount
  const [fire, setFire] = useState(false); //track if fire is burning
  const [cookedFood, setCookedFood] = useState(0);
  const [fireDuration, setFireDuration] = useState(0); // in seconds



  useEffect(() => {
    const regen = setInterval(() => {
      setInstinct(i => (i < 10 ? i + 1 : i));
    }, 15000);
    return () => clearInterval(regen);
  }, []);

  const addLog = (entry) => {
    setLog(prev => [...prev.slice(-19), entry]);
  };

  const handleContemplate = () => {
    setCp(cp + 1);
    addLog("You contemplate existence. (+1 CP)");
  };

const handleForage = () => {
  setFood(food + 1);
  addLog("You foraged and found berries.");
};

const handleKindleFire = () => {
  if (!fire) {
    setFire(true);
    setFireDuration(120);
    addLog("You've kindled a fire!");

  const fireInterval = setInterval(() => {
    setFireDuration(prev => {
      if (prev <= 1) {
        clearInterval(fireInterval);
        setFire(false);
        addLog("The fire has gone out.");
        return 0;
      }
      return prev -1;
    });
  }, 1000);
    
  } else {
    addLog("The fire is already burning.");
  }
};


const handleCookFood = () => {
  if (!fire) {
    addLog("You need a fire to cook.");
    return;
  }
  if (food < 1) {
    addLog("You have no raw food to cook.");
    return;
  }

  setFood(food - 1);
  setCookedFood(cookedFood + 1);
  addLog("You cook a piece of food. (+1 cooked food)");

};



  return (
    <div>
      <h1>Silicon Prophet</h1>
      <ResourceDisplay
        cp={cp} 
        instinct={instinct} 
        food={food} 
        fire={fire}
        cookedFood={cookedFood}
        fireDuration={fireDuration}
      />
      <ButtonPanel
         onContemplate={handleContemplate} 
         onForage={handleForage}
         onKindleFire={handleKindleFire}
         onCookFood={handleCookFood}
         fire={fire}
         fireDuration={fireDuration}

      />

      <Log entries={log} />
    </div>
  );
}

export default App;
