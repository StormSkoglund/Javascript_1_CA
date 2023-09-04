/*const productPageCover = document.querySelector(".product-text");
const gameCover = document.querySelector(".overlay");*/
const prodFlex = document.querySelector(".product-mobile-flex");

/*Here I am using the method, demonstrated in module 4 lesson 3, in order to pass variables into my product site*/

const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const id = parameters.get("id");

/*Here I am adding the unique product id from the API call to the HTML of the product-site*/

const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

async function productPage() {
  const response = await fetch(url);
  const specProd = await response.json();

  /*productPageCover.innerHTML = "";
  gameCover.innerHTML = "";*/

  productDetails(specProd);

  function productDetails(specProd) {
    prodFlex.innerHTML += `<h2> ${specProd.title}</h2> <p> ${specProd.description} </p> <img class ="APIgame" src "${specProd.image}" />`;
  }
}

productPage();
