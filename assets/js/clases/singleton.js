class Singleton {
    static instacia;
    nombre = '';

    constructor(nombre = ''){
        
        if( !!Singleton.instacia ){
            return Singleton.instacia;
        }
        Singleton.instacia = this;
        this.nombre = nombre;

        return this;
    }
}

const instancia1 = new Singleton('WM-Maravilla');
const instancia2 = new Singleton('Thorsito');
const instancia3 = new Singleton('Mi vidita');

console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia2 es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia3 es: ${ instancia3.nombre }`);