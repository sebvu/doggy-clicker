var clicked = 0;
var dopamine = 0;
var dopaminePower = 1;
var dopaminePerSecond = 0;
var dopamineInterval = 0;
var treatCost = 50;
var treat = 0;
var petPowerCost = 15;
var petPower = 0;
var toysCost = 100;
var toys = 0;
var groomingCost = 500;
var grooming = 0;

function addToDopamine(amount)
{
    clicked++;
    console.log('added');
    dopamine = dopamine + dopaminePower;
    document.getElementById("dopamine").innerHTML = dopamine;
} 

function buyTreat(amount)
{
    if(dopamine >= treatCost)
    {
        dopamineInterval = dopamineInterval + 5;

        console.log('purchased treats');
        dopamine = dopamine - treatCost;
        treatCost = Math.round(treatCost * 1.5);
        treat++;

        document.getElementById("dopamine").innerHTML = dopamine;
        document.getElementById("treatCost").innerHTML = treatCost;
        document.getElementById("treat").innerHTML = treat;
    }
}

function buyPetPower(amount)
{
    if(dopamine >= petPowerCost)
    {
        dopaminePower = dopaminePower + 2;
        
        console.log('purchased petpower');
        dopamine = dopamine - petPowerCost;
        petPowerCost = Math.round(petPowerCost * 3);
        petPower++;

        document.getElementById("dopamine").innerHTML = dopamine;
        document.getElementById("petPowerCost").innerHTML = petPowerCost;
        document.getElementById("petPower").innerHTML = petPower;
    }
} 

function buyToys(amount)
{
    if(dopamine >= toysCost)
    {
        dopamineInterval = dopamineInterval + 15;

        console.log('purchased toys');
        dopamine = dopamine - toysCost;
        toysCost = Math.round(toysCost * 2.5);
        toys++;

        document.getElementById("dopamine").innerHTML = dopamine;
        document.getElementById("toysCost").innerHTML = toysCost;
        document.getElementById("toys").innerHTML = toys;
    }
}

function buyGrooming(amount)
{
    if(dopamine >= groomingCost)
    {
        dopamineInterval = dopamineInterval * 3;
        dopaminePower = dopaminePower * 3;

        console.log('purchased grooming');
        dopamine = dopamine - groomingCost;
        groomingCost = Math.round(groomingCost * 3);
        grooming++;

        document.getElementById("dopamine").innerHTML = dopamine;
        document.getElementById("groomingCost").innerHTML = groomingCost;
        document.getElementById("grooming").innerHTML = grooming;
    }
}

function saveGame() {
    console.log('game saved');
    var gameSave = {
        clicked: clicked,
        dopamine: dopamine,
        dopaminePower: dopaminePower,
        dopaminePerSecond: dopaminePerSecond,
        dopamineInterval: dopamineInterval,
        treatCost: treatCost,
        treat: treat,
        petPowerCost: petPowerCost,
        petPower: petPower,
        toysCost: toysCost,
        toys: toys,
        groomingCost: groomingCost,
        grooming: grooming
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.clicked !== "undefined") clicked = savedGame.clicked;
    if (typeof savedGame.dopamine !== "undefined") dopamine = savedGame.dopamine;
    if (typeof savedGame.dopaminePower !== "undefined") dopaminePower = savedGame.dopaminePower;
    if (typeof savedGame.dopaminePerSecond !== "undefined") dopaminePerSecond = savedGame.dopaminePerSecond;
    if (typeof savedGame.dopamineInterval !== "undefined") dopamineInterval = savedGame.dopamineInterval;
    if (typeof savedGame.treatCost !== "undefined") treatCost = savedGame.treatCost;
    if (typeof savedGame.treat !== "undefined") treat = savedGame.treat;
    if (typeof savedGame.petPowerCost !== "undefined") petPowerCost = savedGame.petPowerCost;
    if (typeof savedGame.petPower !== "undefined") petPower = savedGame.petPower;
    if (typeof savedGame.toysCost !== "undefined") toysCost = savedGame.toysCost;
    if (typeof savedGame.toys !== "undefined") toys = savedGame.toys;
    if (typeof savedGame.groomingCost !== "undefined") groomingCost = savedGame.groomingCost;
    if (typeof savedGame.grooming !== "undefined") grooming = savedGame.grooming;
}

function resetGame() {
    if (confirm("Are you sure you want to destroy her happiness?")) {
        var gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload();
    }
}

window.onload = function() {
    console.log('game loaded');
    loadGame();
    document.getElementById("dopamine").innerHTML = dopamine;
    document.getElementById("dopaminePerSecond").innerHTML = dopaminePerSecond;
    document.getElementById("treatCost").innerHTML = treatCost;
    document.getElementById("treat").innerHTML = treat;
    document.getElementById("petPowerCost").innerHTML = petPowerCost;
    document.getElementById("petPower").innerHTML = petPower;
    document.getElementById("toysCost").innerHTML = toysCost;
    document.getElementById("toys").innerHTML = toys;
    document.getElementById("groomingCost").innerHTML = groomingCost;
    document.getElementById("grooming").innerHTML = grooming;
};

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.which == 83) { //ctrl + s
        event.preventDefault();
    }
    saveGame();
}, false);

setInterval(function()
{
    dopaminePerSecond = dopamineInterval;
    dopaminePerSecond = dopaminePerSecond + (clicked * dopaminePower);
    clicked = 0;
    dopamine = dopamine + dopamineInterval;
    document.title = dopamine + " happiness - Maya Clicker";
    document.getElementById("dopaminePerSecond").innerHTML = dopaminePerSecond;
    document.getElementById("dopamine").innerHTML = dopamine;
}, 1000)



