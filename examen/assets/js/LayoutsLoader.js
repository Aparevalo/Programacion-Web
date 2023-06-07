class LayoutsLoader {
    loadlayout(urlGET, contenidoId) {
      const request = new XMLHttpRequest();
      request.open('GET', urlGET, true);
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          const contenidoDiv = document.getElementById(contenidoId);
          contenidoDiv.innerHTML = request.responseText;
        } else {
          console.error('Error al cargar el layout.');
        }
      };
      request.onerror = function () {
        console.error('Error de conexión al cargar el layout.');
      };
      request.send();
    }
  
    loadlayoutScript(urlGET, urlScript, contenidoId) {
      const request = new XMLHttpRequest();
      request.open('GET', urlGET, true);
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          const contenidoDiv = document.getElementById(contenidoId);
          contenidoDiv.innerHTML = request.responseText;
          const script = document.createElement('script');
          script.src = urlScript;
          contenidoDiv.appendChild(script);
        } else {
          console.error('Error al cargar el layout.');
        }
      };
      request.onerror = function () {
        console.error('Error de conexión al cargar el microfrontend.');
      };
      request.send();
    }
    
    addStylesheet(url) {
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = url;
      document.head.appendChild(linkElement);
    }
  }
  


  