// =========================================
// == BRIQUE ===================================
//===========================================

class classBrique
{
    constructor(id,x,y/*,t*/,c)
    {
        console.log(id +" : "+ x +", "+ y);
        this.x = x;
        this.y = y;
        this.w = 40;
        this.h = 20;
        //this.t = t;
        this.c = c;
        this.id = id;

        this.createElement();
    }

    updatexy2()
    {
        this.x2 = this.x + this.w;
        this.y2 = this.y + this.h;
    }

    createElement()
    {
        let brique = document.createElement("div");
        brique.id = "brique"+ this.id;
        brique.className = "brique b"+ this.c;
        brique.style.position = "absolute";
        brique.style.left = this.x +"px"; 
        brique.style.top = this.y +"px";  
        document.getElementById("arene").appendChild(brique); 
    }
}