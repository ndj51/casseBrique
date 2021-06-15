// ==============================================
// === Batte ====================================
// ==============================================

class classBatte
{
    name;
    fullName;
    parent;
    isMoving;
    w;
    y;
    x1;
    x2;
    ox;

    constructor ()
    {
        this.isMoving = false;

        this.w = 80;
        this.y = 460;

        this.x1 = this.x
        this.x2 = this.x1 + this.w;
        this.ox = this.x1;
    }

    createElement()
    {
        console.log(this.fullName + ".createElement();");

        let div = document.createElement("div");
        div.id = "batte";
        div.className = "batte";
        div.style.top = this.y + "px";
        div.style.left = this.x + "px";
        div.style.width = this.w + "px";
        this.parent.element.appendChild(div);
        this.element = document.getElementById("batte");
    }

    startListenMouse()
    {
        console.log(this.fullName + ".startListenMouse();");
  
        document.onmousemove = function (e)
        {
            let xoffset = parseInt(window.scrollX);
            xoffset += parseInt(jeu.arene.element.getBoundingClientRect().left);
            jeu.arene.batte.x1 = e.clientX - xoffset - (jeu.arene.batte.w / 2);
            jeu.arene.batte.move();
        }
    }

    move()
    {
//        console.log(this.fullName + ".move();");

        this.x1 = this.parent.balles[0].x - (this.w / 2);

        if(this.x1 < 0)
        {
            this.x1 = 0;
        }
        if(this.x1 > (this.parent.w - this.w))
        {
            this.x1 = this.parent.w - this.w;
        }
        this.x2 = this.x1 + this.w;
        this.element.style.left = jeu.arene.batte.x1 + 'px';
    }

    go()
    {
        console.log(this.fullName + ".go();");
        if(this.run == undefined || this.run == null)
        {
            this.run = setInterval(this.fullName + ".move();",50);
        }    
    }

    stop()
    {
        clearInterval(this.run);
    }
}

