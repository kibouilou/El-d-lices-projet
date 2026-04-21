const produits = [
    {nom:"pastel",
        image:"data_image/pastel.png"
    },
    {nom:"beignet de crevette",
        image:"data_image/bcrevette.png"
    },
    {nom:"bouchee a vapeur",
        image:"data_image/bouchee.png"
    },

    {nom:"accra de morue",
        image:"data_image/accra.png"
    },
    {nom:"samoussa",
        image:"data_image/samoussa.png"
    },
    {nom:"nems",
        image:"data_image/nems.png"
    }
];

const container = document.getElementById("card-container");

produits.forEach(produit => {
    const carte = document.createElement("div");
    carte.classList.add("carte");

    carte.innerHTML=`
    <img src="${produit.image}" alt="${produit.nom}">
    <h2 ${produit.nom}</h2>
    <button>Passer la commande</button>
    `;
    container.appendChild(carte);
});



const images = [
"data_image/pastelviande.jpg",
"data_image/nemassiette.jpg",
"data_image/bouche.jpg",
"data_image/Samousaimg.jpeg",
"data_image/accramorue.jpg",
"data_image/crevettebei.jpg",
];

let index = 0;

const hero = document.getElementById("hero-section");
hero.style.backgroundImage = `url('${images[0]}')`;
function changerBackground(){
    index++;

    if(index>=images.length ){
        index=0;    
    }
     hero.style.backgroundImage = "url('"+images[index]+"')";
}
setInterval(changerBackground, 5000);





