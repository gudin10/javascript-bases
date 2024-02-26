function saludar( nombre ) {
    console.log(arguments);

    console.log('Hola ' , nombre );
    return 1;
}

const saludar2 = function saludar() {
    console.log('Hola mundo');
}

const saludo = ( nombre )=>{
    console.log('Buenas', nombre);
}//funcion anonima

function saludar20( nombre ) {
    return [10,20];   
}

const retorno_saludar = saludar20('Carlitos', 40 , true , 'Costa Marfil');
console.log(  retorno_saludar[0], retorno_saludar[1]  );
//saludo('Marino');

function sumar (a , b){
    return a + b ; 
} 

const sumar2 = ( a ,b )=>{
    return a +b ;
}

const sumar3 = ( a , b )=> a +b ; //equivale a funcion de flecha cuando solo se ejecuta el return

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = ()=> Math.random();

console.log( sumar(5,10) );

console.log(getAleatorio2() );

