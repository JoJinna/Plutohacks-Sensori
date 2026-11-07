let folder = "Sounds/";
let sounds = ["bruh", "directed", "ea-sports", "rick-astley", "roblox"];
let extension = ".mp3";

let container = document.querySelector(".cardsParent");

sounds.forEach(function (name) {
    let card = document.createElement("div");
    card.className = "card";
    container.appendChild(card);

    let cardTitleParent = document.createElement("div");
    cardTitleParent.className = "card-title-parent";
    card.appendChild(cardTitleParent);

    let title = document.createElement("h1");
    title.className = "card-title";
    title.textContent = name;
    cardTitleParent.appendChild(title);

    let btnParent = document.createElement("div");
    btnParent.className = "btn-parent";
    card.appendChild(btnParent);

    let playBtn = document.createElement("button");
    playBtn.className = "btn-play fas fa-play";
    playBtn.addEventListener("click", function () {
        playSound(folder + name + extension);
    });
    btnParent.appendChild(playBtn);
});

function playSound(path) {
    let sound = new Audio(path);
    sound.play().catch(function (err) {
        console.error("Could not play " + path, err);
    });
}