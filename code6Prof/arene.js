// ==============================================
// === Arene ====================================
// ==============================================

class classArene
{
    parent;
    name;
    fullName;
    element;
    y;
    w;
    h;
    mur;
    batte;
    balles;

    constructor()
    {
        this.w = 0;
        this.h = 0;
    }

    createElement()
    {
        console.log(this.fullName + ".createElement();");

        let div = document.createElement("div");
        div.id  = "arene";
        div.style.width  = this.w;
        div.style.height = this.h;
        document.getElementById("logo").after(div);
        this.element = document.getElementById("arene");
    }

    open()
    {
        console.log(this.fullName + ".open();");

        this.y =  50;
        this.w = 520;
        this.h = 520;

        btnStart.disable();
        btnStart.set('New Game', function() { jeu.newGame(); });

        btnQuit.disable();
        btnQuit.set('Home', function() { jeu.arene.close(); });
 
        setTimeout("document.getElementById('logo').style.top = '-300px';", 3000);
        setTimeout(this.fullName + ".element.style.display = 'block';",500);
        setTimeout(this.fullName + ".element.style.width   = '520px';",1000);
        setTimeout(this.fullName + ".element.style.top     = '50px';",3000);
        setTimeout(this.fullName + ".element.style.height  = '520px';",3000);
        setTimeout("btnStart.enable();", 5000);
        setTimeout("btnQuit.enable();", 5000);
    }

    close()
    {
        console.log(this.fullName + ".close();");

        this.y = 240;
        this.w =   0;
        this.h =   0;
 
        btnStart.disable();
        btnStart.set('START', function() { jeu.start(); });

        btnQuit.disable();
        btnQuit.set('QUIT', function() { jeu.quit(); });
 
        setTimeout("document.getElementById('logo').style.top = '0px';", 1000);
        setTimeout(this.name + ".element.style.height  = '0px';",  1000);
        setTimeout(this.name + ".element.style.top     = '240px';",1000);
        setTimeout(this.name + ".element.style.width   = '0px';",  3000);
        setTimeout(this.name + ".element.style.display = 'none';", 5000);
        setTimeout("btnStart.enable();", 5000);
        setTimeout("btnQuit.enable();",  5000);
    }
}

