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

   // Task 3 Render Tour Cards
  
   const removeTour = (id) => { 

    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id)); // Filter out tour by id

    const updatedTours = tours.filter((tour) => tour.id !== id); // Update the tours state with the filtered tours

    // Task 4 Reset View

    if (
      selectedTour !== "all" &&
      updatedTours.filter((tour) => tour.name === selectedTour).length === 0  
    ) {
      setSelectedTour("all"); // Reset selected tour to "all" if no tours match the selected destination
    }
    return updatedTours; // Return the updated tours state
    
  };
  


  return(
    <main>
      <h1>Our Tours</h1>

      <DestinationSelector tours={tours} selectedTour={selectedTour} setSelectedTour={setSelectedTour} /> {/* Destination selector component */}

        <Gallery tours={tours} setTours ={setTours} onRemove={removeTour} /> {/* Pass tours and removeTour function as props to Gallery */}  
    </main>  
  );

}

export default App; // Exporting the App component as default export
