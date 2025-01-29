const insertAllCatLinks = document.querySelector(".footer-cat-links");

const allCategoryLinks = () => {
  allCatLinks.forEach((allCatLink) => {
    const docCat = allCatsLink;
    if (allCatLink !== docCat) {
      const urlLink = allCatLink.toLowerCase();
      let newLink = urlLink.split(" ").join("-");
      let html = `#<a href="/blog/${newLink}/">${allCatLink}</a>`;
      insertAllCatLinks.innerHTML += html;
    }
  });
};

allCategoryLinks();
