// =========================================
// == BATTE ===================================
//===========================================


class classBatte
{
    name;
    isMoving;
    w;
    y;
    x1;
    x2;
    ox;

    constructor()
    {
        this.name = "batte"

        this.isMoving = false;

        this.w = 80;
        this.y = 460;

        this.x1 = this.x;
        this.x2 = this.x1 + this.w;
        this.ox = this.x1;
        
    }

    createElement()
    {
        let batte = document.createElement("div");
        batte.id = "batte";
        batte.className = "batte";
        batte.style.top = this.y + "px";
        batte.style.left = this.x1 +"px";
        document.getElementById("arene").appendChild(batte);
    }

    startListenMouse()
    {
        if (jeu.demoMode == false )
        {
            document.body.onmousemove = function (e){jeu.arene.batte.move(e); }; 
        }
        if (jeu.demoMode == true)
        {
            console.log("mouse");
            this.x1 = 200;
            this.run = setInterval("jeu.demoStart()",50);
        }
      
    }

    move(e)
    {
        /*if (demoMode == true )
        {
            this.x1 +40 == jeu.arene.balles[0].x;
        }*/

        console.log("x: "+e.clientX + " / "+ e.clientY);
        let bcr = parseInt(document.getElementById("arene").getBoundingClientRect().left);
        this.x1 = e.clientX - bcr - 40;
        if(this.x1 < 0)
        {
            this.x1 = 0;
        }
        if(this.x1 > 520 - this.w)
        {
            this.x1 = 520 - this.w;
        }
        this.x2 = this.x1 + this.w;
        document.getElementById("batte").style.left = this.x1 + "px";
    }
}