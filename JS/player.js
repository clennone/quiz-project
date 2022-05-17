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

    userBox.classList.add('hide');
    boxLng.classList.remove('hide');

};


function showPlayers(player) {
    const lastDiv = document.querySelector('#quiz');
    const div = document.createElement('div');
    div.classList.add('box', 'fade-in');

    const medalFirst = "https://visualpharm.com/assets/523/Olympic%20Medal%20Gold-595b40b65ba036ed117d30ce.svg";
    const medalSecond = "https://visualpharm.com/assets/925/Olympic%20Medal%20Silver-595b40b65ba036ed117d30cf.svg";
    const medalThird = "https://visualpharm.com/assets/412/Olympic%20Medal%20Bronze-595b40b65ba036ed117d30cd.svg";
    let imgMedal ;

    if(player.points <= 20){
        imgMedal = medalThird;
    } else if ( player.points > 20 && player.points <= 60){
        imgMedal = medalSecond;
    } else if ( player.points > 60 && player.points <= 100){
        imgMedal = medalFirst;
    }

    div.innerHTML = `<h2 class="player-data">Hi ${player.name}!</h2>
                    <p class="player-info">YOU EARN:</p>
                    <h3 class="player-points">${player.points} Points</h3>
                    <img class="player-medal" src=${imgMedal} alt="medal first place">
                    <div class="button-user">
                        <button class="btn-style" id="btn-again">Play Again?</button>
                    </div>`

    lastDiv.insertAdjacentElement('afterend',div);
}



export{ 
    player,
    showPlayers,
    getPlayer,
    playerBox
} 