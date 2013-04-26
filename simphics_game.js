// Simphics - A Game Engine in Javascript
// Licensed Under the Open Source MIT License
// (c) 2013 Sai Teja Jammalamadaka

//This function gets invoked the first time the application is run
//It executes only once
var initGame = function()
{

}

//This function gets invoked each time the game is started within the application
//It executes each time the user starts the game
var startGame = function()
{
	//Starting the GameLoop
	gameLoop();

}

//This function contains the actual game loop logic, and invokes the background functions
//The loop continues to run after being invoked by startGame
//The loop runs until stopGame is invoked by settin toStop = true within the loop
var gameLoop = function()
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
var stopGame = function(toStop)
{
	//toStop is a boolean value, when true, the game is stopped and logic is executed
	if(toStop) 
	{
		//The Stop Logic goes here
	}
	return toStop;
}

//This function gets invoked when the application is about to exit
var exitGame = function()
{

}