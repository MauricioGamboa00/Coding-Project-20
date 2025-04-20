// Task 1 Fetch & Store Tour Data

import React, { useState, useEffect } from "react"; // Importing React, useState and useEffect 

import TourCard from "./TourCard"; // Importing the TourCard component

const url = "https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project"; // URL to fetch the tours data from the Api that uses a proxy to avoid permission issues

const Gallery = ({ tours, setTours, onRemove }) => { // Gallery component to display the list of tours

    const [loading, setLoading] = useState(true); // State to manage the loading state
    
    const [error, setError] = useState(false); // State to manage error
    

    

    const fetchTours = async () => { // Function to fetch tours data from the API
        try {
            setLoading(true); // Set loading to true before fetching data
            const response = await fetch(url); // Fetch data from the API

            if (!response.ok) { // Check if the response is not ok
                throw new Error("Network response was not ok"); // Throw an error if response is not ok
            }

            const data = await response.json(); // Parse the response data to JSON format

            setTours(data); // Set the tours state with the fetched data
        } catch (error) { // Catch any errors that occur during the fetch
            console.error("Error fetching tours:", error); // Log the error to the console
            
            setError(true); // Set error to true if there is an error


            setLoading(false); // Set loading to false after data is fetched

        } finally {
            setLoading(false); // Set loading to false after data is fetched

        


        }

    };

    useEffect(() => { // useEffect hook to fetch data when the component is loaded
        fetchTours(); // Call the fetchTours function to fetch data
 }, []); // Empty array to run only once when the component is loaded


    // Handling of loading and error states 

if (loading) {
    return <h2>Loading...</h2>; // Display loading message while data is being fetched
    
}

if (error) {
    return <h2>Error fetching tours.</h2>; // Display error message if there is an error while fetching data

}

}