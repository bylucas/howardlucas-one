const bottomLinks = document.querySelector(".related-wrap");

const relatedLinks = (() => {
  switch (linkCat) {
  case 'cssCat':
   cssLinks.forEach((csslink) => {
      const docTitle = linkTitle;
  if (csslink !== docTitle) {
    const urlLink = csslink.toLowerCase();
    let newLink = urlLink.split(" ").join("-");
    let html = `<div class="related-post">
    <h3><a href="/blog/css/${newLink}.html">${csslink}</a></h3>
    </div>`;
    bottomLinks.innerHTML += html;
  }
})
    break
    case 'cheatCat':
   cheatLinks.forEach((cheatlink) => {
      const docTitle = linkTitle;
  if (cheatlink !== docTitle) {
    const urlLink = cheatlink.toLowerCase();
    let newLink = urlLink.split(" ").join("-");
    let html = `<div class="related-post">
    <h3><a href="/blog/cheat-sheets/${newLink}.html">${cheatlink}</a></h3>
    </div>`;
    bottomLinks.innerHTML += html;
  }
})
   break
  default:
    console.log('no related Posts')
}
})

relatedLinks()