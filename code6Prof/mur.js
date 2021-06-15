// ==============================================
// === Mur ======================================
// ==============================================

class classMur
{
    name;
    fullName;
    parent;
    w;
    h;
    total;

    constructor ()
    {
        this.w = 13;
        this.h = 18;
    }

    loadLevel()
    {
        console.log(this.fullName + ".loadLevel();");

        var xhr=new XMLHttpRequest();
        xhr.open("GET","level"+this.parent.parent.niveau+".txt",false);
        xhr.send(null);
        this.map = xhr.responseText;
        this.map.toString();

        let tmp = this.map;
        this.map = "";
        this.total = 0;
        for(let i=0;i<tmp.length;i++)
        {
            let c = tmp.substring(i,i+1);
            if((c >= "0" && c <= "7") || c == "_")
            {
                this.map += c;
                if(c >= "0" && c <= "7")
                {
                    this.total++;
                }
            }
        }
        console.log(this.map);
    }

    createWall()
    {
        console.log(this.fullName + ".createWall();");

        let i = 0;
        for(let y = 0; y < 18; y++)
        {
            for(let x = 0; x < 13; x++)
            {
                let x1 = x * 40;
                let y1 = y * 20;

                let x2 = x1 + 40;
                let y2 = y1 + 20;

                let c  = this.map.substring(i,i+1);

                this.briques[i] = new classBrique(i,x1,y1,x2,y2,c);

                let div = document.createElement("div");
                div.id = "brique" + i;
                div.className = "brique b" + c;
                div.style.position = "absolute";
                div.style.left = x1 + 'px';
                div.style.top  = y1 + 'px';
                this.parent.element.appendChild(div);

                this.briques[i].element = document.getElementById("brique"+i);
                i++;
            }
        }
    }

    resetWall()
    {
        console.log(this.fullName + ".resetWall();");

        let i = 0;
        for(let y = 0; y < 18; y++)
        {
            for(let x = 0; x < 13; x++)
            {
                let element = document.getElementById("brique"+i);
                jeu.arene.element.removeChild(element);
                i++;
            }
        }
    }
}

