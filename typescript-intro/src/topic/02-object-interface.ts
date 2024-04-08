
//array de strings
let skills: string[] = ['bash', 'counter', 'healing'];


//las interfaces no tienen representación fisica cuando es transpilado a js.
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

//objeto que implementa la interfaz Character
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['bash', 'counterr'],

}


strider.hometown = 'Gondor';
console.log(strider);


export { }

// En el código proporcionado, skills es una variable que contiene un array de strings.
// Aunque se declara al principio del código, no se utiliza directamente en ninguna parte del código restante.
// Sin embargo, se utiliza un array de strings similar cuando se define el objeto strider.

// La interfaz Character define una estructura de objeto que incluye una propiedad skills que es un array de strings.
// Cuando se crea el objeto strider, se le asigna un array de strings a la propiedad skills.

// Si la intención era utilizar la variable skills en el objeto strider, entonces el código debería modificarse de la siguiente manera:

// const strider: Character = {
//     name: 'Strider',
//     hp: 100,
//     skills: skills,
// }

// En este caso, se está utilizando la variable skills que se declaró al principio del código.