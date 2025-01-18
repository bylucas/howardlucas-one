const bottomLinks = document.querySelector(".related-wrap");

//console.log(linkTitle)
//console.log(linkCat)
const relatedLinks = (() => {
  switch (linkCat) {
  case 'basicsCat':
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
    case 'controlCat':
   controlLinks.forEach((controllink) => {
      const docTitle = linkTitle;
  if (controllink !== docTitle) {
    const urlLink = controllink.toLowerCase();
    let newLink = urlLink.split(" ").join("-");
    let html = `<div class="related-post">
    <h3><a href="/javascript/control-flow/${newLink}.html">${controllink}</a></h3>
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