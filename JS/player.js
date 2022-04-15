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

let playersArray = [];

function setPlayer () {

    console.log(players)
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

function addPlayerLocal(){
    // let players = JSON.parse(localStorage.getItem('players'));
    // if(players === null) {
    //     localStorage.setItem('players',JSON.stringify(player));
    //     console.log(player);
    // } else {
    //     let data = JSON.parse(localStorage.getItem('players'))
    //     playersArray = [data, player];
        
    //     localStorage.setItem('players',JSON.stringify())
    // }
    


}

function getPlayer() {
    player.name = userName.value;
    player.points = 0;
    userBox.classList.add('hide');
    boxLng.classList.remove('hide');
};

export{ 
    player,
    setPlayer, 
    addPlayerLocal,
    showPlayers,
    getPlayer,
    playerBox
}