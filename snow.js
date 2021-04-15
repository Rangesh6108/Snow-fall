class Snow{
    constructor(x,y,r){
        var options ={
            isStatic:false,
            restilution:1.5,
            dencity:1,
            friction:5
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.snowfall=[];

        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        this.image=loadImage("Images/Snow 1.png");
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        push();
        // translate(pos.x,pos.y);
        var position = [pos.x,pos.y];
        this.snowfall.push(position);
        for(var i =0;i<this.snowfall.length;i=i+50){
        // ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image,this.snowfall[i][0],this.snowfall[i][1],this.r*2,this.r*2);
        }
        pop();
    }
}

