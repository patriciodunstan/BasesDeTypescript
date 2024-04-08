
function addNumbers(a: number, b: number): number {
    return a + b;
}

// cambio de tipo de dato de retorno de la funcion
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

// Optional parameters
function muliply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

// const result: number = addNumbers(10, 20);
// const result2: string = addNumbersArrow(10, 20);
// const multiplyResult: number = muliply(5);
// console.log(result, result2, multiplyResult);

// Interfaces es un marco de los campos y tipos de datos que posee un objeto
interface Character {
    name: string;
    hp: number;
    showHp: () => void;

}

// Interfaces en funciones
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}


//objeto que implementa la interfaz Character
const strider: Character = {
    name: 'Strider',
    hp: 100,
    showHp() {
        console.log(`Health Points: ${this.hp}`);
    }
}

//ejecucion de la funcion healCharacter, tomando como objetivo el objeto strider
healCharacter(strider, 20);


strider.showHp();
export { }

// Las advertencias que estás viendo se deben a que has declarado las funciones addNumbers, addNumbersArrow y muliply, así como el parámetro secondNumber en la función muliply,
// pero no los estás utilizando en ninguna parte de tu código.

// En TypeScript (y en muchos otros lenguajes de programación), es una buena práctica evitar declarar variables, funciones o parámetros que no se utilizan,
// ya que pueden causar confusión y hacer que el código sea más difícil de mantener.

// Si planeas utilizar estas funciones o parámetros en el futuro,
// puedes ignorar estas advertencias por ahora.
// Sin embargo, si no tienes la intención de utilizarlos, sería mejor eliminarlos para mantener tu código limpio y fácil de leer.

// Por ejemplo, si no planeas utilizar el parámetro secondNumber en la función muliply,
// podrías reescribir la función de la siguiente manera:

// function muliply(firstNumber: number, base: number = 2) {
//     return firstNumber * base;
// }

// De manera similar, si no planeas utilizar las funciones addNumbers y addNumbersArrow,
//  podrías eliminarlas de tu código.