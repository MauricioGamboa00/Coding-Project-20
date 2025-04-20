// Task 2 Create Dropdown Filter

import React from "react";  // Importing React

const DestinationSelector = ({ tours, selectedTour, setSelectedTour }) => { // DestinationSelector component to filter tours by destination
    return (
        <div classname = "destination-selector"> {/* Container for the destination selector */}

            <label htmlFor="destination">Select a destination:</label> {/* Label for the dropdown menu */}

            <select id="destination" value={selectedTour} onChange={(e) => setSelectedTour(e.target.value)}> {/* Dropdown to select destination */}

                <option value="all">All</option> {/* Option to show all tours */}

                {tours.map((tour) => ( // Map through the tours to create options for each destination

                    <option key={tour.id} value={tour.name}>{tour.name}</option> // Option for each tour destination
                ))}
            </select> 
        </div> 
    );
}

export default DestinationSelector; // Exporting the DestinationSelector component as default export