const basicLinks=["Variables","Strings","Common String Methods"],insertNavLinks=document.querySelector(".insert-links"),insertCatLinks=document.querySelector(".card-wrap"),insertIndexLinks=document.querySelector(".index-wrap"),bottomLinks=document.querySelector(".related-wrap");basicLinks.forEach((i=>{let s=`<li><a href="/javascript/basics/${i.toLowerCase().split(" ").join("-")}.html">${i}</a></li>`;insertNavLinks.innerHTML+=s}));const insertLinks=()=>{switch(linkTitle){case"Basics":basicLinks.forEach((i=>{let s=`<div class="index-content"><h2><a href="/javascript/basics/${i.toLowerCase().split(" ").join("-")}.html">${i}</a></h2></div>`;insertCatLinks.innerHTML+=s}));break;case"Javascript":basicLinks.forEach((i=>{let s=`<div class="index-content"><h2><a href="/javascript/basics/${i.toLowerCase().split(" ").join("-")}.html">${i}</a></h2><div class="meta"><span class="cat-links">#<a href="/javascript/basics/">Basics</a></span></div></div>`;insertIndexLinks.innerHTML+=s}));break;default:basicLinks.forEach((i=>{if(i!==linkTitle){let s=`<div class="related-post">\n    <h3><a href="/javascript/basics/${i.toLowerCase().split(" ").join("-")}.html">${i}</a></h3>\n    </div>`;bottomLinks.innerHTML+=s}}))}};insertLinks();const insertActiveLinks=document.querySelectorAll(".insert-links li a"),activeLinks=()=>{basicLinks.forEach((i=>{i==linkTitle&&insertActiveLinks.forEach((s=>{s.textContent==i&&s.classList.add("active")}))}))};activeLinks();