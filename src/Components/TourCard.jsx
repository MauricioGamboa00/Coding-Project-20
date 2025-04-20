// Task 3 Render Tour Cards

import React, { useState } from "react"; // Importing React and useState 

const TourCard = ({ id, name, image, info, price, onRemove }) => { // TourCard component that displays individual tour details

    const [readMore, setReadMore] = useState(false); // State to manage read more 

    const toggleReadMore = () => { // Function to toggle read more state

        setReadMore(!readMore); // Toggle the read more 
    }
        return (
            <article className="tour-card">
                <img src={image} alt={name} className="tour-image" /> {/* Display the tour image */}

                <div className="tour-info">
                    <div className="tour-header">
                        <h3>{name}</h3> {/* Display the tour name */}
                        <h4>${price}</h4> {/* Display the tour price */}
                </div>

                <p>{readMore ? info : `${info.substring(0, 200)}...`}</p> {/* Display the tour info with read more functionality */}

                <button className="read-more" onClick={toggleReadMore}>
                    {readMore ? "Show Less" : "Read More"} {/* Button to toggle read more */}
                </button>
                <button className="not-interested" onClick={() => onRemove(id)}>Not Interested</button> {/* Button to remove the tour */}
                </div>
            </article>
        );
    }

    export default TourCard; // Exporting the TourCard component so it can be used in Gallery.jsx