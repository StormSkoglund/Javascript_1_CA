const homePageCover = document.querySelector(".front-flexbox");
const coverText = document.querySelector(".text-flex-front");
const productLink = document.querySelector(".button to-game");
const loadContainer = document.querySelector(".loadContainer");

const url =
  "https://api.noroff.dev/api/v1/gamehub"; /*I was trying to move the API URL into another file to use it as a component of sorts, but I didn't manage to get it to work. I was following this video by MJ Philips "https://www.youtube.com/watch?v=l-nOOCb4wG0&list=PLOy2fxfOYlVPVTCIKfEKh5VGCR3_DmxV4&index=13"[viewed on 31. August 2023].*/

//this API call swaps out the hardcoded super duper game cover on my homepage, with the one from the API,
//while keeping my own generated screenshot (i asked Talitha if could keep this for layout purposes). */
async function gameInfoHomepage() {
  const response = await fetch(url);
  const superDupGame = await response.json();

  // turning off the loader animation with an empty string
  loadContainer.innerHTML = "";
  /*here I am using backticks, in order to manually insert elements from the third object in the array, into the index.html document. I also attach custom classes, to keep the original styling of the site, for both the image and the text underneath the image*/
  homePageCover.innerHTML += `<span> <img src ="${superDupGame[2].image}" alt = "${superDupGame[2].description}" class ="front-cover" "> </span>`;
  coverText.innerHTML += `<p class="front-image-text">"${superDupGame[2].description}" </p> <a class="button to-game" href="product_page.html?id=${superDupGame[2].id}">View Game</a>`;
}

gameInfoHomepage();
