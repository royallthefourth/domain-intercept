/** global: browser */
"use strict";

const addButton = document.getElementById("add"),
    onButton    = document.getElementById("interceptOn"),
    offButton   = document.getElementById("interceptOff");

window.onload       = initPageState;
onButton.onclick    = (function(){setEnabled(true)});
offButton.onclick   = (function(){setEnabled(false)});
addButton.onclick   = clickAdd;

function initPageState() {
    browser.storage.local.get().then(function (settings){
        if(settings.hasOwnProperty("enabled") && settings.enabled === true){
            onButton.checked = true;
        }else{
            offButton.checked = true;
        }

        document.querySelector("tbody").innerHTML = domainRows(settings.hasOwnProperty("records") ? settings.records : {});

        document.querySelectorAll("a.delete").forEach(function(node, index) {
            node.onclick = clickDelete;
        });
    });
}

function domainRows(records) {
    var out = [];

    Object.entries(records).forEach(el => {
        out.push(domainRow(el[0], el[1]));
    });

    return out.join("\n");
}

function domainRow(from, to) {
    return `<tr><td>${from}</td><td>${to}</td><td><a href="#" class="delete">delete</a></td></tr>`;
}

function clickAdd() {
    var from = document.getElementById("from").value,
        to = document.getElementById("to").value;

    browser.storage.local.get("records").then(function (records){
        records = records.records || {};
        records[from] = to;
        browser.storage.local.set({"records": records}).then(function (){
            document.getElementById("from").value = "";
            document.getElementById("to").value = "";
            initPageState(); // this handles updates and inserts equally well without extra code
        });
    });
}

function clickDelete(ev) {
    var from = ev.target.parentElement.previousSibling.previousSibling.innerText;

    browser.storage.local.get("records").then(function (records){
        records = records.records || {};
        delete records[from];
        browser.storage.local.set({"records": records}).then(function (){
            ev.target.parentElement.parentElement.parentElement.removeChild(ev.target.parentElement.parentElement);
        });
    });
}

function setEnabled(val) {
    browser.storage.local.set({enabled: val});
}
