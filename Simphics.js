// Simphics - A Physics Library in Javascript

function velocity(x1,x2,t1,t2)
{
	return (x2-x1)/(t2-t1);
}

function acceleration(v1,v2,t1,t2)
{
	return (v2-v1)/(t2-t1);
}


// An object representing a simple partical that moves in a single direction
function oneDimensionalParticle(x,v,a)
{
	this.positionX = x;
	this.velocityX = v;
	this.accelerationX = a;
}

// An object representing a simple partical that moves in 2 directions
function twoDimensionalParticle(x,y,vx,vy,ax,ay)
{
	this.positionX = x;
	this.velocityX = vx;
	this.accelerationX = ax;

	this.positionY = y;
	this.velocityY = vy;
	this.accelerationY = ay;
}

// An object representing a simple partical that moves in 3 directions
function threeDimensionalParticle(x,y,z,vx,vy,vz,ax,ay,az)
{
	this.positionX = x;
	this.velocityX = v;
	this.accelerationX = a;

	this.positionY = y;
	this.velocityY = vy;
	this.accelerationY = ay;

	this.positionZ = z;
	this.velocityZ = vz;
	this.accelerationZ = az;
}
