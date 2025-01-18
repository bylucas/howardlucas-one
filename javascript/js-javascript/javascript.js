const insertIndexLinks = document.querySelector('.index-wrap')

 basicLinks.forEach((basiclink) => {
  const urlLink = basiclink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content"><h2><a href="/javascript/basics/${newLink}.html">${basiclink}</a></h2><div class="meta"><span class="cat-links">#<a href="/javascript/basics/">Basics</a></span></div></div>`;
  insertIndexLinks.innerHTML += html;
})

 controlLinks.forEach((controllink) => {
  const urlLink = controllink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content"><h2><a href="/javascript/control-flow/${newLink}.html">${controllink}</a></h2><div class="meta"><span class="cat-links">#<a href="/javascript/control-flow/">Control Flow</a></span></div></div>`;
  insertIndexLinks.innerHTML += html;
})