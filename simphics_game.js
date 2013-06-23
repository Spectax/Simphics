// Simphics - A Game Engine in Javascript
// Licensed Under the Open Source MIT License
// (c) 2013 Sai Teja Jammalamadaka

//This function gets invoked the first time the application is run
//It executes only once
function initGame()
{

}

//This function gets invoked each time the game is started within the application
//It executes each time the user starts the game
function startGame()
{
	//Starting the GameLoop
	gameLoop();

}

//This function contains the actual game loop logic, and invokes the background functions
//The loop continues to run after being invoked by startGame
//The loop runs until stopGame is invoked by settin toStop = true within the loop
function gameLoop()
{
	var toStop = false;
	
	//The basic game loop
	while(!stopGame(toStop))
	{
		//This is the game loop, logic goes here
		
		//to trigger the stopGame function, set toStop to true;
	}
}

//This function gets invoked when the running game completes, or is stopped by the user
function stopGame(toStop)
{
	//toStop is a boolean value, when true, the game is stopped and logic is executed
	if(toStop) 
	{
		//The Stop Logic goes here
	}
	return toStop;
}

//This function gets invoked when the application is about to exit
function exitGame()
{

}

if(exports !=undefined)
{
exports.initGame = initGame;
exports.startGame = startGame;
exports.gameLoop = gameLoop;
exports.stopGame = stopGame;
exports.exitGame = exitGame;
}