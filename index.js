
function startGame(){

    let  readlineSync  =  require('readline-sync');

    console.log("Welcome to my game! This is a simple game for two players.");
    console.log("There is 1M Dollar on the table.");
    console.log("Each play can choose two options: steal or split. ");

    console.log("Player 1, what would you like to do?")

    let x = readlineSync.question( "Options: steal || split?--" );

    console.log("Player 2, what would you like to do?")

    let y = readlineSync.question( "Options: steal || split?--" );


    //let x='still';
    //let y='split';

    if ((x=='split')&&(y=='split')){ console.log("Both of you split 1M!")} 
    else if ((x=='steal')&&(y=='split')){console.log("Player 1 takes it all!")}
    else if ((x=='split')&&(y=='steal')){console.log("Player 2 takes it all!")}
    else if ((x=='steal')&&(y=='steal')){console.log("No ones get anything")}
    else {console.log("error")}
    

    function winner(){
        console.log("Congratulations! Now you have the optortunity to tripple your $$$")
        let z = readlineSync.question( "Would you like to play? yes || or ")

        if (z=='yes'){
            console.log("Now, your potential 3M are behind one of three(3) doors: Door a, Door b, or Door c.");
            console.log("You must choose one of these doors");

            let chooseDoor= readlineSync.question ( "Options: a, b, or c");

            switch(chooseDoor){
                case 'a': console.log("You Win 3M!");
                break;
                case 'b':console.log("Game Over!");
                break;
                case 'c': console.log("Game Over!")
            }
        }else if (z=='no'){console.log("You can keep your 1M")}
        else{console.log("Error")}
    }
    winner();

    
};

startGame();



//switch(x,y){
//    case x==y : console.log("Both of you get to split 1M");
//    break;
//    case ((x=='split')&&(y=='still')) : console.log("Player 2 takes it all");
//    break;
//    case ((x=='still')&&(y=='split')) : console.log("Player 1 takes it all");
//    break;
//    default : 'error';
    
//}