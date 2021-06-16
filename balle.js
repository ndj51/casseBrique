// =========================================
// == BALLE ===================================
//===========================================


class classBalle
{
    name;
    id;
    isMoving;
    fixed;
    xs;
    ys;
    
    constructor(id)
    {
        this.name = "balle";

        this.id = id;

        this.isMoving = false;


        this.fixed = true;

        this.x = 20;
        this.y = 20;

        this.xs = 2;
        this.ys = 3;
    }

    createElement()
    {
        console.log("jeu.arene.balles["+this.id+"].createElement();");
        let balle = document.createElement("div");
        balle.id = "balle"+this.id;
        balle.className = "balle";
        balle.style.top = this.y + "px";
        balle.style.left = this.x + "px";
        document.getElementById("arene").appendChild(balle);
    }

    move()
    {
        console.log("move"+this.id);
        let dx = this.x + this.xs;
        let dy = this.y + this.ys;

        if( dx < 7 || dx > 513)
        {
            this.xs = this.xs * -1;
        }


        if( dy < 7 /*|| dy > 513*/)
        {
            this.ys = this.ys * -1;
        }
        if (dy > 513)
        {
            console.log("GameOver");
        }
 
        

        
        //== Collision Batte ===============================
        
        if(this.y > 450 && ( this.x > jeu.arene.batte.x1 && this.x < jeu.arene.batte.x2))
        {
            this.ys = this.ys * -1;
        }
        
        this.x = this.x + this.xs;    
        this.y = this.y + this.ys;

        this.moveTo (this.x, this.y);

        //=== Collision Brique ============================


    }

    moveTo(x,y)
    {
        console.log("moveTo");
        console.log(this.x, this.y);
        this.x = x;
        this.y = y;
        document.getElementById("balle0").style.left = (this.x -7) + "px";
        document.getElementById("balle0").style.top = (this.y -7) + "px";
        /*document.getElementById("balle"+this.id).style.left = (this.x - 7) + "px";
        document.getElementById("balle"+this.id).style.left = (this.y - 7) + "px";*/
    }

    setOnClickEvent()
    {

    }
    onClickAction(id)
    {

    }

    reset()
    {

    }

    go()
    {
        console.log("go();");
        setInterval("jeu.arene.balles["+this.id+"].move();",20);    
    }
    
    stop()
    {

    }
   
}