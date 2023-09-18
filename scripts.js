let cardName;
let points = 0;
let url = "https://proxy.royaleapi.dev/v1/cards";
let token = "";
let cardAmount;
let cardIndex;
let cardUrl;
let userInput = document.getElementById("inputbox");
let guess;

generateCards(url);

userInput.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents page from reloading on submit
    checkAnswer();
})

function generateCards(url){
    fetch(url, { // fetches card images from clash royale api
        headers: {
            "Authorization": `Bearer ${token}`
          }
    })
    .then(response => {
        return response.json();
    })
    .then(cards => {
        cardAmount = cards.items.length;
        cardIndex = Math.floor(Math.random() * cardAmount)
        console.log(cardIndex);
        document.getElementById("card").src = cards.items[cardIndex].iconUrls.medium;
        document.getElementById("card").name = cards.items[cardIndex].name.toLowerCase();
    });
}

function checkAnswer() {
    cardName = document.getElementById("card").name;
    guess = document.getElementById("guess").value.toLowerCase();

    if (guess == cardName) {
        points++;
        document.getElementById("card-caption").innerHTML = `points: ${points}`;
    }

    else {
        points = 0;
        document.getElementById("card-caption").innerHTML = `points: ${points}`;
    }

    document.getElementById("guess").value = "";
    generateCards(url);
}

