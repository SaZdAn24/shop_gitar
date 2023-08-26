class Products {
  render() {
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, price, img }) => {
      htmlCatalog += `
             <li>
             <span>${name}</spane>
             <img src="${img}"></img>
             <span>${price}</spane>
             <button>Добавить в корзину</button>
             </li>
             `;
    });
    const html = `
    <ul>
        ${htmlCatalog}
    </ul>
    `;
    ROOT_PRODUCTS.innerHTML = html;
  }
}
const productsPage = new Products();
productsPage.render();
