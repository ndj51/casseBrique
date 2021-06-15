var jeu;
var buttons;

class classButton
{
    name;
    element;

    constructor(varName)
    {
        this.name = varName;
        this.createElement();
    }

    createElement()
    {
        console.log(this.name + ".createElement();");

        let button = document.createElement("button");
        button.id = this.name;
        document.getElementById("boutons").appendChild(button);
        this.element = document.getElementById(this.name);
    }

    set(libelle,action)
    {
        console.log(this.name + ".set();");

        this.element.innerHTML = libelle;
        this.element.onclick   = action;
    }

    disable()
    {
        console.log(this.name + ".disabled();");

        this.element.setAttribute("disabled", "disabled");
    }

    enable()
    {
        console.log(this.name + ".enable();");

        this.element.removeAttribute("disabled");
    }
}

function init()
{
    jeu = new classJeu("jeu");

    let logo = document.createElement("img");
    logo.id = "logo";
    logo.setAttribute("src","logo.svg");
    document.body.appendChild(logo);

    let boutons = document.createElement("div");
    boutons.id = "boutons";
    document.getElementById("logo").after(boutons);

    btnStart = new classButton("btnStart");
    btnStart.set("START", function() { jeu.start(); });

    btnQuit = new classButton("btnQuit");
    btnQuit.set("QUIT", function() { jeu.quit(); });
}

