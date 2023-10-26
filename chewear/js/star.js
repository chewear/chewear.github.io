function restartAnimation() {
    const star = document.querySelector('.star');
    const clone = star.cloneNode(true);
    star.parentNode.replaceChild(clone, star);
  }

