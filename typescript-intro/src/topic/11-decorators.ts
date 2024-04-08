function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}



@classDecorator
export class SuperClass {


    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo')
    }
}


console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);

// Este código TypeScript es un ejemplo de cómo se utilizan los decoradores de clases.
// Los decoradores son una característica experimental de TypeScript que permite añadir anotaciones y una sintaxis declarativa a las clases y a los miembros de las clases (métodos, propiedades, etc.).

// Primero, se define una función classDecorator.
// Esta función es un decorador de clases.
// Acepta un constructor de clase como argumento y devuelve una nueva clase que extiende la clase original. La nueva clase tiene una propiedad adicional newProperty y una propiedad hello que sobrescribe cualquier propiedad hello en la clase original.

// Luego, se utiliza el decorador @classDecorator para decorar la clase SuperClass.
// Esto significa que cuando se crea una nueva instancia de SuperClass, en realidad se está creando una instancia de la clase que devuelve el decorador classDecorator. Por lo tanto, la nueva instancia de SuperClass tendrá la propiedad newProperty y la propiedad hello definida por el decorador, además de la propiedad myProperty y el método print definidos en la clase SuperClass.

// Finalmente, se imprime la clase SuperClass y una nueva instancia de SuperClass.
// Esto mostrará que la clase SuperClass y sus instancias tienen las propiedades añadidas por el decorador classDecorator.