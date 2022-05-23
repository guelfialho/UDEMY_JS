'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  let i = 0;

  document.querySelector('body').addEventListener('click', function () {
    if (i === 0) {
      header.style.color = 'blue';
      i = 1;
    } else if (i === 1) {
      header.style.color = 'red';
      i = 0;
    }
  });
})();
