"use strict";

const quotesApiUrl = "https://quoteapi-rboj.onrender.com";

export async function getQuoteOfTheDay() {
    const request = await fetch(`${quotesApiUrl}/quote`);
    const response = await request.json();
    return response;
}

export async function getQuote() {
    const response = await fetch("https://raw.githubusercontent.com/xMelow/MotivationOfTheDay/main/assets/data/quotes.json");
    const data = await response.json();
    const quotes = data.quotes;

    // Generate a consistent "random" index based on the date
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
    const seed = today.split("-").join(""); // Convert date to a number (20250223)
    
    // Convert seed to an index
    let index = parseInt(seed, 10) % quotes.length; 
    
    return quotes[index]; // Select the same quote for all users daily
}