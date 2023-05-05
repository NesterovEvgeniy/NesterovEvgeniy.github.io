/* Product-card */

const data = JSON.parse(dataProducts);
const catalogInnerList = document.querySelector('.catalog__inner-list');

data.forEach(item => {

  const productItemWrapper = document.createElement('div');
  productItemWrapper.classList.add('product-item__wrapper');

  const productItemFavorit = document.createElement('button');
  productItemFavorit.classList.add('product-item__favorite');

  const productItemBasket = document.createElement('button');
  productItemBasket.classList.add('product-item__basket');

  const productItemBasketImg = document.createElement('img');
  productItemBasketImg.src = "../../assets/img/main/products/icons/basket-white.svg";
  productItemBasketImg.setAttribute("alt", "кнопка добавить в корзину");

  const productItemNotifyLink = document.createElement('a');
  productItemNotifyLink.classList.add('product-item__notify-link');
  productItemNotifyLink.setAttribute("href", "#!");
  const productItemNotifyLinkSpan = document.createElement('span');
  productItemNotifyLinkSpan.textContent = 'Сообщить о поступлении';

  const productItem = document.createElement('a');
  productItem.classList.add('product-item');
  /* add "product-item--sale" to "product-item" for activate sale banner on card */
  productItem.classList.add('product-item--sale');
  productItemNotifyLink.setAttribute("href", "#!");

  const productItemHoverText = document.createElement('p');
  productItemHoverText.classList.add('product-item__hover-text');
  productItemHoverText.textContent = 'посмотреть товар';

  const productItemImg = document.createElement('div');
  productItemImg.classList.add('products-item__img');
  productItemImg.style.backgroundImage = item.image;

  const productItemTitle = document.createElement('h4');
  productItemTitle.classList.add('product-item__title');
  productItemTitle.textContent = item.title;

  const productItemPrice = document.createElement('p');
  productItemPrice.classList.add('product-item__price');
  productItemPrice.classList.add('price');
  productItemPrice.textContent = item.price_ctual;

  /*const productItemNotifyText = document.createElement('p');
    productItemNotifyText.classList.add('product-item__notify-text');
    productItemNotifyText.textContent = 'нет в наличии'; */

  /*productItem.appendChild(productItemNotifyText); */

  productItem.appendChild(productItemPrice);
  productItem.appendChild(productItemTitle);
  productItem.appendChild(productItemImg);
  productItem.appendChild(productItemHoverText);
  productItemWrapper.appendChild(productItem);
  productItemNotifyLink.appendChild(productItemNotifyLinkSpan);
  productItemWrapper.appendChild(productItemNotifyLink);
  productItemBasket.appendChild(productItemBasketImg);
  productItemWrapper.appendChild(productItemBasket);
  productItemWrapper.appendChild(productItemFavorit);
  catalogInnerList.appendChild(productItemWrapper);
});