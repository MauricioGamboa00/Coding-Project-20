// Task 2 Create Dropdown Filter

import React, { useState } from "react"; // Importing React and useState hook

import Gallery from "./Components/Gallery"; // Importing the Gallery component

import DestinationSelector from "./Components/DestinationSelector"; // Importing the DestinationSelector component

import './styles/styles.css'; // Importing the CSS styles

// Main App component

function App() {

  const [tours, setTours] = useState([]); // State to hold the tours data

  // Tracking selected tour destinations

  const [selectedTour, setSelectedTour] = useState("all"); // State to hold the selected tour destination

  const filteredTours = selectedTour === "all" ? tours : tours.filter((tour) => tour.name === selectedTour); // Filter tours based on selected destination


  return(
    <main>
      <h1>Our Tours</h1>

      <DestinationSelector tours={tours} selectedTour={selectedTour} setSelectedTour={setSelectedTour} /> {/* Destination selector component */}
      </main>
  );

}

export default App; // Exporting the App component as default export
