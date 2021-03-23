// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

var container = $(".icons");

icons.forEach((icon) => {
  const { name, family, prefix } = icon;
 
  var html = `
  <div>
    <i class="${family} ${prefix}${name}"></i>
    <div class="title">${name}</div>
  </div>
  `;

  container.append(html);
});


// Milestone 2
// Coloriamo le icone per tipo

//Creo un array nel quale attribuisco ad ogni categoria un colore
const iconColor = [
  {
    category: "food",
    color: "red"
  },
  {
    category: "animal",
    color: "green"
  },
  {
    category: "beverage",
    color: "blue"
  }
];

console.log(iconColor);

// creo un nuovo array rimappando quello principale di partenza nel quale aggiungo la chiave color
const IconColored = icons.map((icon) => {
  //Creo una variabile a cui andrò a dare come valore il colore
  let color;
  //Ciclo ogni elemento dell'array con i colori e verifico che ci sia una corrispondeza tra le categorie
  iconColor.forEach((item) => {
    if ( icon.category == item.category ) {
      //attribuisco alla variabile creata sopra il colore 
      color = item.color;
    }
  });
  //aggiungo la chiave alla mia icona prima di ritornarla nell'array che sto creando.
  icon.color = color;

  return icon;
});


console.log(IconColored);






// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
