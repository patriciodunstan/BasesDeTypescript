


export function whatsMyType<T>(argument: T): T {

    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));

// El código que has proporcionado es un ejemplo de cómo se utilizan
//los genéricos en TypeScript. Los genéricos son una forma de proporcionar variables de
//tipo a las partes del código. Esto permite que el código sea reutilizable y flexible,
//mientras mantiene la seguridad de tipo.

// La función whatsMyType<T>(argument: T): T es una función genérica.
//El <T> después del nombre de la función es una variable de tipo.
//Esto significa que T puede ser cualquier tipo. Dentro de la función,
//argument es de tipo T y la función devuelve un valor de tipo T.
//Esto significa que lo que sea que pases a la función, obtendrás el mismo tipo de vuelta.

// Luego, la función whatsMyType se utiliza con diferentes tipos de argumentos:

// const amIString = whatsMyType<string>('Hola Mundo'); Aquí,
//T es string, por lo que la función espera una cadena como argumento y devuelve una cadena.
// const amINumber = whatsMyType<number>(100); Aquí, T es number,
//por lo que la función espera un número como argumento y devuelve un número.
// const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]); Aquí,
//T es number[], por lo que la función espera un array de números como argumento y
//devuelve un array de números.
// Finalmente, se utilizan métodos específicos de cada tipo (split para cadenas,
//toFixed para números y join para arrays) para demostrar que los tipos se mantienen
//después de pasar por la función whatsMyType.

