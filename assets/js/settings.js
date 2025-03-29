"use strict";

import { setupTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("#submit").addEventListener("click", saveSettings);
    setupTheme();
    getSetting();
}

function getSetting() {
    chrome.storage.sync.get("setting", (data) => {
        document.querySelector("#settings select").value = data.setting;
    })
}

function saveSettings(e) {
    e.preventDefault();
    const $settingvalue = document.querySelector("#settings select");
    
    chrome.storage.sync.set({ setting: $settingvalue.value });

    displayMessage();
}

function displayMessage() {
    document.querySelector("#message").innerHTML = "<p>Setting Saved!</p>";
}
