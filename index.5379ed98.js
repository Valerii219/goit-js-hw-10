const e=document.querySelector(".breed-select"),t=document.querySelector(".cat-info");e.addEventListener("change",(function(){e.value&&(e.value,fetch("https://api.thecatapi.com/v1/images/search?breed_ids=").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>e)).catch((e=>{console.error(e)}))).then((e=>{const n=e.map((e=>`<ul>\n      <img src="${e.url}" alt="${e.name}">\n      <li>${e.id}</li>\n      <li>${e.description}</li>\n      <li>${e.temperament}</li>\n    </ul>`)).join("");t.innerHTML=n})).catch((e=>{console.error(e)}))})),fetch("https://api.thecatapi.com/v1/breeds?key=live_PeQIm7clvMSlGltRB8qyWPC8h4vJpnzq15HYHXZFt4wayVOb6jvRMCRXSexktexb").then((e=>{if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>e)).catch((e=>{console.error(e)})).then((t=>{const n=t.map((e=>`<option value="${e.id}">${e.name}</option>\n    `)).join("");e.innerHTML=n})).catch((e=>{console.error(e)}));
//# sourceMappingURL=index.5379ed98.js.map
