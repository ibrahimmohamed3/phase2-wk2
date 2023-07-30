import React from 'react';

const BotCollection = ({ bots, addToArmy }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>Name: {bot.name}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <button onClick={() => addToArmy(bot)}>Add to Army</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;