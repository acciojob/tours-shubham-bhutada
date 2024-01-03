import React, { useState, useEffect } from "react";
import tourData from "../data/tourData";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setTours(tourData);
      setLoading(false);
    }, 1000); // Simulating a 1-second delay for loading
  }, []);

  const handleDeleteTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  const handleRefresh = () => {
    // Simulate fetching data from an API
    setLoading(true);
    setTimeout(() => {
      setTours([
        // Your tour data goes here
      ]);
      setLoading(false);
    }, 1000); // Simulating a 1-second delay for loading
  };

  return (
    <main id="main">
      <h1 className="title">Tour List</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : tours.length === 0 ? (
        <div>
          <p className="loading">No more tours</p>
          <button className="btn" onClick={handleRefresh}>
            Refresh
          </button>
        </div>
      ) : (
        <div>
          {tours.map((tour) => (
            <div key={tour.id} className="single-tour">
              <h2>{tour.name}</h2>
              <p className="tour-info">
                {tour.info.length > 200
                  ? tour.info.slice(0, 200) + "..."
                  : tour.info}
              </p>
              <p className="tour-price">Price: ${tour.price}</p>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTour(tour.id)}
              >
                Delete Tour
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default App;
