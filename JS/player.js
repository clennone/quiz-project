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

function getPlayer() {
    player.name = userName.value;
    player.points = 0;

    const div = document.createElement('div');


    div.classList.add('fade-in');
    div.innerHTML = `<div class="welcome">
                        <div class="welcome-h1">
                            <h1>
                                <span class="welcome-title">Welcome!</span></br>
                                <span class="welcome-name">${player.name}</span>
                            </h1>
                        </div>
                    </div>`;
    userBox.classList.add('hide');
    userBox.insertAdjacentElement('afterend',div)

    setTimeout( () => {
        div.classList.add('hidden');
    },2500);

    setTimeout( () => {
        div.remove();
        boxLng.classList.remove('hide');
    },3500);
};


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




export{ 
    player,
    showPlayers,
    getPlayer,
    playerBox
}