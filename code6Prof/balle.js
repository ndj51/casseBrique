// ==============================================
// === Balle ====================================
// ==============================================

class classPoint
{
    x;
    y;
    isIn;

    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.isIn = false;
    }
}

class classBalle
{
    id;
    name;
    fullName;
    element;
    isMoving;
    catched;
    x;
    y;
    xs;
    ys;

    constructor(id)
    {
        this.id = id;

        this.isMoving = false;
        this.catched = true;

        this.x = 260;
        this.y = 400;

        this.xs = 2;
        this.ys = 3;
    }

    createElement()
    {
        console.log(this.fullName + ".createElement();");

        let div = document.createElement("div");
        div.id = "balle" + this.id;
        div.className = "balle";
        document.getElementById("arene").appendChild(div);
        this.element = document.getElementById("balle"+this.id);
    }

    move()
    {
//        console.log(this.fullName + ".move();");

        if(this.isMoving == false)
        {
            this.isMoving = true;

            let flashArena = 0;

            let dy = this.y + this.ys;
            let dx = this.x + this.xs;

            // == COLLISION BRIQUES =============

            this.parent.mur.briques.forEach(brique =>
            {
                // console.log(brique.x1+','+brique.y1,' / '+brique.x2+','+brique.y2);
                if(brique.c != '_')
                {
                    let collision = false;
                    let points = new Array(8);

                    points[0] = new classPoint(dx   , dy -7);
                    points[1] = new classPoint(dx +5, dy -5);
                    points[2] = new classPoint(dx +7, dy); 
                    points[3] = new classPoint(dx +5, dy +5); 
                    points[4] = new classPoint(dx   , dy +7); 
                    points[5] = new classPoint(dx -5, dy +5); 
                    points[6] = new classPoint(dx -7, dy); 
                    points[7] = new classPoint(dx -5, dy -5); 
                    
                    for(let i = 0; i<8; i++)
                    {
                        if((points[i].x >= brique.x1 && points[i].x <= brique.x2) && (points[i].y >= brique.y1 && points[i].y <= brique.y2))
                        {
                            points[i].isIn = true;
                        }
                    }

                    // collision vertical
                    if(
                        (points[0].isIn && !points[4].isIn) ||
                        (points[4].isIn && !points[0].isIn)
                    )
                    {
                        this.ys = this.ys * -1;
                        collision = true;
                    }

                    // collision horizontal
                    if(
                        (points[6].isIn && !points[2].isIn) ||
                        (points[2].isIn && !points[6].isIn)
                    )
                    {
                        this.xs = this.xs * -1;
                        collision = true;
                    }

                    // collision diagonale
                    if(
                        (points[1].isIn && !points[5].isIn) ||
                        (points[5].isIn && !points[1].isIn) ||
                        (points[7].isIn && !points[3].isIn) ||
                        (points[3].isIn && !points[7].isIn)
                    )
                    {
                        this.xs = this.xs * -1;
                        this.ys = this.ys * -1;
                        collision = true;
                    }

                    if(collision)
                    {
                        this.parent.parent.playFX(7);
                        
                        document.getElementById("brique" + brique.id).parentNode.removeChild(brique.element);

                        brique.c = '_';

                        this.parent.mur.total--;
                        if(this.parent.mur.total == 0)
                        {
                            this.parent.parent.playFX(9);
                            this.parent.parent.niveau++;
                            this.parent.mur.loadLevel();
                            this.parent.mur.createWall();
                        }
                    }
                }
            });


            // == COLLISION BORDS + BATTE =======

            // bords gauche et droit
            if(dx < 7 || dx > 513)
            {
                this.xs = this.xs * -1;
                this.x  = (dx < 7) ? 7 : 513;
                this.parent.parent.playFX(8);
            }
            else
            {
                this.x = dx;
            }
            
            // bord haut
            if(dy < 0)
            {
                this.ys = this.ys * -1;
                this.y  = (dy < 7) ? 7 : dy;
                this.parent.parent.playFX(8);
            }
            else
            {
                if(dy > 540)
                {

                    console.log('game over : '+dy);
                    this.stop();
                    this.moveTo((batte.x + (batte.w / 2)), (batte.y - 7));
                    this.setOnClickEvent();

                    this.ys = this.ys * -1;
                }
                else
                {
                    // collision avec la batte
                    if((    dy > (this.parent.batte.y - 7)
                        &&  dy < (this.parent.batte.y + 10))
                        && (dx >= this.parent.batte.x1 && dx <= this.parent.batte.x2))
                    {
                        this.ys = this.ys * -1;
                        this.y  = this.parent.batte.y - 7;
                        this.parent.parent.playFX(6);
                    }
                    else
                    {
                        this.y = dy;
                    }
                }
            }

            this.moveTo(this.x,this.y);

            this.isMoving = false;
        }
        else
        {
//            console.log("balle" + this.id + " is not moving");
        }
    }

    moveTo(x,y)
    {
        // console.log(this.fullName + ".moveTo("+x+","+y+");");

        this.x = x;
        this.y = y;

        this.element.style.left = (this.x - 7) + "px";
        this.element.style.top  = (this.y - 7) + "px";
    }

    setOnClickEvent()
    {
        console.log(this.fullName + ".setOnClickEvent();");

        this.parent.onclick = this.parent.onClickAction(this.id);
    }

    onClickAction(id)
    {
        console.log(this.fullName + ".onClickAction();");

        this.parent.parent.balles[id].go();
        this.parent.onclick = "";
    }

    reset()
    {
        this.x  = 260;
        this.y  = 414;
        this.xs =  2;
        this.ys = -4;
    }

    go()
    {
        console.log(this.fullName + ".go();");
        if(this.run == undefined || this.run == null)
        {
            this.run = setInterval(this.fullName + ".move();",10);
        }    
    }

    stop()
    {
        clearInterval(this.run);
    }
}

