function initPageState(e) {
    var settings = browser.storage.sync.get("domain-intercept");

    if(typeof settings.enabled !== "undefined" && settings.enabled === true){
        document.getElementById("interceptOn").setAttribute("checked", true);
        document.getElementById("interceptOff").removeAttribute("checked");
    }else{
        document.getElementById("interceptOn").removeAttribute("checked");
        document.getElementById("interceptOff").setAttribute("checked", true);
    }

    // TODO generate record pairs and write them to the page
}

function saveEnabled(enabled) {
    alert("saving enabled state as " + enabled)
    var settings = browser.storage.sync.get("domain-intercept");
    settings.enabled = enabled
    browser.storage.sync.set({

    })
}

function clickEnable() {
    saveEnabled(true);
}

function clickDisable() {
    saveEnabled(false);
}

window.onload = initPageState;
