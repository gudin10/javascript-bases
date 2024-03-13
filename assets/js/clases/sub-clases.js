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

class Heroe extends Persona{
    clan = 'Sin clan';

    constructor(nombre,codig,frase){
        
        super(nombre,codig,frase);
        this.clan = 'Avengers';

    }

    quienSoy(){
        
        console.log(`Soy ${this.nombre} Mi clan es ${this.clan}`);        
        super.quienSoy();
    }
}

const spiderman = new Heroe('Woman','Hulk','Yo no soy tu marido');

console.log(spiderman);

spiderman.quienSoy();