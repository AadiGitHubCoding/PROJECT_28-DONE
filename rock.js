
class mango0{
	constructor(x,y,r)
	{
		var options={
			restitution:0,
            friction:1.0,
            density:1.2,
            isStatic:false
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/stone.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}