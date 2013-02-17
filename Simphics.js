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
	this.positionX = position.x();
	this.velocityX = velocity.vX();
	this.accelerationX = acceleration.aX();

	this.positionY = position.y();
	this.velocityY = velocity.vY();
	this.accelerationY = acceleration.aY();

	this.positionZ = position.z();
	this.velocityZ = velocity.vZ();
	this.accelerationZ = acceleration.aZ();

	this.resultantVelocity = velocity.magnitude();
	this.resultantAcceleration = acceleration.magnitude();

	this.x = function(){return this.positionX;}
	this.y = function(){return this.positionY;}
	this.z = function(){return this.positionZ;}
	this.vX = function(){return this.velocityX;}
	this.vY = function(){return this.velocityY;}
	this.vZ = function(){return this.velocityZ;}
	this.aX = function(){return this.accelerationX;}
	this.aY = function(){return this.accelerationY;}
	this.aZ = function(){return this.accelerationZ;}

	this.v = function(){return this.resultantVelocity;}
	this.a = function(){return this.resultantAcceleration;}

	this.infoString = function()
	{
		var infoPosition = 'Position is ('+this.x()+','+this.y()+','+this.z()+')\n';
		var infoVelocity = 'Velocity is ('+this.vX()+','+this.vY()+','+this.vZ()+') = '+this.v()+'\n';
		var infoAcceleration = 'Acceleration is ('+this.aX()+','+this.aY()+','+this.aZ()+') = '+this.a()+'\n';
		
		return infoPosition+infoVelocity+infoAcceleration;
	}
}
