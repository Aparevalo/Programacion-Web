const loader = new LayoutsLoader();


loader.loadlayoutScript('assets/layouts/navbar/navbar.html', 'assets/layouts/navbar/navbar.js','navbar');
loader.addStylesheet('assets/layouts/navbar/navbar.css');
loader.loadlayout('assets/layouts/inicio.html','inicio');
loader.loadlayoutScript('assets/layouts/reserva/reserva.html', 'assets/layouts/reserva/reserva.js','reserva');
loader.addStylesheet('assets/layouts/reserva/reserva.css');
loader.loadlayout('assets/layouts/galeria/galeria.html','galeria');
loader.addStylesheet('assets/layouts/galeria/galeria.css');
const section = document.getElementById("cards");
getJsonData('products.json').then(data => showData(data));


function showData(data){
    const container = createElementClassComponent('div','container');
    const row = createElementClassComponent('div','row');
    
    
    for (const product of data.products) {
        const card = createElementClassComponent('div','card');
        const image = createElementClassComponent('img','card-img-top')
        const cardHeader = createElementClassComponent('div','card-header');
        const list = ['list-group', 'list-group-flush'];
        const myList = createElementClassList('ul', list)
        const description = createElementClassComponent('li','list-group-item');
        const cost = createElementClassComponent('li','list-group-item');
        const column = createElementClassComponent('div','col');
        
        image.src=`${product.Photo}`;  
        cardHeader.textContent = product.Name;
        description.append(`Puedes disfrutar de: ${product.Description}`);
        cost.append(`Costo Promedio: ${product.Price}`);
        myList.appendChild(description);
        myList.appendChild(cost);
        card.appendChild(image);
        card.appendChild(cardHeader);
        card.appendChild(myList);
        column.appendChild(card);
        row.appendChild(column);
      }
      container.appendChild(row);
      section.appendChild(container);
      
}


