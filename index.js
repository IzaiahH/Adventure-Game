//Your Code here
var firstAnswer = window.prompt("Do you head left or right");

//User selected left
if (firstAnswer === "left") {
    console.log("You selected left")
    var secondAnswer = window.prompt("Do you go to the library or the kitchen")
    //User selects library
    if (secondAnswer === "library") {
        console.log("You picked the right place you win!")
    }
    //User selects kitchen
    else if (secondAnswer === "kitchen") {
        console.log("You are now stuck in the kitchen. Sorry :(")
    }
    //User selects anything else
    else {
        console.log("Game over! You suck, try again!")
    }
}
//User selected right
else if (firstAnswer === "right") {
    console.log("You selected right")
    var secondAnswer = window.prompt("Do you go to the gameroom or the showroom")
    //User selects gameroom
    if (secondAnswer === "gameroom") {
        console.log("You picked the right place you win!")
    }
    //User selects showroom
    else if (secondAnswer === "showroom") {
        console.log("You are now stuck in the showroom. Sorry :(")
    }
    //User selects anything else
    else {
        console.log("Game over! You suck, try again!")
    }

}

//User selected anything else
else {
    console.log("Game over! Try again!")
}