document.addEventListener("DOMContentLoaded", () => {
    const startupToggle = document.querySelector("#startupToggle");

    chrome.storage.sync.get("openOnStartup", (data) =>{
        startupToggle.checked = data.openOnStartup || false;
    });

    startupToggle.addEventListener("change", () => {
        chrome.storage.sync.set({ openOnStartup: startupToggle.checked })
    })

})