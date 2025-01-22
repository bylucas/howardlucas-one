const insertCatLinks = document.querySelector('.card-wrap')

const categoryLinks = (() => {
  switch (linkTitle) {
  case 'Css':
  cssLinks.forEach((csslink) => {
  const urlLink = csslink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content"><h2><a href="/blog/css/${newLink}.html">${csslink}</a></h2></div>`;
  insertCatLinks.innerHTML += html;
})
    break
    case 'CheatSheets':
  cheatLinks.forEach((cheatlink) => {
  const urlLink = cheatlink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content"><h2><a href="/blog/cheat-sheets/${newLink}.html">${cheatlink}</a></h2></div>`;
  insertCatLinks.innerHTML += html;
})
   break
  default:
    console.log('no category Posts')
}
})

categoryLinks()