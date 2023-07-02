import React, { useState } from 'react';
import "../styles/events.css";

function Events() {
    const events = [
        { name: 'London Games Festival', date: '2023-07-01', category: 'FPS', game: 'Valorant'},
        { name: 'WASD Live', date: '2023-07-05', category: 'RPG', game: 'Genshin Impact'},
        { name: 'Insomnia Gaming Festival',date: '2023-07-10', category: 'Action', game: 'Call of Duty'},
        { name: 'GamesBeat Summit',date: '2023-07-20', category: 'Open-World', game: 'GTA 5'}
      ];

  

  return (
    <div>
      <header>
        <h1>Events</h1>
      </header>
      <div className="user-details">
        <h3>Plan your events!</h3>
        <p>Event Name:<input type='text' className='text1'></input>  </p>
        <p>Event Date: <input type='date'></input>  </p>
        <p>Game: <input type='text' className='text1'></input>  </p>
        <p>Category:<input type='text' className='text1'></input>  </p>
        <center><button>Save</button></center>

      </div>
      <center><ul style={{ listStyleType: 'none'  }} className="list-element">
              {events.map((event, index) => (
                <li key={index}>
                  <p>Event Name: {event.name}</p>
                  <p>Event Date: {event.date}</p>
                  <p>Category: {event.category}</p>
                  <p>Game: {event.game}</p>
                </li>
              ))}
            </ul></center>
      </div>
  );
}

export default Events;
