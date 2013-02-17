// Simphics - A Physics Library in Javascript
// Licensed Under the Open Source MIT License
// (c) 2013 Sai Teja Jammalamadaka


// Position Object
function Position(x,y,z)
{
	this.positionX= x;
	this.positionY= y;
	this.positionZ= z;
	
	this.x = function(){return this.positionX;}
	this.y = function(){return this.positionY;}
	this.z = function(){return this.positionZ;}

	this.distanceFromOrigin = function(){return Math.sqrt((this.x()*this.x())+(this.y()*this.y())+(this.z()*this.z()));}
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
		var infoPosition = 'Position is ('+this.x()+','+this.y()+','+this.z()+') = '+this.d()+' from Origin\n';
		var infoVelocity = 'Velocity is ('+this.vX()+','+this.vY()+','+this.vZ()+') = '+this.v()+' wrt Origin\n';
		var infoAcceleration = 'Acceleration is ('+this.aX()+','+this.aY()+','+this.aZ()+') = '+this.a()+' wrt Origin\n';
		
		return infoPosition+infoVelocity+infoAcceleration;
	}
}

// Relative Object takes two objects (particles) and gives the relative properties of object 1 wrt object 2
// (ie, perspective of Object 1 from Object 2)
function Relative(Object1, Object2)
{

	var pos1 = Object1.position;
	var pos2 = Object2.position;
	var vel1 = Object1.velocity;
	var vel2 = Object2.velocity;
	var acc1 = Object1.acceleration;
	var acc2 = Object2.acceleration;

	this.relativePosition = new Position(pos1.x()-pos2.x(),pos1.y()-pos2.y(),pos1.z()-pos2.z());

	this.relativeVelocity = new Velocity(vel1.vX()-vel2.vX(),vel1.vY()-vel2.vY(),vel1.vZ()-vel2.vZ());

	this.relativeAcceleration = new Acceleration(acc1.aX()-acc2.aX(),acc1.aY()-acc2.aY(),acc1.aZ()-acc2.aZ());

	this.x = function(){return this.relativePosition.x();};
	this.y = function(){return this.relativePosition.y();};
	this.z = function(){return this.relativePosition.z();};
	this.vX = function(){return this.relativeVelocity.vX();};
	this.vY = function(){return this.relativeVelocity.vY();};
	this.vZ = function(){return this.relativeVelocity.vZ();};
	this.aX = function(){return this.relativeAcceleration.aX();};
	this.aY = function(){return this.relativeAcceleration.aY();};
	this.aZ = function(){return this.relativeAcceleration.aZ();};

	this.d = function(){return this.relativePosition.distanceFromOrigin();}
	this.v = function(){return this.relativeVelocity.magnitude();}
	this.a = function(){return this.relativeAcceleration.magnitude();}

	this.infoString = function()
	{
		var infoPosition = 'Position is ('+this.x()+','+this.y()+','+this.z()+') = '+this.d()+' from Object2\n';
		var infoVelocity = 'Velocity is ('+this.vX()+','+this.vY()+','+this.vZ()+') = '+this.v()+' wrt to Object2\n';
		var infoAcceleration = 'Acceleration is ('+this.aX()+','+this.aY()+','+this.aZ()+') = '+this.a()+' wrt Object2\n';
		
		return infoPosition+infoVelocity+infoAcceleration;
	}
}