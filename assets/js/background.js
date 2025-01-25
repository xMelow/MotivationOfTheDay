let openedOnStartup = false;

chrome.runtime.onStartup.addListener(() => {
    if (!openedOnStartup) {
        openedOnStartup = true;
        chrome.action.openPopup();
    }
});

chrome.windows.onCreated.addListener(() => {
    chrome.action.openPopup();
});
