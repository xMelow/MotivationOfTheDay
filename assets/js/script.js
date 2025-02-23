"use strict";

import { getQuote } from "./api.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    displayQuote();
    setInterval(displayTimer, 1000);
    displayTimer();

    document.querySelector("#openSidebar").addEventListener("click", navigation);
    document.querySelector("#closeSidebar").addEventListener("click", navigation);
}

function navigation() {
    const $sidebar = document.querySelector("#sidebar");
    if ($sidebar.classList.contains("hidden")) {
        $sidebar.classList.remove("hidden");
    } else {
        $sidebar.classList.add("hidden");
    }
}

async function displayQuote() {
    const $quote = document.querySelector("#quote");
    const quote = await getQuote();
    $quote.innerHTML = `<h2>${quote}</h2>`;
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
