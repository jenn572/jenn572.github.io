function toggleNavDisplay() {
    var navElement = document.getElementById('myresponsivemenu');
    if (navElement.style.display === 'none' || navElement.style.display === '') {
      navElement.style.display = 'grid';
    } else {
      navElement.style.display = 'none';
    }
  }