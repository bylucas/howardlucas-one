const insertIndexLinks = document.querySelector('.index-wrap')

 cheatLinks.forEach((cheatlink) => {
  const urlLink = cheatlink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content"><h2><a href="/cheat-sheets/${newLink}.html">${cheatlink}</a></h2></div>`;
  insertIndexLinks.innerHTML += html;
})