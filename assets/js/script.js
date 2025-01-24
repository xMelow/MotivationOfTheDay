"use strict";

import { QUOTES } from "../data/data.js";

function init() {
    displayQuote();
    setInterval(displayTimer, 1000);
    displayTimer();
}

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[randomIndex];
}

function displayQuote() {
    const $quote = document.querySelector("#quote");
    const storedDate = JSON.parse(localStorage.getItem("dailyQuote"));
    const today = new Date().toDateString();
    let quote;

    if (storedDate && storedDate.date === today) {
        quote = storedDate.quote;
    } else {
        quote = getRandomQuote();
        localStorage.setItem("dailyQuote", JSON.stringify({ quote, date: today }))
    } 

    $quote.innerHTML += `<h2>${quote}</h2>`
}

function displayTimer() {
    const $timer = document.querySelector("#timer");
    const now = new Date();
    const nextDay = new Date();

    nextDay.setDate(now.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);

    const timeDiff = nextDay - now;

    // convert miliseconds to ...
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    $timer.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function addFavorites() {

}

init();