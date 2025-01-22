const insertNavLinks = document.querySelector('.insert-css-links')
const insertNavLinks2 = document.querySelector('.insert-html-links')


//Side Navigation
const sidebarLinks = (() => {

cssLinks.forEach((csslink) => {
  const urlLink = csslink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<li><a href="/blog/css/${newLink}.html">${csslink}</a></li>`;
  insertNavLinks.innerHTML += html;
})

 cheatLinks.forEach((cheatlink) => {
  const urlLink = cheatlink.toLowerCase();
  let newLink = urlLink.split(" ").join("-");
  let html = `<li><a href="/blog/cheat-sheets/${newLink}.html">${cheatlink}</a></li>`;
  insertNavLinks2.innerHTML += html;
})
})

sidebarLinks()

const insertActiveLinks = document.querySelectorAll('.menu-wrap a')

const activeLinks = (() => {
  cssLinks.forEach((csslink) => {   
      if(csslink == linkTitle) {
          insertActiveLinks.forEach((activelink) => {
            if(activelink.textContent == csslink) {
              activelink.classList.add('active')
            }
          })
        }
      })
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

