"use strict";

export async function getQuote() {
    const response = await fetch("https://raw.githubusercontent.com/xMelow/MotivationOfTheDay/main/assets/data/quotes.json");
    const data = await response.json();
    const quotes = data.quotes;

    // Generate a consistent "random" index based on the date
    const today = new Date().toISOString().split("T")[0];
    const seed = today.split("-").join("");
    
    let index = parseInt(seed, 10) % quotes.length; 
    
    return quotes[index];
}