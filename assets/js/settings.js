document.addEventListener("DOMContentLoaded", () => {
    const settingDropdown = document.querySelector("#settings");
    const saveButton = document.querySelector("#submit");
    const message = document.querySelector("#message");

    chrome.storage.sync.get("enableStartUp", (data) => {
        console.log("Loaded setting:", data); // Debugging log
        settingDropdown.value = data.enableStartUp || "none";
    });

    saveButton.addEventListener("click", () => {
        chrome.storage.sync.set({ enableStartUp: settingDropdown.value }, () => {
            console.log("Saved setting:", settingDropdown.value); // Debugging log
            message.innerHTML = "<p>Settings Saved!</p>";
        });
    });
});

