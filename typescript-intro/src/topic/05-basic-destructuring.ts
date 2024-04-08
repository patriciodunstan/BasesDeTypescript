interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed sheeran",
        year: 2015
    }
}


// const song = 'New Song';

// const { song: anotherSong, songDuration: duration, details: details } = audioPlayer;
// const { author: author, year: year } = details;

// console.log('song', anotherSong);
// console.log('duration', duration);
// console.log('Author', author);
// console.log('Year', year);

export { }

// La advertencia que estás viendo se debe a que has declarado la variable audioPlayer,
// pero no la estás utilizando en ninguna parte de tu código.
// En TypeScript (y en muchos otros lenguajes de programación), es una buena práctica evitar declarar variables que no se utilizan, ya que pueden causar confusión y hacer que el código sea más difícil de mantener.

// En tu código, parece que tienes la intención de desestructurar la variable audioPlayer para obtener sus propiedades, pero actualmente ese código está comentado.
// Si descomentas el código de desestructuración, la advertencia debería desaparecer:

// const { song: anotherSong, songDuration: duration, details: details } = audioPlayer;
// const { author: author, year: year } = details;

// console.log('song', anotherSong);
// console.log('duration', duration);
// console.log('Author', author);
// console.log('Year', year);

// En este código, estás utilizando la sintaxis de desestructuración de JavaScript
// para extraer las propiedades song, songDuration y details del objeto audioPlayer.
// Luego, estás desestructurando el objeto details para obtener las propiedades author y year.
// Finalmente, estás imprimiendo estos valores en la consola.