const prodFlex = document.querySelector(".product-mobile-flex");
const loaderParent = document.querySelector(".loadPar");
const displayError = document.querySelector(".error");
const errorParent = document.querySelector(".errPar");
/*Here I am using the method, demonstrated in module 4 lesson 3, in order to pass variables into my product site*/

const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const id = parameters.get("id");

/*Here I am adding the unique product id from the API call to the HTML of the product-site*/

const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

async function productPage() {
  try {
    const response = await fetch(url);
    const specProd = await response.json();

    loaderParent.innerHTML = "";
    errorParent.innerHTML = "";

    productDetails(specProd);

    function productDetails(specProd) {
      prodFlex.innerHTML += `<img class ="APIgame" src = "${specProd.image}" alt = "${specProd.description}" /> <h2> ${specProd.title}</h2> <p> ${specProd.description} </p>`;
    }
  } catch (error) {
    console.log("Error");
    errorParent.innerHTML = "Error :/ Please try again later.";
  }
}

productPage();
