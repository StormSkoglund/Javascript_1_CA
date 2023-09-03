const gameList = document.querySelector(".games-list");

/*Here I am using the method, demonstrated in module 4 lesson 3, in order to pass variables into my product site*/

/*const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

const id = params.get("id");
/*Here I am adding the unique product id from the API call to the HTML of the product-site*/

const url = "https://api.noroff.dev/api/v1/gamehub";
/*I was trying to move the API URL into another file to use it as a component of sorts, but I didn't manage to get it to work. I was following this video by MJ Philips "https://www.youtube.com/watch?v=l-nOOCb4wG0&list=PLOy2fxfOYlVPVTCIKfEKh5VGCR3_DmxV4&index=13"[viewed on 31. August 2023].*/

async function getGames() {
  const response = await fetch(url);

  const json = await response.json();
  const gamesCollection = json;
  gameList.innerHTML = "";

  /*I am using the for each method, this was demonstrated in module 4, lesson one. I am looping through my list (gameDetails), which contains meta data about the different games)
   */
  gamesCollection.forEach((game) => {
    gameList.innerHTML += `<div>
          <p> ${game.title} </p>
          <img
            src="${game.image}"
            
            class="img_as_pl"
          />
          <a href="product_page.html?id=${game.id}" class="button games-button">View Game</a>
        </div>`;
  });
}

/* In the code above, I have selected my container and then I created new HTML in my products-list HTML page, changing out the hardcoded game titles and cover photos as well as giving them the original styling via class names*/

getGames();
