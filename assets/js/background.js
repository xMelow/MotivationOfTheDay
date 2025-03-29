chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get("hasOpenedBefore", (data) => {
        const hasOpened = data.hasOpenedBefore || false;

        chrome.storage.sync.get("setting", (userSetting) => {
            const setting = userSetting.setting || "startUp";

            if (setting === "firstStartUp" && !hasOpened) {
                chrome.action.openPopup();
                chrome.storage.local.set({ hasOpenedBefore: true });
            } else if (setting === "startUp") {
                chrome.action.openPopup();
            }
        });
    });
});

chrome.storage.sync.get("setting", (data) => {
    console.log("Current setting:", data.setting);
});

chrome.tabs.onCreated.addListener(() => {
    chrome.storage.sync.get("setting", (data) => {
        console.log("Tabs event - setting:", data.setting);
        if (data.setting === "tabs") {
            chrome.action.openPopup();
        }
    });
});

chrome.windows.onCreated.addListener(() => {
    chrome.storage.sync.get("setting", (data) => {
        console.log("Windows event - setting:", data.setting);
        if (data.setting === "window") {
            chrome.action.openPopup();
        }
    });
});
