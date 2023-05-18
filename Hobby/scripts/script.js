const page = document.querySelector('body');

  function init() {
    const menu = document.createElement('div');
    const main = document.createElement('div');
    menu.setAttribute("id","menu");
    main.setAttribute("id","main");
    page.appendChild(menu);
    page.appendChild(main);
    
  }

  init();

  nav = document.getElementById("menu");
var navr = loadHtml('layouts/nav.html');
nav.innerHTML = navr;
main = document.getElementById("main");
var mainr = loadHtml('layouts/main.html');
main.innerHTML = mainr;

