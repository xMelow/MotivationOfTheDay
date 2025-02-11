chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get("hasOpenedBefore", (data) => {
        const hasOpened = data.hasOpenedBefore || false;

        chrome.storage.sync.get("setting", (userSetting) => {
            const setting = userSetting.setting || "startUp";
            console.log("Startup setting:", setting, "Has opened before:", hasOpened);

            if (setting === "firstTime" && !hasOpened) {
                chrome.action.openPopup();
                chrome.storage.local.set({ hasOpenedBefore: true });
            } else if (setting === "startUp") {
                chrome.action.openPopup();
            }
        });
    });
});

chrome.tabs.onCreated.addListener(() => {
    chrome.storage.sync.get("setting", (data) => {
        if (data.setting === "tabs") {
            chrome.action.openPopup();
        }
    });
});

chrome.windows.onCreated.addListener(() => {
    chrome.storage.sync.get("setting", (data) => {
        if (data.setting === "window") {
            chrome.action.openPopup();
        }
    });
});
