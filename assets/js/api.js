"use strict";

const quotesApiUrl = "http://localhost:3000";

export async function getQuoteOfTheDay() {
    const request = await fetch(`${quotesApiUrl}/quote`);
    const response = await request.json();
    return response;
}