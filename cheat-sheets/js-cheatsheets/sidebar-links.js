const insertNavLinks = document.querySelector('.insert-basic-links')
const insertNavLinks2 = document.querySelector('.insert-control-links')


//Side Navigation
const sidebarLinks = (() => {

cheatLinks.forEach((cheatlink) => {
  const urlLink = cheatlink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<li><a href="/cheat-sheets/${newLink}.html">${cheatlink}</a></li>`;
  insertNavLinks.innerHTML += html;
})
})

sidebarLinks()

const insertActiveLinks = document.querySelectorAll('.menu-wrap a')

const activeLinks = (() => {
  cheatLinks.forEach((cheatlink) => {   
      if(cheatlink == linkTitle) {
          insertActiveLinks.forEach((activelink) => {
            if(activelink.textContent == cheatlink) {
              activelink.classList.add('active')
            }
          })
        }
      })
})

activeLinks()

