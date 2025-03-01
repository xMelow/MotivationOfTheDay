"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("#themeSelector").addEventListener("click", selectTheme);
    document.querySelectorAll(".color-btn").forEach(el => {
        el.addEventListener("click", selectAccentColor);
    });

    setupTheme();
}

function selectTheme(e) {
    e.preventDefault();
    const newTheme = e.target.value;
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}

function selectAccentColor(e) {
    e.preventDefault();
    console.log("color");
    console.log(e.target.value);
    const selectedColor = button.dataset.color;
    document.documentElement.style.setProperty("--accent-color", selectedColor);
    localStorage.setItem("accentColor", selectedColor);
}

function setupTheme() {
    const $themeSelector = document.querySelector("#themeSelector");
    const $colorButtons = document.querySelectorAll(".color-btn");

    const savedTheme = localStorage.getItem("theme") || "dark";
    const savedAccent = localStorage.getItem("accentColor") || "#44B840";

    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.style.setProperty("--accent-color", savedAccent);
    $themeSelector.value = savedTheme;
    $colorButtons.value = savedAccent;
}

export { setupTheme }