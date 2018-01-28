browser.browserAction.onClicked.addListener(openSettingsPage);

function openSettingsPage() {
    browser.tabs.create({
        active: true,
        url: "/domains.html"
    });
}
