// let openedOnStartup = false;

// chrome.runtime.onStartup.addListener(() => {
//     if (!openedOnStartup) {
//         openedOnStartup = true;
//         chrome.action.openPopup();
//     }
// });

chrome.storage.session.get("hasRun", (data) => {
    if (!data.hasRun) {
        chrome.storage.session.set({ hasRun: true });
        chrome.action.openPopup();
    }
});

// chrome.windows.onCreated.addListener(() => {
//     chrome.action.openPopup();
// });
