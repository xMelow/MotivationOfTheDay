"use strict";

import { getQuoteOfTheDay } from "./api.js";

function init() {
    displayQuote();
    setInterval(displayTimer, 1000);
    displayTimer();
}

async function displayQuote() {
    const $quote = document.querySelector("#quote");
    const quote = await getQuoteOfTheDay()

    $quote.innerHTML = `<h2>${quote.quote}</h2>`
}

function displayTimer() {
    const $timer = document.querySelector("#timer");
    const now = new Date();
    const nextDay = new Date();

    nextDay.setDate(now.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);

    const timeDiff = nextDay - now;

    // convert miliseconds to -->
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    $timer.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}


init();