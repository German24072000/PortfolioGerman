const technologies = [
    {
        name: "html",
        value: "80%"
    },
    {
        name: "css",
        value: "70%"
    },
    {
        name: "javascript",
        value: "60%"
    },
    {
        name: "angular",
        value: "30%"
    },
    {
        name: "react",
        value: "20%"
    },
    {
        name: "eclipse",
        value: "70%"
    },
    {
        name: "visualstudiocode",
        value: "70%"
    },
    {
        name: "git",
        value: "45%"
    },
    {
        name: "github",
        value: "20%"
    },
    {
        name: "bitbucket",
        value: "80%"
    },
    {
        name: "dbeaver",
        value: "60%"
    },
    {
        name: "sql",
        value: "50%"
    },
    {
        name: "mybatis",
        value: "30%"
    },
    {
        name: "java",
        value: "60%"
    },
    {
        name: "junit",
        value: "10%"
    },
    {
        name: "figma",
        value: "80%"
    }
]

let progressBars = document.querySelectorAll(".containerWithIconTecnologiaYPuntuacion > div div.progressBar");

window.onload = () => {

    for (const index in technologies) {
        progressBars[index].style.width = technologies[index].value;
        let scores = document.querySelectorAll(".containerWithIconTecnologiaYPuntuacion p.score");
        scores[index].innerHTML = technologies[index].value;
        
    }

}

let btnSideNav = document.getElementById("btnSideNav");
let unorderedListOfNavigator = document.querySelector("nav > ul");
let imagesCardsProyecto = document.querySelectorAll(".tarjetaPy > a > div > img");
let mainContainerFooter = document.getElementById("mainContainerFooter");
let btnFooter = document.getElementById("btnFooter");

btnSideNav.addEventListener("click", () => {
    btnSideNav.classList.toggle("changeToCross");

    
    let tagNavigation = document.querySelector("nav");

    if(btnSideNav.classList.contains("changeToCross")) {
        unorderedListOfNavigator.style.maxHeight = unorderedListOfNavigator.scrollHeight + "px";
        // tagNavigation.style.maxHeight = tagNavigation.scrollHeight + "px";
    } else {
        unorderedListOfNavigator.style.maxHeight = null;
    }
})

let imgIconLinkedin = document.getElementById("iconLinkedin");

let imgIconGithub = document.getElementById("iconGithub");

imgIconLinkedin.addEventListener("mouseover", function(){
    this.src = "img/icon_linkedin_fill.svg"
})

imgIconLinkedin.addEventListener("mouseout", function(){
    this.src = "img/icon_linkedin_black.svg"
})

imgIconGithub.addEventListener("mouseover", function(){
    this.src = "img/icon_github_fill.svg"
})

imgIconGithub.addEventListener("mouseout", function(){
    this.src = "img/icon_github_empty.svg"
})


let accordions = document.querySelectorAll(".accordion");

for(let accordion of accordions) {
    accordion.addEventListener("click", () =>{
        let divContentAccordion = accordion.querySelector(".content_accordion")
        let arrowAcc = accordion.querySelector(".titleAndIcon_accordion > i");
        
        if(divContentAccordion.style.maxHeight) {
            divContentAccordion.style.maxHeight = null;
            arrowAcc.style.transform = "rotate(0deg)";
        } else {
            divContentAccordion.style.maxHeight = divContentAccordion.scrollHeight + "px";
            arrowAcc.style.transform = "rotate(90deg)";
        }
        
    }) 
}

btnFooter.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
})

let imgAvatar = document.querySelector(".photo_frame img");


//---Mediaqueries---
const mediaQueryMax900 = window.matchMedia('(max-width: 900px)');

// Función que se ejecuta cuando la media query cambia
function handleMediaChangeMax900(event) {
    let dominantContainerFooter = document.querySelector("footer .dominant-container");
  if (event.matches) {

    dominantContainerFooter.appendChild(btnFooter);

  } else {
    mainContainerFooter.appendChild(btnFooter);
  }
}

// Agregar el listener para cuando cambia la media query
mediaQueryMax900.addListener(handleMediaChangeMax900);


const mediaQuery = window.matchMedia('(max-width: 1000px)');

function handleMediaChange(event) {
  if (event.matches) {
    imgAvatar.src = "img/img_avatar_ordenador_small.png";
  } else {
    imgAvatar.src = "img/img_avatar.png";
  }
}

mediaQuery.addListener(handleMediaChange);


const mediaQuery768Min = window.matchMedia('(min-width: 768px)');

function handleMediaChangeMinWidth768px(event) {
    if (event.matches) {
        unorderedListOfNavigator.style.display = "flex";

    } else {
        let btnSideNav = document.getElementById("btnSideNav")
        if(btnSideNav.classList.contains("changeToCross")) {
            unorderedListOfNavigator.style.display = "grid";
        } else {
            unorderedListOfNavigator.style.display = "grid";
        }
        
    }
}
mediaQuery768Min.addListener(handleMediaChangeMinWidth768px);


const mediaQuery768Max = window.matchMedia('(max-width: 768px)');
function handleMediaChangeMaxWidth768px(event) {
    if (event.matches) {

        cambiaImageCardsATablet();
    } else {
        cambiaImageCardsAOrdenadorSmall();
    }
}

mediaQuery768Max.addListener(handleMediaChangeMaxWidth768px);


window.addEventListener("resize", () => {

    if(unorderedListOfNavigator.style.maxHeight) {
        unorderedListOfNavigator.style.maxHeight = unorderedListOfNavigator.scrollHeight + "px";
    }


    for(let accordion of accordions) {
        let divContentAccordion = accordion.querySelector(".content_accordion");
        if(divContentAccordion.style.maxHeight) {
            divContentAccordion.style.maxHeight = divContentAccordion.scrollHeight + "px";
        }

    }
})

function cambiaImageCardsATablet() {
    imagesCardsProyecto[0].src = "img/img_Prodigital_tablet.png";
    imagesCardsProyecto[1].src = "img/img_Faytime_tablet.jpg";
}  

function cambiaImageCardsAOrdenadorSmall() {
    imagesCardsProyecto[0].src = "img/img_Prodigital.png";
    imagesCardsProyecto[1].src = "img/img_Faytime.jpg";
}

