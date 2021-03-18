// ==UserScript==
// @name         alcumus ad remover
// @namespace    https://github.com/thispageisntactuallyhere
// @version      1
// @description  take over the world
// @author       volkie boy
// @match        https://artofproblemsolving.com/*
// @grant        none
// @run-at       document-start
// @license      MIT
// ==/UserScript==

setTimeout(function() {
    let ad = document.getElementsByClassName("ready-for-next")[0];
    let side = document.getElementById("side-column");
    let log = document.getElementsByClassName("aops-scrollbar-not-visible")[0];

    ad.remove();
    log.style.height=(side.offsetHeight-306)+"px";

}, 2000);
