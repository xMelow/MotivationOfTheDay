chrome.runtime.onStartup.addListener(() => {
    chrome.storage.sync.get("enableStartUp", (data) => {
        console.log("Startup setting retrieved:", data);

        const setting = data.enableStartUp || "none"; 

        if (setting === "startUp") {
            chrome.action.openPopup();
        } else if (setting === "window") {
            chrome.windows.create({ url: "index.html", type: "popup" });
        } else if (setting === "tabs") {
            chrome.tabs.create({ url: "index.html" });
        }
    });
});

// Also listen for new tab creation
chrome.tabs.onCreated.addListener(() => {
    chrome.storage.sync.get("enableStartUp", (data) => {
        console.log("New tab setting:", data);

        if (data.enableStartUp === "tabs") {
            chrome.tabs.create({ url: "index.html" });
        }
    });
});
