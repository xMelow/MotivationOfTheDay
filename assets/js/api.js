"use strict";

const quotesApiUrl = "https://quoteapi-rboj.onrender.com";

export async function getQuoteOfTheDay() {
    const request = await fetch(`${quotesApiUrl}/quote`);
    const response = await request.json();
    return response;
}