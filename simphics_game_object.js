//This file contains the function that instantiates a Simphics Game Object

function gameObject()
{
	this.position={
		x:0,
		y:0,
	};
	this.type={
		movable:false,		//movability
		interactable:false,	//can another interact
		ghost:false			//can another move through it :P
	}
}

exports.gameObject = gameObject;