"use strict";

import { QUOTES, VIDEOS } from "../data/data.js";

function init() {
    displayQuote();
    displayVideo();

    setInterval(displayTimer, 1000);
    displayTimer();

    document.querySelectorAll(".navigation").forEach(el => {
        el.addEventListener('click', navigation);
    });

    document.querySelector("#extra").addEventListener("click", showNavigation);
    document.querySelector("#close").addEventListener("click", hideNavigation);
}

function navigation() {
    const $navigation = document.querySelectorAll(".navigation");
    const $sections = document.querySelectorAll("section");
    const $header = document.querySelector("h1");

    if ($navigation[0].id === "hidden") {
        $navigation[0].id = "";
        $navigation[1].id = "hidden";

        $sections[1].id = "";
        $sections[0].id = "hidden";

        $header.innerHTML = "Video of the day";

    } else if ($navigation[1].id === "hidden") {
        $navigation[1].id = "";
        $navigation[0].id = "hidden";

        $sections[0].id = "";
        $sections[1].id = "hidden";

        $header.innerHTML = "Quote of the day";
    }
    console.log($navigation);
}

function getRandomIndex(maxNumber) {
    const randomIndex = Math.floor(Math.random() * maxNumber);
    return randomIndex
}

function showNavigation() {
    const $nav = document.querySelector("#nav");
    $nav.classList.remove("hidden");
}   

function hideNavigation() {
    const $nav = document.querySelector("#nav");
    $nav.classList.add("hidden");
}

function displayQuote() {
    const $quote = document.querySelector("#quote");
    const storedDate = JSON.parse(localStorage.getItem("dailyQuote"));
    const today = new Date().toDateString();
    const randomIndex = getRandomIndex(QUOTES.length)
    let quote;

    if (storedDate && storedDate.date === today) {
        quote = storedDate.quote;
    } else {
        quote = QUOTES[randomIndex];
        localStorage.setItem("dailyQuote", JSON.stringify({ quote, date: today }))
    } 

    $quote.innerHTML = `<h2>${quote}</h2>`
}

function displayVideo() {
    const $video = document.querySelector("#video");
    const today = new Date().toDateString();
    const storedDate = JSON.parse(localStorage.getItem("dailyVideo"));
    const randomIndex = getRandomIndex(VIDEOS.length);
    let video;

    if (storedDate && storedDate.date === today) {
        video = storedDate.video;
    } else {
        video = VIDEOS[randomIndex];
        localStorage.setItem("dailyVideo", JSON.stringify({ video, date: today }))
    } 

    $video.innerHTML = `<a href="${video}" target="_blank">Video</a>`
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