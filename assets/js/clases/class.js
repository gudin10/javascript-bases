class Persona{
    
    static _conteo = 0;
    
    static get conteo(){
        return Persona._conteo + ' Intancias';
    }

    static mensaje (){
        console.log(this.nombre);
        console.log('soy metodos statico');
    }
    nombre= '';
    codigo= '';
    frase = '';
    comida = '';
    constructor(nombre,codigo,frase){
        
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        Persona._conteo ++;

    }

    set setcomidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getcomidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    Mifrase(){
        this.quienSoy();
        console.log(`Mi frase ${this.frase}`);
    }

}

const spiderman = new Persona('Dead','090909','Vamos a darle');
spiderman.quienSoy();

const nuevo = new Persona('Dead','090909','Vamos a darle');
nuevo.Mifrase();

spiderman.setcomidaFavorita = 'Frambuesas';
//console.log(spiderman.getcomidaFavorita);
//console.log(spiderman);
console.log('Conteo statico', Persona._conteo);
console.log(Persona.conteo);

Persona.mensaje();

Persona.externa = 'Hola mundo';

console.log(Persona.externa);



