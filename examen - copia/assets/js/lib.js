
function createElementClassList(element, classList) {
    const el = document.createElement(element);
    el.classList.add(...classList);
    return el
  }
  function createElementClassComponent(element, component) {
    const el = document.createElement(element);
    el.classList.add(component);
    return el
  }

  function getJsonData(json){
    return fetch(json)
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch(error => console.warn(error));
  }






