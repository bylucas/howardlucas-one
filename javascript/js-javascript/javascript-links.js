//Bascic Links

const basicLinks = [
  'Variables',
  'Strings',
  'Common String Methods'
]

const insertNavLinks = document.querySelector('.insert-links')
const insertCatLinks = document.querySelector('.card-wrap')
const insertIndexLinks = document.querySelector('.index-wrap')
const bottomLinks = document.querySelector(".related-wrap");

 basicLinks.forEach((basiclink) => {
  const urlLink = basiclink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<li><a href="/javascript/basics/${newLink}.html">${basiclink}</a></li>`;
  insertNavLinks.innerHTML += html;
})

const insertLinks = (() => {

  switch (linkTitle) {
  case 'Basics':
    basicLinks.forEach((basiclink) => {
  const urlLink = basiclink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content"><h2><a href="/javascript/basics/${newLink}.html">${basiclink}</a></h2></div>`;
  insertCatLinks.innerHTML += html;
})
    break

  case 'Javascript':
    basicLinks.forEach((basiclink) => {
  const urlLink = basiclink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content"><h2><a href="/javascript/basics/${newLink}.html">${basiclink}</a></h2><div class="meta"><span class="cat-links">#<a href="/javascript/basics/">Basics</a></span></div></div>`;
  insertIndexLinks.innerHTML += html;
})
    break
  default:
    basicLinks.forEach((basiclink) => {
      const docTitle = linkTitle;
  if (basiclink !== docTitle) {
    const urlLink = basiclink.toLowerCase();
    let newLink = urlLink.split(" ").join("-");
    let html = `<div class="related-post">
    <h3><a href="/javascript/basics/${newLink}.html">${basiclink}</a></h3>
    </div>`;
    bottomLinks.innerHTML += html;
  }
})
    break
  }
})

insertLinks()

const insertActiveLinks = document.querySelectorAll('.insert-links li a')

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
})

activeLinks()

