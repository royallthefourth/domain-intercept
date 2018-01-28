function setPageState(e) {
    e.preventDefault();
    browser.storage.sync.get({
        color: document.querySelector("#color").value
    });
}

// window.onload = setPageState;
