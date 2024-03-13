class Persona{
    
    static proObjeto({ nombre,apellido,pais }){
        return new Persona( nombre,apellido,pais );
    }

    constructor(nombre ,apellido ,pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`Info ${this.nombre} , ${this.apellido}, ${this.pais}`);
    }
}

const   nombre1 = 'Melisa',
        apellido1 = 'Ramirez',
        pais1 = 'Argentina';

const persona1 = new Persona(nombre1,apellido1,pais1);

const juani ={
    nombre : 'Carlitos',
    apellido : 'Gudino',
    pais : 'Colombia',
}

const persona2 = Persona.proObjeto( juani );

persona1.getInfo();

persona2.getInfo();