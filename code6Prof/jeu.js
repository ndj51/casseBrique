// ==============================================
// === Jeu ======================================
// ==============================================

class classJeu
{
    name;
    element;
    demoMode;
    score;
    vies;
    niveau;

    arene;
    channel;
    sounds;

    constructor(name)
    {
        this.demoMode = true;

        this.score  = 0;
        this.vies   = 3;
        this.niveau = 0;

        this.name   = name;

        this.channel = 0;
        this.sounds = new Array(7*12);
        for(let c=0; c<24; c++)
        {
            for(let i=0; i<12; i++)
            {
                this.sounds[i+(c*12)] = new Audio("sounds/fx_" + i + ".wav");
            }
        }  

        this.arene          = new classArene();
        this.arene.name     = "arene";
        this.arene.fullName = this.name + ".arene";
        this.arene.parent   = this;
    
        this.arene.mur          = new classMur();
        this.arene.mur.name     = "mur";
        this.arene.mur.fullName = this.name + ".arene.mur";
        this.arene.mur.parent   = this.arene;
    
        this.arene.mur.briques = new Array();
        for(let i=0; i<234; i++)
        {
            this.arene.mur.briques[i]          = new classBrique();
            this.arene.mur.briques[i].name     = "brique" + i;
            this.arene.mur.briques[i].fullName = "{this.name}.arene.mur.brique" + i;            
        }
    
        this.arene.batte = new classBatte();
        this.arene.batte.name     = "batte";
        this.arene.batte.fullName = this.name+".arene.batte";
        this.arene.batte.parent   = this.arene;
    
        this.arene.balles = new Array(3);
        for(let i=0; i<3; i++)
        {
            this.arene.balles[i]          = new classBalle();
            this.arene.balles[i].name     = "balles[" + i + "]";
            this.arene.balles[i].fullName = this.name + ".arene.balles[" + i + "]";
            this.arene.balles[i].parent   = this.arene;
        }
    }

    playFX(c)
    {
        this.sounds[c + (this.channel * 12)].play();
        this.channel++;
        if(this.channel >= 24)
        {
            this.channel = 0;
        }
    }

    start()
    {
        console.log(this.name + ".start();");

        this.arene.createElement();
        this.arene.open();

        this.arene.mur.loadLevel();
        this.arene.mur.createWall();
        
        console.log("demoMode == " + this.demoMode);       
        this.arene.batte.createElement();
        if(this.demoMode == true)
        {
            this.demoStart();
        }
    }

    countDown()
    {
        console.log(this.name + ".countDown();");

        let div = document.createElement("div");
        div.id  = "msg";
        div.innerHTML = "3";
        this.arene.element.appendChild(div);
        for(let i=1;i<4;i++)
        {
            setTimeout("document.getElementById('msg').innerHTML = '"+(3-i)+"';", i*1000);
        }
        setTimeout("document.getElementById('msg').remove();", 4000);
    }

    newGame()
    {
        console.log(this.name + ".newGame();");

        btnStart.disable();

        this.niveau = 0;

        this.arene.mur.resetWall();
        this.arene.mur.loadLevel(this.niveau);
        this.arene.mur.createWall();

        this.arene.balles[0].catched = true;

        this.countDown();
    }

    demoStart()
    {
        console.log(this.name + ".demoStart();");

        this.arene.balles[0].createElement();
        this.arene.balles[0].go();
        this.arene.batte.go();
    }

    quit()
    {
        console.log(this.name + ".quit();");

        location.href = "https://www.google.fr";
    }
}

