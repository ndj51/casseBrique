// ==========================================
// == ARENE =================================
//===========================================

class classArene
{
    constructor()
    {
        this.name = "arene";
       
        this.w = 0;
        this.y = 0;

        this.mur              = new classMur();
        this.batte            = new classBatte();

        this.balles           = new Array (3);
        this.balles[0]        = new classBalle(0);
        this.balles[1]        = new classBalle(1);
        this.balles[2]        = new classBalle(2);

        // this.mur.parent       = this;
        // this.batte.parent     = this;
        // this.balles[0].parent = this;
        // this.balles[1].parent = this;
        // this.balles[2].parent = this;
    }

    createElement()
    {
        console.log("jeu.arene.createElement();");

        let div = document.createElement("div");
        div.id = "arene";

        div.style.width = this.w;
        div.style.height = this.h;
        div.onclick = jeu.arene.batte.startListenMouse();
        document.getElementById("logo").after(div);


    }

    open()
    {

        btnStart.disable();
        btnQuit.disable();

        btnStart.set("NEW GAME", function(){jeu.newGame();});
        btnQuit.set("Home", function() {jeu.arene.close();} );

        document.getElementById("arene").style.display ="block";
        
        setTimeout('document.getElementById("arene").style.width = "520px";',1000);
        setTimeout('document.getElementById("arene").style.height ="520px";',3000);

        setTimeout('document.getElementById("logo").style.top="-300px";',3000);
        setTimeout('document.getElementById("arene").style.top="50px";',3000);

        setTimeout("btnStart.enable();",5000);
        setTimeout("btnQuit.enable();",5000);

        
    }

    close()
    {
        console.log("jeu.arene.close()");

        btnStart.disable();
        btnQuit.disable();

        btnStart.set("Start", function() {jeu.start(); });
        btnQuit.set("Quit", function() {jeu.quit(); });

        setTimeout('document.getElementById("arene").style.height ="0px";',1000);

        setTimeout('document.getElementById("logo").style.top="-0px";',1000);
        setTimeout('document.getElementById("arene").style.top="240px";',1000);

        
        setTimeout('document.getElementById("arene").style.width = "0px";',3000);
        setTimeout('document.getElementById("arene").style.display = "none";',5000);

        setTimeout("btnStart.enable();",5000);
        setTimeout("btnQuit.enable();",5000);

       
    }
    
}