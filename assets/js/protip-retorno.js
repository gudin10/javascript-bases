// function crearPersona (nombre , apellido){
//     return {nombre,apellido}
// }

const crearPersona = (nombre , apellido)=> ({nombre,apellido});

const persona = crearPersona ('Carlitos','gudino');

console.log( persona );

function imprimeArgumentos(){
    console.log( arguments );
}

const imprimeArgumentos2 = ( edad , ...args)=>{
    //console.log( {edad,args}  );
    return args
}

const [casado , vivo ,nombre] = imprimeArgumentos2(10 , false ,true ,'Carlos');

console.log( {casado , vivo ,nombre} );

const {apellido : nuevoapellido} = crearPersona ('Carlitos','gudino');

console.log(nuevoapellido);

//Destructuracion argumentos

const andres = {
    nombre : 'Juanito',
    codeName : 9898,
    vivo : false ,
    edad : 28,
    trajes : ['Mark I','Kika nietto','Siute'],
}; //si miran las llaves es objeto

const imprimePropiedades = ({nombre , codeName ,vivo ,edad = 0 ,trajes})=>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad });
    console.log({trajes});
}

imprimePropiedades( andres );