const insertCatLinks = document.querySelector('.card-wrap')

const categoryLinks = (() => {
  switch (linkTitle) {
  case 'Basics':
  basicLinks.forEach((basiclink) => {
  const urlLink = basiclink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content"><h2><a href="/javascript/basics/${newLink}.html">${basiclink}</a></h2></div>`;
  insertCatLinks.innerHTML += html;
})
    break
    case 'Control Flow':
  controlLinks.forEach((controllink) => {
  const urlLink = controllink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content"><h2><a href="/javascript/control-flow/${newLink}.html">${controllink}</a></h2></div>`;
  insertCatLinks.innerHTML += html;
})
   break
  default:
    console.log('no category Posts')
}
})

categoryLinks()