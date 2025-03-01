"use strict";

import { setupTheme } from "./theme.js";


document.addEventListener("DOMContentLoaded", () => {
    setupTheme();


    const $settingsValue = document.querySelector("#settings");
    const $saveButton = document.querySelector("#submit");
    const $message = document.querySelector("#message");

    chrome.storage.sync.get("setting", (data) => {
        $settingsValue.value = data.setting || "startUp";
    });

    $saveButton.addEventListener("click", () => {
        chrome.storage.sync.set({ setting: $settingsValue.value }, () => {
            $message.innerHTML = "<p>Settings Saved!</p>";
        });
    });
});


