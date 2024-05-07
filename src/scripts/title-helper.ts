(function fixMissingTitle() {
  const titleTag = document.getElementsByTagName("title");

  // look to see if title tag has text
  if (titleTag.length > 0) {
    let titleText = titleTag[0].innerHTML;

    if (titleText === "") {
      //get page name from browser.
      titleText = window.location.pathname;
    }
  }
})();
