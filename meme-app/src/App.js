import React, { useEffect } from 'react';

function App() {
  // Use useEffect to call the Firebase function when the page loads
  useEffect(() => {
    // Make a request to the Firebase Cloud Function to log the IP address
    fetch('https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net/logIP')
      .then(response => response.text())
      .then(data => console.log(data)) // Log success message in the console
      .catch(error => console.error('Error logging IP:', error)); // Handle error
  }, []); // The empty array ensures this runs only once when the component mounts

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      
      {/* Header Section */}
      <header style={{ paddingBottom: '30px' }}>
        <h1>Welcome to MemeLand!</h1>
        <p>Your ultimate source for the best memes!</p>
      </header>
      
      {/* Top Memes Section */}
      <section style={{ paddingBottom: '50px' }}>
        <h2>Top Meme</h2>
        <div className="meme" style={{ margin: '20px auto', maxWidth: '600px' }}>
          <img
            src="https://media.sproutsocial.com/uploads/meme-example.jpg"
            alt="Top Meme"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <p style={{ paddingTop: '10px' }}>This is one of the top trending memes!</p>
        </div>
      </section>

      {/* Classic Memes Section */}
      <section>
        <h2>Classic Meme</h2>
        <div className="meme" style={{ margin: '20px auto', maxWidth: '600px' }}>
          <img
            src="https://media.snl.no/media/139142/standard_compressed_willy-wonka.jpg"
            alt="Classic Meme"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <p style={{ paddingTop: '10px' }}>Willy Wonka - A timeless meme classic!</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{ marginTop: '50px', padding: '20px', backgroundColor: '#f4f4f4' }}>
        <p>© 2024 MemeLand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
