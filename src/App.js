import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const  App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    //Fetch dat
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bot data:', error));
  }, []);

  const addToArmy = (bot) => {
  
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    // Discharge the bot from the army
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeFromService = (botId) => {
    // Delete the bot both from the list
    fetch(`http://localhost:8002/bots${botId}`, 
    { method: 'DELETE' })
      .then(() => {
        setArmy(army.filter((b) => b.id !== botId));
        setBots(bots.filter((b) => b.id !== botId));
      })
      .catch((error) => console.error('Error discharging bot:', error));
  };

  return (
    <div className="app-container">
      <h1 className="app-header">Bot Army Management</h1>
      <div className="app-content">
        <BotCollection bots={bots} addToArmy={addToArmy} />
        <YourBotArmy army={army} releaseFromArmy={releaseFromArmy} dischargeFromService={dischargeFromService} />
      </div>
    </div>
  );
};

export default App;