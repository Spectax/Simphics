// Simphics - A Physics Library in Javascript


// Position Object
function Position(x,y,z)
{
	this.positionX= x;
	this.positionY= y;
	this.positionZ= z;
	
	this.x = function(){return this.positionX;}
	this.y = function(){return this.positionY;}
	this.z = function(){return this.positionZ;}

	this.distanceFromOrigin = function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);}
}

// Velocity Object
function Velocity(vx,vy,vz)
{
	this.velocityX= vx;
	this.velocityY= vy;
	this.velocityZ= vz;
	
	this.vX = function(){return this.velocityX;}
	this.vY = function(){return this.velocityY;}
	this.vZ = function(){return this.velocityZ;}

	this.magnitude = function(){return Math.sqrt(this.vX()*this.vX() + this.vY()*this.vY() + this.vZ()*this.vZ())}
}

// Acceleration Object
function Acceleration(ax,ay,az)
{
	this.accelerationX= ax;
	this.accelerationY= ay;
	this.accelerationZ= az;
	
	this.aX = function(){return this.accelerationX;}
	this.aY = function(){return this.accelerationY;}
	this.aZ = function(){return this.accelerationZ;}

	this.magnitude = function(){return Math.sqrt(this.aX()*this.aX() + this.aY()*this.aY() + this.aZ()*this.aZ())}
}


// An object representing a simple particle that moves in 3 directions
// Takes as input a position object, velocity object, and acceleration object
function Particle(position,velocity,acceleration)
{
	this.position = position;
	this.velocity = velocity;
	this.acceleration = acceleration;

	this.x = function(){return this.position.x();}
	this.y = function(){return this.position.y();}
	this.z = function(){return this.position.z();}
	this.vX = function(){return this.velocity.vX();}
	this.vY = function(){return this.velocity.vY();}
	this.vZ = function(){return this.velocity.vZ();}
	this.aX = function(){return this.acceleration.aX();}
	this.aY = function(){return this.acceleration.aY();}
	this.aZ = function(){return this.acceleration.aZ();}

	this.d = function(){return this.position.distanceFromOrigin();}
	this.v = function(){return this.velocity.magnitude();}
	this.a = function(){return this.acceleration.magnitude();}

	this.infoString = function()
	{
		var infoPosition = 'Position is ('+this.x()+','+this.y()+','+this.z()+') = '+this.d+' from Origin\n';
		var infoVelocity = 'Velocity is ('+this.vX()+','+this.vY()+','+this.vZ()+') = '+this.v()+'\n';
		var infoAcceleration = 'Acceleration is ('+this.aX()+','+this.aY()+','+this.aZ()+') = '+this.a()+'\n';
		
		return infoPosition+infoVelocity+infoAcceleration;
	}
}

// Relative Object takes two objects and gives the relative properties of object 1 wrt object 2
// (ie, perspective of Object 1 from Object 2)
function Relative(Object1, Object2)
{
	this.relativePosition = function() {
		
	}
}