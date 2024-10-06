import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to MemeLand!</h1>
      <p>Your ultimate source for memes!</p>

      {/* Example of a meme */}
      <div className="meme">
        <img src="https://i.imgur.com/doge.jpg" alt="Doge Meme" />
        <p>Such wow. Much meme.</p>
      </div>
    </div>
  );
}

export default App;
