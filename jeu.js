// =========================================
// ==JEU ===================================
//===========================================

class classJeu
{
    constructor()
    {   
        this.name        = "jeu";

        this.niveau       = 0;
        this.temps       = 0;
        this.score       = 0;
        this.vies        = 3;
        this.difficultes = 0;

        this.demoMode    = true;
    }

    start()
    {
        console.log(this.name + ".start();");

        this.arene = new classArene();
        this.arene.parent = this;
        this.arene.createElement();
        this.arene.open();

        this.arene.mur.loadLevel(this.niveau);
        this.arene.mur.createWall();
        this.arene.batte.createElement();
        this.arene.balles[0].createElement();
        this.arene.balles[1].createElement();
        this.arene.balles[2].createElement();
        

        
        /*for (i=0; i<3; i++)
        {
            this.arene.balles[i].createElement();
        }
        
        
        for (i=0; i<3; i++)
        {
            setTimeout("arene.jeu.balle["+i+"].go();", i * 1000);
        }*/
        this.arene.balles[0].go();
    }

    quit()
    {
        document.location.href = "https://www.google.fr";
    }

    newGame()
    {
        this.demoMode = false;
        clearInterval(jeu.arene.batte.run);
        jeu.arene.batte.startListenMouse();
        console.log("newGame");
    }

    countDown()
    {

    }

    demoStart()
    {
            console.log("demoStart");
            
           jeu.arene.batte.x1 = jeu.arene.balles[0].x - 40;

           if (jeu.arene.batte.x1 < 0)
           {
               jeu.arene.batte.x1 = 0
           }
           if (jeu.arene.batte.x1 >440)
           {
               jeu.arene.batte.x1 = 440
           }
           jeu.arene.batte.x2 = jeu.arene.batte.x1 + jeu.arene.batte.w;
        document.getElementById("batte").style.left = jeu.arene.batte.x1 + "px";

        console.log("x1 " + jeu.arene.batte.x1);
        //document.getElementById("batte").style.left = this.x1 + "px";
        
        
        //setInterval(function(){ alert("Hello"); }, 3000);
        /*if ( jeu.arene.open.btnStart.disable() = true && 
         setTimeout(function();{ } 9000))
        {
            console.log("demostart2")

        }*/
    }
}