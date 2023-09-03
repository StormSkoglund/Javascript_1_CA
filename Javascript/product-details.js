const productPageCover = document.querySelector(".product-text");

const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

/*Here I am using the method, demonstrated in module 4 lesson 3, in order to pass variables into my product site*/

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

const id = params.get("id");
/*Here I am adding the unique product id from the API call to the HTML of the product-site*/

async function productPage() {
  try {
    const response = await fetch(url);
    const specProd = await response.json();

    productPageCover.innerHTML = "";

    const products = specProd;

    products.forEach((product) => {
      productPageCover.innerHTML += `<h2> ${product.title}</h2> <p> ${product.description} </p>`;
    });
  } catch (error) {
    productPageCover.innerHTML = message("error", error);
  }
}

productPage();
