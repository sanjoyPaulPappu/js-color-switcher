document.getElementById('switcher-btn').addEventListener('click', () => {
  document.getElementById('color-switcher').classList.toggle('active');
});

document.getElementById('theme-color-btns').addEventListener('click', (event) => {
  if (event.target.tagName.toLowerCase() == 'span') {
    const themeColor = event.target.getAttribute('data-color');
    document.querySelector(':root').style.setProperty('--main-color', themeColor);
  }
});