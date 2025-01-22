const insertIndexLinks = document.querySelector('.index-wrap')

 cssLinks.forEach((csslink) => {
  const urlLink = csslink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content"><h2><a href="/blog/css/${newLink}.html">${csslink}</a></h2><div class="meta"><span class="cat-links">#<a href="/blog/css/">Css</a></span></div></div>`;
  insertIndexLinks.innerHTML += html;
})

 cheatLinks.forEach((cheatlink) => {
  const urlLink = cheatlink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content"><h2><a href="/blog/cheat-sheets/${newLink}.html">${cheatlink}</a></h2><div class="meta"><span class="cat-links">#<a href="/blog/cheat-sheets/">Cheat-Sheets</a></span></div></div>`;
  insertIndexLinks.innerHTML += html;
})