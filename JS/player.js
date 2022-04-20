import { userBox,boxLng,userName } from "../app.js";
//User creator
const playerBox = document.querySelector('#player');

//positions to append
const playerPlace = document.querySelector('.player-place__title')
const playerName = document.querySelector('.player-name__title')
const playerPoints = document.querySelector('.player-points__title')


const player = {
    name : String,
    points : Number,
}



function showPlayers() {
    let place = document.createElement('p')
    place.classList.add('player-place__input');
    place.textContent = "1."

    let pName = document.createElement('p')
    pName.classList.add('player-name__input');
    pName.textContent = player.name;

    let pPoints = document.createElement('p')
    pPoints.classList.add('player-points__input');
    pPoints.textContent = `${player.points} PTS`

    playerPlace.appendChild(place)
    playerName.appendChild(pName)
    playerPoints.appendChild(pPoints)

}


function getPlayer() {
    player.name = userName.value;
    player.points = 0;

    const div = document.createElement('div');


    div.classList.add('fade-in');
    div.innerHTML = `<div id="welcome">
                        <h1 class="title_name user-title__name">
                            Welcome! ${player.name}
                        </h1>
                    </div>`;
    userBox.classList.add('hide');
    userBox.insertAdjacentElement('afterend',div)

    setTimeout( () => {
        div.remove();
    },3600);

    setTimeout( () => {
        boxLng.classList.remove('hide');
    },3700);
};

export{ 
    player,
    showPlayers,
    getPlayer,
    playerBox
}