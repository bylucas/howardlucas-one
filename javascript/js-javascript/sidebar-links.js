const insertNavLinks = document.querySelector('.insert-basic-links')
const insertNavLinks2 = document.querySelector('.insert-control-links')


//Side Navigation
const sidebarLinks = (() => {

basicLinks.forEach((basiclink) => {
  const urlLink = basiclink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<li><a href="/javascript/basics/${newLink}.html">${basiclink}</a></li>`;
  insertNavLinks.innerHTML += html;
})

 controlLinks.forEach((controllink) => {
  const urlLink = controllink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<li><a href="/javascript/control-flow/${newLink}.html">${controllink}</a></li>`;
  insertNavLinks2.innerHTML += html;
})
})

sidebarLinks()

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

