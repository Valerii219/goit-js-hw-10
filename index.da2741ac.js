const e=document.querySelector(".breed-select");e.addEventListener("change",(function(t){e.value;fetch("https://api.thecatapi.com/v1/breeds?key=live_PeQIm7clvMSlGltRB8qyWPC8h4vJpnzq15HYHXZFt4wayVOb6jvRMCRXSexktexb").then((e=>{if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()})).then((t=>{e.insertAdjacentHTML("beforeend",t.breeds.map((({id:e})=>'<option value="${id}">${id}</option>)'.join(""))))})).catch((e=>console.error(e)))})),console.dir(e);
//# sourceMappingURL=index.da2741ac.js.map
