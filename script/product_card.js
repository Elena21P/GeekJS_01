export function getItems(count=3,imgFolder) {
    const name = `ELLERY X M'O CAPSULE`;
    const text = `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`;
    const price = 52.0;
    const products = [];
    for (let i = 1; i <= count; i++) {
      products.push({
        name: name,
        text: text,
        price: price,
        img: `url(${imgFolder}product${i}.png)`,
      });
    }
    return products;
  }

  export function getProductItemHtml(item) {
    return `<div class="product__item">
    <div class="product__card">
      <div
        class="product__img"
        style="background-image:${item.img}"
      ></div>
      <div class="card-overlay flex-center">
        <button class="card-add flex-center">
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"
            />
          </svg>
          Add to Cart
        </button>
      </div>

      <div class="product__info">
        <div class="product__name"><a class="link text-black" href="./product.html">${item.name}</a></div>
        <div class="product__text">${item.text}</div>
        <div class="product__price">$${item.price.toFixed(2)}</div>
      </div>
    </div>
  </div>`;
    
  }
