//Bascic Links

const basicLinks = [
  'Variables',
  'Strings',
  'Common String Methods'
]

const controlLinks = [
  'Break and Continue',
  'Do While Loops',
  'Else If Statements'
]

const insertNavLinks = document.querySelector('.insert-basic-links')
const insertNavLinks2 = document.querySelector('.insert-control-links')
const insertCatLinks = document.querySelector('.card-wrap')
const insertIndexLinks = document.querySelector('.index-wrap')
const bottomLinks = document.querySelector(".related-wrap");

const siteLinks = basicLinks

//Side Navigation
 siteLinks.forEach((sitelink) => {
  const urlLink = sitelink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<li><a href="/javascript/basics/${newLink}.html">${sitelink}</a></li>`;
  insertNavLinks.innerHTML += html;
})

 controlLinks.forEach((controllink) => {
  const urlLink = controllink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<li><a href="/javascript/control-flow/${newLink}.html">${controllink}</a></li>`;
  insertNavLinks2.innerHTML += html;
})

const insertLinks = (() => {

  switch (linkTitle) {
  case 'Basics':
    siteLinks.forEach((sitelink) => {
  const urlLink = sitelink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content"><h2><a href="/javascript/basics/${newLink}.html">${sitelink}</a></h2></div>`;
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

  case 'Javascript':
    siteLinks.forEach((sitelink) => {
  const urlLink = sitelink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content"><h2><a href="/javascript/basics/${newLink}.html">${sitelink}</a></h2><div class="meta"><span class="cat-links">#<a href="/javascript/basics/">Basics</a></span></div></div>`;
  insertIndexLinks.innerHTML += html;
})
    break
  default:
    siteLinks.forEach((sitelink) => {
      const docTitle = linkTitle;
  if (sitelink !== docTitle) {
    const urlLink = sitelink.toLowerCase();
    let newLink = urlLink.split(" ").join("-");
    let html = `<div class="related-post">
    <h3><a href="/javascript/basics/${newLink}.html">${sitelink}</a></h3>
    </div>`;
    bottomLinks.innerHTML += html;
  }
})
    break
  }
})

insertLinks()

const insertActiveLinks = document.querySelectorAll('.menu-wrap a')

const activeLinks = (() => {
  basicLinks.forEach((basiclink) => {   
      if(basiclink == linkTitle) {
          insertActiveLinks.forEach((activelink) => {
            if(activelink.textContent == basiclink) {
              activelink.classList.add('active')
            }
          })
        }
      })
  controlLinks.forEach((controllink) => {   
      if(controllink == linkTitle) {
          insertActiveLinks.forEach((activelink) => {
            if(activelink.textContent == controllink) {
              activelink.classList.add('active')
            }
          })
        }
      })
})

activeLinks()

