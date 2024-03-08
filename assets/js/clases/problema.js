class problema {

}
//Esto se utiliza en navagadores viejos siempre con new
function Persona(nombre , edad){
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;
}

const mario = new Persona('Jorge',22);
console.log(mario);