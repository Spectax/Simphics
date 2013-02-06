// Simphics - A Physics Library in Javascript

function velocity(x1,x2,t1,t2)
{
	return (x2-x1)/(t2-t1);
}

function acceleration(v1,v2,t1,t2)
{
	return (v2-v1)/(t2-t1);
}
