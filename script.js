//Array donde está guardada la info de los perros
let dogs = [{
        name: 'Firulais',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-bi-Tq3VTy8AL_fGBoLIwdnvY5RfG8wJNr1xW5_tWzQ8TOGx'
    },
    {
        name: 'Pulgas',
        image: 'https://live.staticflickr.com/8534/8622367912_cfe27bf5ef.jpg'
    }
];

//Array donde está guardada la info de los gatos
let cats = [{
        name: 'Misifu',
        image: 'https://kittybloger.files.wordpress.com/2012/05/cat-king.jpg?w=584'
    },
    {
        name: 'Garfield',
        image: 'https://images-cdn.9gag.com/photo/3630193_700b.jpg'
    }
];

//Array donde está guardada la info tanto de perros como gatos
let dogsAndCats = [...cats, ...dogs];

//Creamos el emento de la imagen y la guardamos en la variable temporalImage
// let temporalImage = document.createElement('img');

//Añadimos un src a la imagen con el enlace a la foto de Firulais
// temporalImage.setAttribute('src', dogs[0].image);

//Seleccionamos el elemento con el id animals_pictures y lo guardamos en la variable animalsPicturesDiv
// let animalsPicturesDiv = document.getElementById('animals_pictures');

//Adjuntamos la imagen al div que tiene como id animals_pictures
// animalsPicturesDiv.append(temporalImage);

// vamos a meter todo en una función

let renderAnimals = function (animalsToRender) {
    for (let animal of animalsToRender) {
        // Creamos la imagen y la anexamos
        let temporalImage = document.createElement('img');
        temporalImage.setAttribute('src', animal.image);
        temporalImage.setAttribute('alt', animal.image);
        let animalsPicturesDiv = document.getElementById('animals_pictures');
        animalsPicturesDiv.append(temporalImage);

        // Creamos el H2 con el nombre del animal
        let temporalH2 = document.createElement ('h2');
        temporalH2.innerHTML = animal.name;
        animalsPicturesDiv.append(temporalH2);

    }
};

renderAnimals(dogsAndCats);
// acceder al ID de animals selector y event listener para cada vez que cambie dar una respuesta diferente

document.getElementById('animals_selector').addEventListener('change', function (event) {
    
    document.getElementById('animals_pictures').innerHTML = '';
    //'cats' 'dogs' 'all'
    //event.target.value === cats --> renderAnimal(cats)
    //event.target.value === dogs --> renderAnimal(dogs)
    //renderAnimals(dogsAndCats) --> renderAnimal(all)
    if (event.target.value === 'dogs') {
        renderAnimals(dogs);
    } else if (event.target.value === 'cats') {
        renderAnimals(cats);
    } else {
        renderAnimals(dogsAndCats);
    }
});




