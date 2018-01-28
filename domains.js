const onButton = document.getElementById("interceptOn"),
    offButton = document.getElementById("interceptOff");

function initPageState(e) {
    const settings = browser.storage.local.get("domain-intercept");

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
    var settings = browser.storage.local.get("domain-intercept");
    settings.enabled = enabled;
    browser.storage.local.set(settings);
}

function clickDelete(el) {
    // TODO delete this row and remove its entry from storage
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
