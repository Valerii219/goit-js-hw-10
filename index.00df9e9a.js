!function(){function e(){var e="https://api.thecatapi.com/v1",n="live_PeQIm7clvMSlGltRB8qyWPC8h4vJpnzq15HYHXZFt4wayVOb6jvRMCRXSexktexb";return fetch("".concat(e,"/breeds?key=").concat(n)).then((function(e){if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()}))}var n=document.querySelector(".breed-select");n.addEventListener("change",(function(t){n.value;e().then((function(e){n.insertAdjacentHTML("beforeend",e.breeds.map((function(e){return e.id,'<option value="${id}">${id}</option>)'.join("")})))})).catch((function(e){return console.error(e)}))})),console.dir(n)}();
//# sourceMappingURL=index.00df9e9a.js.map