!function(){var n="live_PeQIm7clvMSlGltRB8qyWPC8h4vJpnzq15HYHXZFt4wayVOb6jvRMCRXSexktexb";var t=document.querySelector(".breed-select"),e=document.querySelector(".cat-info"),c=document.querySelector("p.loader"),o=document.querySelector(".error");function i(){c.style.display="block"}function a(){c.style.display="none"}i(),fetch("".concat("https://api.thecatapi.com/v1","/breeds?api_key=").concat(n)).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()})).then((function(n){return n})).catch((function(n){console.error(n)})).then((function(n){var e=n.map((function(n){return'<option value="'.concat(n.id,'">').concat(n.name,"</option>\n    ")})).join("");t.innerHTML=e})).catch((function(n){o.style.display="block",a()})).finally((function(){a()})),t.addEventListener("change",(function(){var c,r=t.options[t.selectedIndex].value;i(),t.style.display="none",e.style.display="none",(c=r,fetch("".concat("https://api.thecatapi.com/v1/images/search111","?api_key=").concat(n,"&breed_ids=").concat(c)).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()})).then((function(n){return n})).catch((function(n){console.error(n)}))).then((function(n){var t=n.map((function(n){return'<ul>\n    <img src="'.concat(n.url,'" alt="').concat(n.name,'">\n    <li>').concat(n.breeds[0].name,"</li>\n    <li>").concat(n.breeds[0].description,"</li>\n    <li>").concat(n.breeds[0].temperament,"</li>\n    </ul>")})).join("");e.innerHTML=t})).catch((function(n){o.style.display="block",a()})).finally((function(){a(),t.style.display="block",e.style.display="block"}))}))}();
//# sourceMappingURL=index.887acff4.js.map
