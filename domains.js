const onButton = document.getElementById("interceptOn"),
    offButton = document.getElementById("interceptOff");

function initPageState(e) {
    var settings = browser.storage.sync.get("domain-intercept");

    if(typeof settings.enabled !== "undefined" && settings.enabled === true){
        onButton.setAttribute("checked", true);
        offButton.removeAttribute("checked");
    }else{
        onButton.removeAttribute("checked");
        offButton.setAttribute("checked", true);
    }

    // TODO generate record pairs and write them to the page
}

function saveEnabled(enabled) {
    var settings = browser.storage.sync.get("domain-intercept");
    settings.enabled = enabled;
    browser.storage.sync.set(settings);
}

function clickEnable() {
    saveEnabled(true);
}

function clickDisable() {
    saveEnabled(false);
}

window.onload = initPageState;
onButton.onclick = clickEnable;
offButton.onclick = clickDisable;
