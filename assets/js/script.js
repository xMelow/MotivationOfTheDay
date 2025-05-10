"use strict";

import { setupTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", init);

let quotes = [];

async function init() {
    quotes = await loadQuotes();
    displayQuote();
    setInterval(displayTimer, 1000);
    displayTimer();

    document.querySelector("#openSidebar").addEventListener("click", navigation);
    document.querySelector("#closeSidebar").addEventListener("click", navigation);

    setupTheme();
}

function navigation() {
    const $sidebar = document.querySelector("#sidebar");
    if ($sidebar.classList.contains("hidden")) {
        $sidebar.classList.remove("hidden");
    } else {
        $sidebar.classList.add("hidden");
    }
}

function displayQuote() {
    const $quote = document.querySelector("#quote");
    const quote = getQuote();
    $quote.innerHTML = `<h2>${quote}</h2>`;
}

async function loadQuotes() {
    const res = await fetch(chrome.runtime.getURL("/assets/data/quotes.json"));
    return await res.json();
}

function getQuote() {
    const quotesLength = 200;
    const today = new Date().toISOString().split("T")[0];
    const seed = today.replace(/-/g, "");
    const index = hashStringToInt(seed, quotesLength);
    return quotes.quotes[index];
}

function hashStringToInt(str, max) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash) % max;
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
