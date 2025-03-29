"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("#themeSelector").addEventListener("change", selectTheme);
    document.querySelectorAll(".color-btn").forEach(el => {
        el.addEventListener("click", selectAccentColor);
    });

    setupTheme();
}

function selectTheme(e) {
    const newTheme = e.target.value || "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}

function selectAccentColor(e) {
    const selectedColor = e.target.dataset.color || "#44B840";
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

    if ($themeSelector) {
        $themeSelector.value = savedTheme;
    }

    $colorButtons.forEach((btn) => {
        if (btn.dataset.color === savedAccent) {
            btn.classList.add("selected");
        } else {
            btn.classList.remove("selected");
        }
    });
}

export { setupTheme }