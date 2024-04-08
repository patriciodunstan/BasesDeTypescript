//Cuando un objeto posee otro objeto dentro de el, es recomendable crear una interfaz 
//para el objeto interno y luego asignarla a la interfaz del objeto principal.
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}


interface Address {
    street: string;
    country: string;
    city: string;

}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log(address);

export { };

// Este código TypeScript define dos interfaces y un objeto que
// implementa una de estas interfaces.

// Primero, se define la interfaz SuperHero.
// Esta interfaz especifica que cualquier objeto que sea un SuperHero debe tener una propiedad name de tipo string, una propiedad age de tipo number,
// una propiedad address de tipo Address y un método showAddress que devuelve un string.

// Luego, se define la interfaz Address.
//  Esta interfaz especifica que cualquier objeto que sea una Address
//  debe tener una propiedad street, country y city, todas de tipo string.

// Después de definir estas interfaces, se crea un objeto superHeroe que implementa la interfaz SuperHero. Este objeto tiene las propiedades name, age y address que cumplen con los tipos especificados en la interfaz SuperHero. La propiedad address es un objeto que cumple con la interfaz Address. Además, el objeto superHeroe tiene un método showAddress que devuelve una cadena
// de texto que incluye el nombre del superhéroe, la ciudad y el país de su dirección.

// Finalmente, se llama al método showAddress del objeto superHeroe y se
// guarda el resultado en la variable address. Luego, se imprime el valor de address en
//  la consola. Esto mostrará una cadena de texto que incluye el nombre del superhéroe, la ciudad y el país de su dirección.