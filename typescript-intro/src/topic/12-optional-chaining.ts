
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth'],
}

const returnChildrenNumber = (passenger: Passenger): number => {

    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}


returnChildrenNumber(passenger1);

// La advertencia que estás viendo se debe a que has declarado la variable passenger2, pero no la estás utilizando en ninguna parte de tu código. En TypeScript (y en muchos otros lenguajes de programación), es una buena práctica evitar declarar variables que no se utilizan,
// ya que pueden causar confusión y hacer que el código sea más difícil de mantener.

// Si planeas utilizar passenger2 en el futuro, puedes ignorar esta advertencia por ahora.
// Sin embargo, si no tienes la intención de utilizarla, sería mejor eliminarla para mantener tu código limpio y fácil de leer.

// Por ejemplo, si quisieras utilizar passenger2 para probar la función returnChildrenNumber, podrías hacerlo de la siguiente manera:

// returnChildrenNumber(passenger2);

// Esto llamaría a la función returnChildrenNumber con passenger2 como argumento, lo que permitiría comprobar cuántos hijos tiene passenger2.