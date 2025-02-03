document.addEventListener('DOMContentLoaded', function () {
    let enableStartUp = document.querySelector('#startupToggle');
    let saveButton = document.querySelector('#submit');

    chrome.storage.sync.get(['enableStartUp'], function (data) {
        enableStartUp.checked = data.enableFeature || false;
    });

    saveButton.addEventListener('click', function () {
        chrome.storage.sync.set({ enableStartUp: enableStartUp.checked }, function () {
            alert('Settings saved!');
        });
    });
});
